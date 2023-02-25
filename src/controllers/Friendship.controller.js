const express = require('express');
const fr = require('./../utils/FormatResponse');
const friendshipService = require('./../services/Friendship.service');

const friendshipController = express.Router();

friendshipController.post('/friendship/createFriendship', (req, res, next) => {
    // #swagger.tags = ['friendship']
    // #swagger.description = 'Criar amizade entre dois usuários.'

    /*  #swagger.parameters['create'] = {
        in: 'body',
        required: true,
        schema: {
            idUser1: 0,
            idUser2: 0
        }
    } */

    friendshipService.createFriendship(req.body.idUser1, req.body.idUser2).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: 'true or false',
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

friendshipController.get('/friendship/searchUserFriendship', (req, res, next) => {
    // #swagger.tags = ['friendship']
    // #swagger.description = 'Buscar de amizades do usuário.'

    /* #swagger.parameters['idUser'] = {
        description: 'Id do usuário a buscar as amizades.',
        required: true,
        type: 'integer'
    } */

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

    friendshipService.searchUserFriendship(req.query.idUser, req.query.page, req.query.itens).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: {
                friendshipList: [{
                    idUser1: 0,
                    idUser2: 0,
                    dateOfFriendship: 'yyyy-MM-dd 00:00:00.000',
                    friend: {
                        idUser: 0,
                        name: 'name',
                        nickname: 'nickname',
                        photo: 'base64 or null'
                    }
                }],
                pageCount: 1
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

friendshipController.get('/friendship/verifyFriendship', (req, res, next) => {
    // #swagger.tags = ['friendship']
    // #swagger.description = 'Verificar a amizade entre dois usuários.'

    /* #swagger.parameters['idUser1'] = {
        description: 'Id do usuário a buscar a amizade.',
        required: true,
        type: 'integer'
    } */

    /* #swagger.parameters['idUser2'] = {
        description: 'Id do usuário a buscar a amizade.',
        required: true,
        type: 'integer'
    } */

    friendshipService.verifyFriendship(req.query.idUser1, req.query.idUser2).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: 'true or false',
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

friendshipController.delete('/friendship/deleteFriendship', (req, res, next) => {
    // #swagger.tags = ['friendship']
    // #swagger.description = 'Deletar a amizade entre dois usuários.'

    /* #swagger.parameters['idUser1'] = {
        description: 'Id do usuário a deletar a amizade.',
        required: true,
        type: 'integer'
    } */

    /* #swagger.parameters['idUser2'] = {
        description: 'Id do usuário a deletar a amizade.',
        required: true,
        type: 'integer'
    } */

    friendshipService.deleteFriendship(req.query.idUser1, req.query.idUser2).then((response) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: 'true or false',
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

module.exports = friendshipController;
