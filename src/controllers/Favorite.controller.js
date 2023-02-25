const express = require('express');
const fr = require('./../utils/FormatResponse');
const favoriteService = require('./../services/Favorite.service');

const favoriteController = express.Router();

favoriteController.post('/favorite/create', (req, res, next) => {
    // #swagger.tags = ['favorite']
    // #swagger.description = 'Criar novo livro favorito do usuário.'

    /* #swagger.parameters['favorite'] = {
        in:'body',
        required: true,
        description: 'Id do usuário e livro para criação de um favorito.',
        schema: {
            idUser: 0,
            idBook: 0,
        }
    } */

    favoriteService.createFavorite(req.body).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idBook: 0,
                idUser: 0
            },
            status: true
        },
        description: 'Sucesso.' 
    } */

    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro.' 
    } */
});

favoriteController.get('/favorite/getFavoritesListByIdUser', (req, res, next) => {
    // #swagger.tags = ['favorite']
    // #swagger.description = 'Listar livros favoritos do usuário.'

    /* #swagger.parameters['idUser'] = {
        required: true,
        description: 'Id do usuário a ter seus favoritos listados.',
        type: 'integer'
    } */

    favoriteService.getFavoritesListByIdUser(req.query.idUser).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: [{
                idBook: 0,
                idUser: 0,
                Book: {
                    idBook: 0,
                    photo: 'base64 ou null',
                    name: 'nome',
                    author: "autor",
                    publisher: "editora",
                    dateOfPublication: 'yyyy-MM-dd',
                    synopsis: "sinopse"
                }
            }],
            status: true
        },
        description: 'Sucesso.' 
    } */

    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro.' 
    } */
});

favoriteController.delete('/favorite/delete', (req, res, next) => {
    // #swagger.tags = ['favorite']
    // #swagger.description = 'Remoção de livro como favorito do usuário.'
    
    /* #swagger.parameters['idUser'] = {
        required: true,
        description: 'Id do usuário',
        type: 'integer'
    } */

    /* #swagger.parameters['idBook'] = {
        required: true,
        description: 'Id do livro',
        type: 'integer'
    } */

    favoriteService.deleteFavorite(req.query.idUser, req.query.idBook).then((response) => {
        const data = fr.responseSucces('Favorito deletado com sucesso.');
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: 'Favorito deletado com sucesso.',
            status: true
        },
        description: 'Sucesso.' 
    } */

    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro.' 
    } */
});

module.exports = favoriteController;
