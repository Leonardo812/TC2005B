const express = require('express');
const router = express.Router();

const userController = require('../controllers/jugador.controller');

router.get('/logout', userController.logout);

module.exports = router;