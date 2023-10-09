var products = require('../assets/products/products.json');

function deleteProduct(id) {
    return products.filter(function(product) {
        return product.id !== parseInt(id, 10);
    });
}

function addProduct(product) {
    product.id = parseInt(product.id, 10);
    product.quantity = parseFloat(product.quantity, 10);
    product.price = parseFloat(product.price, 10);
    products.push(product);
    return products;
}

function updateProduct(product) {
    return products.map(function(storedProduct) {
        if(storedProduct.id === parseInt(product.id, 10)) {
            product.id = parseInt(product.id, 10);
            product.quantity = parseFloat(product.quantity, 10);
            product.price = parseFloat(product.price, 10);
            return product;
        }
        return storedProduct;
    });
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
        var addedProduct = addProduct(product);
        res.json(addedProduct);
    });

    server.put('/product', function(req, res) {
        var product = req.body;
        var updatedProduct = updateProduct(product);
        res.json(updatedProduct);
    });
}


module.exports = ProductController;


