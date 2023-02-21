const express = require('express');
const fr = require('./../utils/FormatResponse');
const reviewService = require('./../services/Review.service');

const reviewController = express.Router();

reviewController.post('/review/create', (req, res, next) => {
    reviewService.createReview(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao adicionar review.');
        next(error);
    });
});

reviewController.get('/review/getReviewsByIdUser', (req, res, next) => {
    reviewService.getReviewsByIdUser(req.query.idUser).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar lista de reviews.');
        next(error);
    });
});

reviewController.delete('/review/delete', (req, res, next) => {
    const { idUser, idBook } = req.query;
    reviewService.deleteUser(idUser, idBook).then((response) => {
        res.send('Sucesso!');
    }).catch((error) => {
        console.error('Erro ao deletar review.');
        next(error);
    });
});

reviewController.get('/review/getMostReviewed', (req, res, next) => {
    // #swagger.tags = ['review']
    reviewService.getMostReviewed().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });
});

reviewController.get('/review/getBestReviewed', (req, res, next) => {
    // #swagger.tags = ['review']
    reviewService.getBestReviewed().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data)
    });
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
