const express = require('express');
const favoriteService = require('./../services/Favorite.service');

const favoriteController = express.Router();

favoriteController.post('/favorite/create', (req, res, next) => {

    // #swagger.tags = ['favorite']
    // #swagger.description = 'Criar novo livro favorito do usuário.'
    // #swagger.parameters['idUser'] = {in:'body', description: 'Id do usuário a favoritar o livro.', type: 'integer'}
    // #swagger.parameters['idBook'] = {in:'body', description: 'Id do livro a ser favoritado.', type: 'integer' }

    favoriteService.createFavorite(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao adicionar favorito.');
        next(error);
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
    // #swagger.parameters['idUser'] = { description: 'Id do usuário a ter seus favoritos listados.', type: 'integer' }

    favoriteService.getFavoritesListByIdUser(req.query.idUser).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar lista de favoritos.');
        next(error);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                favoritesList:[{
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
                }]
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

favoriteController.delete('/favorite/delete', (req, res, next) => {

    // #swagger.tags = ['favorite']
    // #swagger.description = 'Remoção de livro como favorito do usuário.'
    // #swagger.parameters['idUser'] = {description: 'Id do usuário a ter o livro retirado dos seus favoritos.', type: 'integer'}
    // #swagger.parameters['idBook'] = {description: 'Id do livro a ser removido dos favoritos do usuário.', type: 'integer' }

    const { idUser, idBook } = req.query;
    favoriteService.deleteFavorite(idUser, idBook).then((response) => {
        res.send('Sucesso!');
    }).catch((error) => {
        console.error('Erro ao deletar favorito.');
        next(error);
    });
    /* #swagger.responses[200] = { 
        schema: {
            data: {
                'Favorito deletado com sucesso.'
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

module.exports = favoriteController;
