const Sequelize = require('sequelize');
const userModel = require('./User.model');
const { database, options } = require('./../database/Database');

const Friendship = database.define('Friendship', {
    idUser1: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    idUser2: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    dateOfFriendship: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, options);

Friendship.belongsTo(userModel, { foreignKey: 'idUser1', allowNull: false, as: 'User1' });
Friendship.belongsTo(userModel, { foreignKey: 'idUser2', allowNull: false, as: 'User2' });

module.exports = Friendship;
