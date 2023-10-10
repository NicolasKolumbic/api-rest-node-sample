var express = require("express");
var server = express();

var products = require('./products/products.js');
var clients = require ('./clients/clients.js')
var sales = require('./sales/sales.js')

var port = 3005;

server.use(express.json()) // for parsing application/json
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

server.listen(port, function() {
    console.info("The applicacion is running on port:3005");
});

products(server);
clients(server)
sales(server);

