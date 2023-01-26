const Sequelize = require('sequelize');
const { database, options } = require('./../database/Database');

const Book = database.define('Book', {
    idBook: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    photo: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publisher: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfPublication: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    synopsis: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, options);

module.exports = Book;
