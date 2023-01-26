const express = require('express');
const bookService = require('./../services/Book.service');

const bookController = express.Router();

bookController.get('/book/getById', (req, res, next) => {
    bookService.getBookById(parseInt(req.query.id)).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error("Erro ao buscar livro.");
        next(error);
    });
});

module.exports = bookController;
