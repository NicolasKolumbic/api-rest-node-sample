var products = require('../assets/products/products.json');
var express = require("express");

function deleteProduct(id) {
    return products.filter(function(product) {
        return product.id !== parseInt(id, 10);
    });
}

function addProduct(product) {
    products.push(product);
    return products;
}

function ProductController(server) {

    server.get('/products', function(req, res) {
        res.json(products);
    });

    server.delete('/product/:id', function(req, res) {
        var _products = deleteProduct(req.params.id);
        res.json(_products);
    });

    server.post('/product', function(req, res) {
        var product = req.body;
        console.log(req.body);
        var addedProduct = addProduct(product);
        res.json(addedProduct);
    });
}


module.exports = ProductController;


