const sequelize = require('sequelize');
/* https://sequelize.org/docs/v6/ */

const database = new sequelize('MyBookList', 'fabio', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}

module.exports = {
    database,
    options
};
