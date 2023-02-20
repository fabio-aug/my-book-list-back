const express = require('express');
const bookService = require('./../services/Book.service');
const fr = require('./../utils/FormatResponse');
const bookController = express.Router();

bookController.get('/book/getById', (req, res, next) => {
    // #swagger.tags = ['book']

    bookService.getBookById(parseInt(req.query.id)).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao obter dados do livro.');
        next(error);
    });
});

bookController.get('/book/searchBook', (req, res, next) => {
    // #swagger.tags = ['book']
    
    const query = req.query;
    bookService.searchBook(query.term, query.page, query.itens).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao buscar livros.');
        next(error);
    });
});

bookController.get('/book/getLastBooks', (req, res, next) => {
    // #swagger.tags = ['book']
    bookService.getLastBooks().then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });
});

module.exports = bookController;
