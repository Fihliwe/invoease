const express = require('express');

const {
    getAllQoutes,
    getQouteById,
    createQoute,
    updateQoute,
    deleteQoute
} = require('../controllers/qouteController');

const router = express.Router();

// Define routes
router.get('/', getAllQoutes);            // GET /api/qoutes
router.get('/:id', getQouteById);         // GET /api/qoutes/:id
router.post('/', createQoute);            // POST /api/qoutes
router.put('/:id', updateQoute);          // PUT /api/qoutes/:id
router.delete('/:id', deleteQoute);       // DELETE /api/qoutes/:id

module.exports = router;