const express = require('express');
const invoiceRoutes = require('./invoiceRoutes');
const clientRoutes = require('./clientRoutes');

const router = express.Router();

// Use feature-specific routes
router.use('/invoices', invoiceRoutes);   // All invoice routes under /api/invoices
router.use('/clients', clientRoutes);     // All client routes under /api/clients

module.exports = router;
