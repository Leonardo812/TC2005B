const express = require('express');
const router = express.Router();

const paulController = require('../controllers/paul.controller');

router.get('/trivia', paulController.getTrivia);

router.post('/trivia', paulController.postTrivia);

module.exports = router;