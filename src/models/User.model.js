const Sequelize = require('sequelize');
const { database, options } = require('./../database/Database');

const User = database.define('User', {
    idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    photo: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    nickname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nationality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, options);

module.exports = User;
