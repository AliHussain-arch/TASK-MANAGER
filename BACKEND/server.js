// Importing dotenv
const dotenv = require('dotenv');
dotenv.config();

// Importing express 
const express = require('express');
const app = express();

// JSON parsing middleware
app.use(express.json());

// Importing cors
const cors = require('cors');
app.use(cors());

// Importing bycrypt
const bcrypt = require('bcrypt');

// Importing mongoose
const mongoose = require('mongoose');

// Importing morgan and setting up morgan middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// Importing monogoDB connection
const database = require('./config/database');

// Importing jsonwebtoken
const jwt = require('jsonwebtoken');

// Importing models
const User = require('./models/userModel');
const Project = require('./models/projectModel');
const Task = require('./models/taskModel');

// setting up signup route
app.post('/signup', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
    await User.create({ username: req.body.username, password: hashedPassword });
    res.status(201).json({ message: 'User created' });
});

// setting up sign in route
app.post('/signin', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const payload = {
        id: user._id,
        username: user.username
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Sign in successful', token });
}
);

// Token authentication middleware
const authenticateToken = require('./middleware/authenticateToken');
app.use(authenticateToken); 

// Protected routes

// Project routes
// Create project
app.post(':userId/projects', async (req, res) => {

});
// List projects
app.get(':userId/projects', async (req, res) => {

});
// Update project
app.put(':userId/projects/:projectId', async (req, res) => {

});
// Delete project
app.delete(':userId/projects/:projectId', async (req, res) => {

});

// Task routes
// Create task under a project
app.post(':userId/projects/:projectId/tasks', async (req, res) => {

});
// List tasks under a project
app.get(':userId/projects/:projectId/tasks', async (req, res) => {

});
// Update a single task
app.put(':userId/projects/:projectId/tasks/:taskId', async (req, res) => {

});
// Delete a single task
app.delete(':userId/projects/:projectId/tasks/:taskId', async (req, res) => {
    
});

// Setting up port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
