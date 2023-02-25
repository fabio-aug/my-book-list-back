const express = require('express');
const bookService = require('./../services/Book.service');
const fr = require('./../utils/FormatResponse');
const bookController = express.Router();

bookController.get('/book/getById', (req, res, next) => {
    // #swagger.tags = ['book']
        // #swagger.description = 'Busca livro pelo Id'
    /* #swagger.parameters['id'] = {
        required: true,
        type: 'integer',
        description: 'Id do livro a ser buscado.'
    } */

    bookService.getBookById(parseInt(req.query.id)).then((response) => {
        res.send(response);
    }).catch((error) => {
        console.error('Erro ao obter dados do livro.');
        next(error);
    });
});

bookController.get('/book/searchBook', (req, res, next) => {
    // #swagger.tags = ['book']
    // #swagger.description = 'Pesquisa de livro'

    /* #swagger.parameters['term'] = {
        description: 'Termo para buscar o livro',
        required: true,
        type: 'string'
    } *\

    /* #swagger.parameters['page'] = {
        description: 'Página de itens.',
        required: true,
        type: 'integer'
    } */

    /* #swagger.parameters['itens'] = {
        description: 'Quantidade de itens a buscar.',
        required: true,
        type: 'integer'
    } */

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idBook: 0,
                photo: 'base64 ou null',
                name: 'nome',
                publisher: 'Editora',
                dateOfPublication: 'yyyy-MM-dd',
                synopsis: 'sinopse'
                
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
