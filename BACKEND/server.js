// Importing dotenv
const dotenv = require("dotenv");
dotenv.config();

// Importing express
const express = require("express");
const app = express();

// JSON parsing middleware
app.use(express.json());

// Importing cors
const cors = require("cors");
app.use(cors());

// Importing bycrypt
const bcrypt = require("bcrypt");

// Importing mongoose
const mongoose = require("mongoose");

// Importing morgan and setting up morgan middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// Importing monogoDB connection
const database = require("./config/database");

// Importing jsonwebtoken
const jwt = require("jsonwebtoken");

// Importing models
const User = require("./models/userModel");
const Project = require("./models/projectModel");
const Task = require("./models/taskModel");

// setting up signup route
app.post("/signup", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(
    req.body.password,
    Number(process.env.SALT_ROUNDS),
  );
  await User.create({ username: req.body.username, password: hashedPassword });
  res.status(201).json({ message: "User created" });
});

// setting up sign in route
app.post("/signin", async (req, res) => {
  console.log('Sign in');
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const payload = {
    id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.status(200).json({ message: "Sign in successful", token, user });
});

// Token authentication middleware
const authenticateToken = require("./middleware/authenticateToken");
app.use(authenticateToken);

// Protected routes

// Project routes

// Create project
app.post("/:userId/projects", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    const project = await Project.create({
      name: req.body.name,
      owner: req.params.userId,
    });
    res.status(201).json({ message: "Project created successfully!", project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// List projects
app.get("/:userId/projects", async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.params.userId });
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update project
app.put("/:userId/projects/:projectId", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.projectId, owner: req.params.userId },
      { name: req.body.name },
      { new: true },
    );
    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }
    res.status(200).json({ message: "Project updated successfully!", project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete project
app.delete("/:userId/projects/:projectId", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.projectId,
      owner: req.params.userId,
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }
    res.status(200).json({ message: "Project deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Task routes

// Create task under a project
app.post("/:userId/projects/:projectId/tasks", async (req, res) => {
  console.log('task being created')
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      projectId: req.params.projectId,
    });
    res.status(201).json({ message: "Task created successfully!", task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// List tasks under a project
app.get("/:userId/projects/:projectId/tasks", async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a single task
app.put("/:userId/projects/:projectId/tasks/:taskId", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      },
      { new: true },
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found!" });
    }
    res.status(200).json({ message: "Task updated successfully!", task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a single task
app.delete("/:userId/projects/:projectId/tasks/:taskId", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.taskId,
      projectId: req.params.projectId,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found!" });
    }
    res.status(200).json({ message: "Task deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Setting up port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
