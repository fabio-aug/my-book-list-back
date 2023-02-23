const express = require('express');
const fr = require('./../utils/FormatResponse');
const reviewService = require('./../services/Review.service');

const reviewController = express.Router();

reviewController.post('/review/create', (req, res, next) => {

    // #swagger.tags = ['review']
    // #swagger.description = 'Criar nova review de um livro'
    // #swagger.parameters['idUser'] = {in:'body', description: 'Id do usuário a fazer a review livro.', type: 'integer'}
    // #swagger.parameters['idBook'] = {in:'body', description: 'Id do livro a ser feita a review.', type: 'integer' }

    reviewService.createReview(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao adicionar review.');
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

reviewController.get('/review/getReviewsByIdUser', (req, res, next) => {

    // #swagger.tags = ['review']
    // #swagger.description = 'Listar as reviews do usuário.'
    // #swagger.parameters['idUser'] = { description: 'Id do usuário a ter suas reviews listadas.', type: 'integer' }

    reviewService.getReviewsByIdUser(req.query.idUser).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar lista de reviews.');
        next(error);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                reviewsList:[{
                    idBook: 0,
                    idUser: 0,
                    Book: {
                        idBook: 0,
                        photo: 'base64 ou null',
                        name: 'nome',
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

reviewController.delete('/review/delete', (req, res, next) => {

    // #swagger.tags = ['favorite']
    // #swagger.description = 'Remoção de uma review de um livro.'
    // #swagger.parameters['idUser'] = {description: 'Id do usuário a ter a review removida.', type: 'integer'}
    // #swagger.parameters['idBook'] = {description: 'Id do livro a ter sua review removida.', type: 'integer' }
    
    const { idUser, idBook } = req.query;
    reviewService.deleteUser(idUser, idBook).then((response) => {
        res.send('Sucesso!');
    }).catch((error) => {
        console.error('Erro ao deletar review.');
        next(error);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                'Review deletada com sucesso.'
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

reviewController.get('/review/getMostReviewed', (req, res, next) => {
    
    // #swagger.tags = ['review']
    // #swagger.description = 'Listar os livros com maior quantidade de reviews.'
    // #swagger.parameters['idBook'] = { description: 'Id do livro a ter sua quantidade de reviews contadas.', type: 'integer' }

    reviewService.getMostReviewed().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idBook: 0
                Book: {
                        idBook: 0,
                        status: 0,
                        photo: 'base64 ou null',
                        name: 'nome',
                        author: "autor",
                        publisher: "editora",
                        dateOfPublication: 'yyyy-MM-dd',
                        synopsis: "sinopse"
                    }
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

reviewController.get('/review/getBestReviewed', (req, res, next) => {

    // #swagger.tags = ['review']
    // #swagger.description = 'Listar os livros com melhor nota nas reviews.'
    // #swagger.parameters['idBook'] = { description: 'Id do livro a ter a busca feita', type: 'integer' }

    reviewService.getBestReviewed().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data)
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idBook: 0
                Book: {
                        idBook: 0,
                        score: 0,
                        photo: 'base64 ou null',
                        name: 'nome',
                        author: "autor",
                        synopsis: "sinopse"
                    }
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

reviewController.get('/review/dashboardByIdUser', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Buscar informaçãoes da lista de reviews do usuário pelo ID.'

    /* #swagger.parameters['idUser'] = {
        required: true,
        type: 'integer',
        description: 'Id do usuário a buscar informações.'
    } */

    reviewService.dashboardByIdUser(req.query.idUser).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });



    /* #swagger.responses[200] = { 
        schema: {
            data: {
                reading: 0,
                completed: 0,
                stopped: 0,
                toRead: 0
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





module.exports = reviewController;
