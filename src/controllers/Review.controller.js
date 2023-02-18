const express = require('express');
const reviewService = require('./../services/Review.service');

const reviewController = express.Router();

reviewController.post('/review/create', (req, res, next) => {
    // #swagger.tags = ['review']
    
    reviewService.createReview(req.body).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao adicionar review.');
        next(error);
    });
});

reviewController.get('/review/getReviewsByIdUser', (req, res, next) => {
    // #swagger.tags = ['review']
    
    reviewService.getReviewsByIdUser(req.query.idUser).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar lista de reviews.');
        next(error);
    });
});

reviewController.delete('/review/delete', (req, res, next) => {
    // #swagger.tags = ['review']
    
    const { idUser, idBook } = req.query;
    reviewService.deleteUser(idUser, idBook).then((response) => {
        res.send('Sucesso!');
    }).catch((error) => {
        console.error('Erro ao deletar review.');
        next(error);
    });
});

module.exports = reviewController;
