const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', routes); // All routes under /api

// Global Error Handler
app.use(errorMiddleware);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
