var sales = require('../assets/sales/sales.json');


function salesController(server) {
    server.get('/sales',function(req,res) {
        res.json(sales);
    });

    server.delete('/sales/:id',function(req,res) {
        var id = parseInt(req.params.id);
        deleteSales(id);
        res.json(sales);
    });

    server.post('/sales',function(req,res) {
        addSales(req.body);
        res.json(sales);
    });

    server.put('/sales',function(req,res) {
        updateSales(req.body);
        res.json(sales);
    });
}

module.exports = salesController;


