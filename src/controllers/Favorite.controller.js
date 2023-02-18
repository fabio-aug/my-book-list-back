const express = require('express');
const favoriteService = require('./../services/Favorite.service');

const favoriteController = express.Router();

favoriteController.post('/favorite/create', (req, res, next) => {
    // #swagger.tags = ['favorite']
    
    favoriteService.createFavorite(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao adicionar favorito.');
        next(error);
    });
});

favoriteController.get('/favorite/getFavoritesListByIdUser', (req, res, next) => {
    // #swagger.tags = ['favorite']
    
    favoriteService.getFavoritesListByIdUser(req.query.idUser).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar lista de favoritos.');
        next(error);
    });
});

favoriteController.delete('/favorite/delete', (req, res, next) => {
    // #swagger.tags = ['favorite']
    
    const { idUser, idBook } = req.query;
    favoriteService.deleteUser(idUser, idBook).then((response) => {
        res.send('Sucesso!');
    }).catch((error) => {
        console.error('Erro ao deletar favorito.');
        next(error);
    });
});

module.exports = favoriteController;
