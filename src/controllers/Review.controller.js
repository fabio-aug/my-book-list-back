const express = require('express');
const reviewService = require('./../services/Review.service');

const reviewController = express.Router();

reviewController.get('/review/getMostReviewed', (req, res, next) => {
    reviewService.getMostReviewed(req.query.itens).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error("Erro ao buscar livros.");
        next(error);
    });
});

reviewController.get('/review/getBestReviewed', (req, res, next) => {
    reviewService.getBestReviewed(req.query.itens).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error("Erro ao buscar livros.");
        next(error);
    });
});

module.exports = reviewController;
