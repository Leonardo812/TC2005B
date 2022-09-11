const express = require('express');
const isAuth = require('../util/is-auth.js');
const router = express.Router();

const visualController = require('../controllers/perfil_controller');


//Para videojuegos
router.get('/nuevoperfil',isAuth,  visualController.get_nuevo_perfil);
router.post('/nuevoperfil', visualController.post_nuevo_perfil);

router.use('/', visualController.principal);

module.exports = router;