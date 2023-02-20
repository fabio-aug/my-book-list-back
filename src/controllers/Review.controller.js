const express = require('express');
const fr = require('./../utils/FormatResponse');
const reviewService = require('./../services/Review.service');

const reviewController = express.Router();

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
