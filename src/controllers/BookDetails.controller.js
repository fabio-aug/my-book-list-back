const express = require('express');
const BookDetailsService = require('./../services/BookDetails.service');

const fr = require('./../utils/FormatResponse');
const bookDetailsController = express.Router();

bookDetailsController.get('/bookDetails/getById', (req, res, next) => {
    // #swagger.tags = ['book']

    BookDetailsService.getBookById(parseInt(req.query.id)).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao obter dados do livro.');
        next(error);
    });
});

bookDetailsController.get('/bookDetails/getLastReviews', (req, res, next) => {
    // #swagger.tags = ['review']
    BookDetailsService.getLastReviews().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });
});

module.exports = bookDetailsController;

