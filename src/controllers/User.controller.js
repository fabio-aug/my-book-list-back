const express = require('express');
const fr = require('./../utils/FormatResponse');
const userService = require('./../services/User.service');

const userController = express.Router();

userController.post('/user/login', (req, res, next) => {
    // #swagger.tags = ['user']
    // #swagger.description = 'Login de usuário.'

    /*  #swagger.parameters['login'] = {
        in: 'body',
        required: true,
        schema: {
            email: 'example@example.example',
            password: 'password'
        }
    } */

    userService.login(req.body).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idUser: 0,
                photo: 'base64 ou null',
                nickname: 'apelido ou null',
                nationality: 'nacionalidade',
                name: 'nome',
                dateOfBirth: 'yyyy-MM-dd',
                email: 'E-mail',
                phone: 31910101010,
                password: 'null'
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

userController.post('/user/create', (req, res, next) => {
    // #swagger.tags = ['user']
    // #swagger.description = 'Cadastro de usuário.'

    /*  #swagger.parameters['create'] = {
        in: 'body',
        required: true,
        schema: {
            photo: 'base64 ou null',
            nickname: 'apelido ou null',
            nationality: 'nacionalidade',
            name: 'nome',
            dateOfBirth: 'yyyy-MM-dd',
            email: 'email@email.email',
            phone: 11111111111,
            password: 'password'
        }
    } */

    userService.createUser(req.body).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idUser: 0,
                photo: 'base64 ou null',
                nickname: 'apelido ou null',
                nationality: 'nacionalidade',
                name: 'nome',
                dateOfBirth: 'yyyy-MM-dd',
                email: 'E-mail',
                phone: 31910101010,
                password: 'null'
            },
            status: true
        },
        description: 'Sucessso.' 
    } */

    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro.' 
    } */
});

userController.get('/user/getById', (req, res, next) => {
    // #swagger.tags = ['user']
    // #swagger.description = 'Buscar usuário pelo ID.'

    /* #swagger.parameters['id'] = {
        required: true,
        type: 'integer',
        description: 'Id do usuário a ser buscado.'
    } */

    userService.getUserById(parseInt(req.query.id)).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idUser: 0,
                photo: 'base64 ou null',
                nickname: 'apelido ou null',
                nationality: 'nacionalidade',
                name: 'nome',
                dateOfBirth: 'yyyy-MM-dd',
                email: 'E-mail',
                phone: 31910101010,
                password: 'null'
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

userController.put('/user/update', (req, res, next) => {
    // #swagger.tags = ['user']
    // #swagger.description = 'Login de usuário.'

    /*  #swagger.parameters['update'] = {
        in: 'body',
        required: true,
        schema: {
            idUser: 0,
            photo: 'base64 ou null',
            nickname: 'apelido ou null',
            nationality: 'nacionalidade',
            name: 'nome',
            dateOfBirth: 'yyyy-MM-dd',
            email: 'email@email.email',
            phone: 11111111111,
            password: 'password'
        }
    } */

    userService.updateUser(parseInt(req.body.idUser), req.body).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                idUser: 0,
                photo: 'base64 ou null',
                nickname: 'apelido ou null',
                nationality: 'nacionalidade',
                name: 'nome',
                dateOfBirth: 'yyyy-MM-dd',
                email: 'E-mail',
                phone: 31910101010,
                password: 'null'
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

userController.delete('/user/delete', (req, res, next) => {
    // #swagger.tags = ['user']
    // #swagger.description = 'Login de usuário.'

    /* #swagger.parameters['id'] = {
        required: true,
        type: 'integer',
        description: 'Id do usuário a ser deletado.'
    } */

    userService.deleteUser(parseInt(req.query.id)).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: 'Usuário deletado com sucesso.',
            status: true
        },
        description: 'Erro.' 
    } */

    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro.' 
    } */
});

module.exports = userController;
