const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth.js');

const equipoController = require('../controllers/equipo.controller');

router.get('/new', isAuth, equipoController.getNewEquipo);

router.post('/new', isAuth, equipoController.postNewEquipo);

router.get('/', isAuth, equipoController.getEquipos);

module.exports = router;