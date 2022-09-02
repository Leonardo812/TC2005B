const express = require('express');
const router = express.Router();

const equipoController = require('../controllers/equipo.controller');

router.get('/', equipoController.getEquipos);

module.exports = router;