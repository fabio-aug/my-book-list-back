// Libs
const express = require('express');


// Local
const { database } = require('./database/Database');
const userController = require('./controllers/User.controller');


// Configuração do servidor
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuração das rotas
app.use(userController);


// Conectar com banco de dados
database.authenticate().then(() => {
    console.log('Conectado ao banco com sucesso!');
}).catch(() => {
    console.log('Erro ao conectar ao banco.');
})


// Inicialização do servidor
const port = 44390;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
