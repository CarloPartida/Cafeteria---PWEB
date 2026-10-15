const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');
//Los .. son para acceder y volver

router.post('/pedido', pedidosController.registrarPedido);

module.exports = router;