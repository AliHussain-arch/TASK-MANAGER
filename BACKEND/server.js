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

// Importing models
const User = require('./models/userModel');
const Project = require('./models/projectModel');
const Task = require('./models/taskModel');


// setting up signup route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created' });
});

// setting up sign in route
app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await
        User.findOne({ username: username });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Sign in successful' });
}
);

// Setting up port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});