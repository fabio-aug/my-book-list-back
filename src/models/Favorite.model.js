const Sequelize = require('sequelize');
const userModel = require('./User.model');
const bookModel = require('./Book.model');
const { database, options } = require('./../database/Database');

const Favorite = database.define('Favorite', {
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

Favorite.belongsTo(bookModel, { foreignKey: 'idBook', allowNull: false });
Favorite.belongsTo(userModel, { foreignKey: 'idUser', allowNull: false });

module.exports = Favorite;
