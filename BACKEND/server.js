// Importing dotenv
const dotenv = require('dotenv');
dotenv.config();

// Importing express 
const express = require('express');
const app = express();

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