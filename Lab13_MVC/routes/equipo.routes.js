const express = require('express');
const router = express.Router();

const equipoController = require('../controllers/equipo.controller');

router.get('/new', equipoController.getNewEquipo);

router.post('/new', equipoController.postNewEquipo);

router.get('/', equipoController.getEquipos);

module.exports = router;