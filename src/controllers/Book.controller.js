const express = require('express');
const bookService = require('./../services/Book.service');

const bookController = express.Router();

bookController.get('/book/getById', (req, res, next) => {
    bookService.getBookById(parseInt(req.query.id)).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao obter dados do livro.');
        next(error);
    });
});

bookController.get('/book/searchBook', (req, res, next) => {
    const query = req.query;
    bookService.searchBook(query.term, query.page, query.itens).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar livros.');
        next(error);
    });
});

module.exports = bookController;
