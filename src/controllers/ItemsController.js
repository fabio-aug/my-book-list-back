const express = require('express');
const bd = require('../database/Database');
const ro = require('../utils/ResponseObject');
const statusCode = require('../utils/StatusCode');

// CRUD de Items
const itemsController = express.Router();

itemsController.post('/items/add', (request, response) => {
    const item = bd.add(request.body);
    response.status(statusCode.OK).send(item);
});

itemsController.get('/items/getAll', (request, response) => {
    const item = bd.getAll();
    response.status(statusCode.OK).send(item);
});

itemsController.get('/items/getById', (request, response) => {
    const item = bd.getItem(request.query.id);
    response.status(statusCode.OK).send(item);
});

itemsController.put('/items/update', (request, response) => {
    try {
        const item = bd.updateItem(request.body);
        response.status(statusCode.OK).send(ro.success(item));
    } catch (e) {
        response.status(statusCode.InternalServerError).send(ro.error(e));
    }
});

itemsController.delete('/items/delete', (request, response) => {
    bd.deleteItem(request.query.id);
    response.status(statusCode.OK).send();
});

module.exports = itemsController;