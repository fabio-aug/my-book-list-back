const express = require('express');
const fr = require('./../utils/FormatResponse');
const reviewService = require('./../services/Review.service');

const reviewController = express.Router();

reviewController.post('/review/create', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Criar nova review de um livro'

    /* #swagger.parameters['create'] = {
        required: true,
        in:'body',
        schema: {
            idUser: 0,
            idBook: 0,
            score: 10,
            note: 'Nota', 
            status: 1,
            dateOfReview: 'yyyy-MM-dd 00:00:00'
        }
    } */

    reviewService.createReview(req.body).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseSucces(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idUser: 0,
                idBook: 0,
                score: 10,
                note: 'Nota', 
                status: 1,
                dateOfReview: 'yyyy-MM-dd 00:00:00'
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

reviewController.put('/review/update', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Atualizar review de um livro'

    /* #swagger.parameters['update'] = {
        required: true,
        in:'body',
        schema: {
            idUser: 0,
            idBook: 0,
            score: 10,
            note: 'Nota', 
            status: 1,
            dateOfReview: 'yyyy-MM-dd 00:00:00'
        }
    } */

    reviewService.updateReview(req.body).then((response) => {
        const data = fr.responseSucces("Sucesso!");
        res.send(data);
    }).catch((error) => {
        const data = fr.responseSucces(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: "Sucesso!",
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

reviewController.get('/review/getByIds', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Remoção de uma review de um livro.'

    /* #swagger.parameters['idUser'] = {
        description: 'Id do usuário a ter a review buscada.',
        type: 'integer',
        required: true
    } */

    /* #swagger.parameters['idBook'] = {
        description: 'Id do livro a ter sua review buscada.',
        type: 'integer',
        required: true
    } */

    reviewService.getReviewByIds(req.query.idUser, req.query.idBook).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseSucces(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = {
        schema: {
            data: {
                idUser: 0,
                idBook: 0,
                score: 10,
                note: 'Nota', 
                status: 1,
                dateOfReview: 'yyyy-MM-dd 00:00:00'
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

    /* #swagger.parameters['idUser'] = {
        required: true,
        description: 'Id do usuário a ter suas reviews listadas.',
        type: 'integer'
    } */

    reviewService.getReviewsByIdUser(req.query.idUser).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseSucces(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: [{
                idUser: 0,
                idBook: 0,
                score: 10,
                note: 'Nota', 
                status: 1,
                dateOfReview: 'yyyy-MM-dd 00:00:00',
                Book: {
                    idBook: 0,
                    status: 0,
                    photo: 'base64 ou null',
                    name: 'nome',
                    author: 'autor',
                    publisher: 'editora',
                    dateOfPublication: 'yyyy-MM-dd',
                    synopsis: 'sinopse'
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

reviewController.get('/review/getMostReviewed', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Listar os livros com maior quantidade de reviews.'

    reviewService.getMostReviewed().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = {
        schema: {
            data: [{
                idUser: 0,
                idBook: 0,
                score: 10,
                note: 'Nota', 
                status: 1,
                dateOfReview: 'yyyy-MM-dd 00:00:00',
                Book: {
                    idBook: 0,
                    status: 0,
                    photo: 'base64 ou null',
                    name: 'nome',
                    author: 'autor',
                    publisher: 'editora',
                    dateOfPublication: 'yyyy-MM-dd',
                    synopsis: 'sinopse'
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

reviewController.get('/review/getBestReviewed', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Listar os livros com melhor nota nas reviews.'

    reviewService.getBestReviewed().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data)
    });

    /* #swagger.responses[200] = {
        schema: {
            data: [{
                idUser: 0,
                idBook: 0,
                score: 10,
                note: 'Nota', 
                status: 1,
                dateOfReview: 'yyyy-MM-dd 00:00:00',
                Book: {
                    idBook: 0,
                    status: 0,
                    photo: 'base64 ou null',
                    name: 'nome',
                    author: 'autor',
                    publisher: 'editora',
                    dateOfPublication: 'yyyy-MM-dd',
                    synopsis: 'sinopse'
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

reviewController.get('/review/getLastReviews', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Buscar últimas reviews de um livro.'

    /* #swagger.parameters['idBook'] = {
        required: true,
        type: 'integer',
        description: 'Id do livro a buscar as últimas reviews.'
    } */

    reviewService.getLastReviews(req.query.idBook).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: [{
                idUser: 0,
                idBook: 0,
                score: 10,
                note: 'Nota', 
                status: 1,
                dateOfReview: 'yyyy-MM-dd 00:00:00',
                User: {
                    name: 'nome',
                    nickname: 'apelido',
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

reviewController.delete('/review/delete', (req, res, next) => {
    // #swagger.tags = ['review']
    // #swagger.description = 'Remoção de uma review de um livro.'

    /* #swagger.parameters['idUser'] = {
        description: 'Id do usuário a ter a review removida.',
        type: 'integer',
        required: true
    } */

    /* #swagger.parameters['idBook'] = {
        description: 'Id do livro a ter sua review removida.',
        type: 'integer',
        required: true
    } */

    const { idUser, idBook } = req.query;
    reviewService.deleteUser(idUser, idBook).then((response) => {
        const data = fr.responseSucces('Review deletada com sucesso.');
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: 'Review deletada com sucesso.',
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
