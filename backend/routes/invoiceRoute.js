const express = require('express');
const { 
  getAllInvoices, 
  getInvoiceById, 
  createInvoice, 
  updateInvoice, 
  deleteInvoice 
} = require('../controllers/invoiceController');

const router = express.Router();

// Define routes
router.get('/', getAllInvoices);            // GET /api/invoices
router.get('/:id', getInvoiceById);         // GET /api/invoices/:id
router.post('/', createInvoice);            // POST /api/invoices
router.put('/:id', updateInvoice);          // PUT /api/invoices/:id
router.delete('/:id', deleteInvoice);       // DELETE /api/invoices/:id

module.exports = router;