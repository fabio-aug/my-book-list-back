// Libs
const express = require('express');
const cors = require('cors');


// Local
const { database } = require('./database/Database');
const {
    userController,
    bookController,
    favoriteController,
    friendshipController,
    reviewController
} = require('./controllers/index');


// Configuração do servidor
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuração das rotas
app.use(userController);
app.use(bookController);
app.use(favoriteController);
app.use(friendshipController);
app.use(reviewController);


// Conectar com banco de dados
database.authenticate().then(() => {
    console.log('Conectado ao banco com sucesso!');
}).catch(() => {
    console.log('Erro ao conectar ao banco.');
});


// Inicialização do servidor
const port = 44390;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
