// Libs
const cors = require('cors');
const dotEnv = require('dotenv');
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
    reviewController
} = require('./controllers/index');


// Configuração do servidor
const app = express();
dotEnv.config();
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


// Conectar com banco de dados
database.authenticate().then(() => {
    console.log('Conectado ao banco com sucesso!');
}).catch(() => {
    console.log('Erro ao conectar ao banco.');
});


// Inicialização do servidor
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
