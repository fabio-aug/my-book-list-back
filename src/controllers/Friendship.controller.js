const express = require('express');
const friendshipService = require('./../services/Friendship.service');

const friendshipController = express.Router();

friendshipController.get('/friendship/searchUserFriendship', (req, res, next) => {
    const query = req.query;
    friendshipService.searchUserFriendship(query.idUser, query.page, query.itens).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar livros.');
        next(error);
    });
});

module.exports = friendshipController;
