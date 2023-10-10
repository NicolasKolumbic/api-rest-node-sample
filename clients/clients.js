var clients = require('../assets/clients/clients.json');

function deleteClients(id) {
    var index = clients.findIndex(function(client) {
        return client.id_client === id;
    });
    clients.splice(index,1);
}

function addClients(client) {
    var newClient ={
        id_client: clients.length + 1,
        name: client.name,
        last_name: client.last_name,
        email: client.email
    };
    clients.push(newClient);
}

function updateClients(client) {
    var index = clients.findIndex(function(cl) {
        return cl.id_client === parseInt(client.id_client);
    });
    clients.splice(index,1,{
        id_client: client.id_client,
        name: client.name,
        last_name: client.last_name,
        email: client.email
    });
}

function clientsController(server) {
    server.get('/clients',function(req,res) {
        res.json(clients);
    });

    server.delete('/clients/:id',function(req,res) {
        var id = parseInt(req.params.id);
        deleteClients(id);
        res.json(clients);
    });

    server.post('/clients',function(req,res) {
        addClients(req.body);
        res.json(clients);
    });

    server.put('/clients',function(req,res) {
        updateClients(req.body);
        res.json(clients);
    });
}

module.exports = clientsController;