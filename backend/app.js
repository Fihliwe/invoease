const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', routes);

// Global Error Handler
app.use(errorMiddleware);

module.exports = app;
