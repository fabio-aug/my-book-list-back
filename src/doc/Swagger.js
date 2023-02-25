const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        version: '1.0.0',
        title: 'My Book List RestAPI',
        description: 'Livros e Listas para todos os gostos!',
    },
    host: 'api-mbl.onrender.com',
    schemes: ['https']
};

const endpointsFiles = [
    './../controllers/Book.controller.js',
    './../controllers/Favorite.controller.js',
    './../controllers/Friendship.controller.js',
    './../controllers/Review.controller.js',
    './../controllers/User.controller.js',
];
const outputFile = './swagger_doc.json';

swaggerAutogen(outputFile, endpointsFiles, doc);
