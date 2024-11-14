const express = require('express');
const { 
  getAllClients, 
  getClientById, 
  createClient 
} = require('../controllers/clientController');

const router = express.Router();

router.get('/', getAllClients);            // GET /api/clients
router.get('/:id', getClientById);         // GET /api/clients/:id
router.post('/', createClient);            // POST /api/clients

module.exports = router;
