const express = require('express');

const router = express.Router();


router.get('/hotel', (request, response, next) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<h1>Bienvenido al hotel</h1>"+
    '<img src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/five-star-hotel-icon.png" width="500 ""/>';
    response.send(html);
});


module.exports = router;