const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth.js');

const paulController = require('../controllers/paul.controller');

router.get('/trivia', isAuth, paulController.getTrivia);

router.post('/trivia', isAuth, paulController.postTrivia);

module.exports = router;