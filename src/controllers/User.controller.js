const express = require('express');
const userService = require('./../services/User.service');

const userController = express.Router();

userController.post('/user/create', (req, res, next) => {
    userService.createUser(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao adicionar usuário.');
        next(error);
    });
});

userController.get('/user/getById', (req, res, next) => {
    userService.getUserById(parseInt(req.query.id)).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar usuário.');
        next(error);
    });
});

userController.put('/user/update', (req, res, next) => {
    userService.updateUser(parseInt(req.body.idUser), req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao atualizar usuário.');
        next(error);
    });
});

userController.delete('/user/delete', (req, res, next) => {
    userService.deleteUser(parseInt(req.query.id)).then((response) => {
        res.send('Sucesso!');
    }).catch((error) => {
        console.error('Erro ao deletar usuário.');
        next(error);
    });
});

module.exports = userController;
