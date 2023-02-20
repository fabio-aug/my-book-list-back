const Sequelize = require('sequelize');
const { database, options } = require('./../database/Database');
const userModel = require('./User.model');
const bookModel = require('./Book.model');

const Review = database.define('Review', {
    idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    idBook: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    note:{
        type: Sequelize.STRING,
        allowNull: true
    }, 
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    }    
}, options);

Review.belongsTo(userModel, { foreignKey: 'idUser', allowNull: false });
Review.belongsTo(bookModel, { foreignKey: 'idBook', allowNull: false });

module.exports = Review;
