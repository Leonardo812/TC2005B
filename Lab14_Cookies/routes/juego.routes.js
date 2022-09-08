const express = require('express');
const router = express.Router();

const gameController = require('../controllers/juegos.controller');

router.get('/juegos', gameController.getjuegos);

router.post('/juegos', gameController.postjuegos);

module.exports = router;