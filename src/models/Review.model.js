const Sequelize = require('sequelize');
const userModel = require('./User.model');
const bookModel = require('./Book.model');
const { database, options } = require('./../database/Database');

const Review = database.define('Review', {
    idBook: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
}, options);

Review.belongsTo(bookModel, { foreignKey: 'idBook', allowNull: false });
Review.belongsTo(userModel, { foreignKey: 'idUser', allowNull: false });

module.exports = Review;
