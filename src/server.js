// Libs
const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');


// Local
const { database } = require('./database/Database');
const swaggerFile = require('./doc/swagger_doc.json');
const {
    userController,
    bookController,
    favoriteController,
    friendshipController,
    reviewController,
    bookDetailsController
} = require('./controllers/index');


// Configuração do servidor
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


// Configuração das rotas
app.use(userController);
app.use(bookController);
app.use(favoriteController);
app.use(friendshipController);
app.use(reviewController);
app.use(bookDetailsController);



// Conectar com banco de dados
database.authenticate().then(() => {
    console.log('Conectado ao banco com sucesso!');
}).catch(() => {
    console.log('Erro ao conectar ao banco.');
});


// Inicialização do servidor
const port = 3001;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
