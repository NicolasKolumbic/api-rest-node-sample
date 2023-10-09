var express = require("express");
var server = express();

var products = require('./products/products.js');

var port = 3005;

server.use(express.json()) // for parsing application/json
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

server.listen(port, function() {
    console.info("The applicacion is running on port:3005");
});

products(server);


