const sequelize = require('sequelize');
/* https://sequelize.org/docs/v6/ */

<<<<<<< HEAD
const database = new sequelize('MyBookList', '<user_name>', '<user_password>', {
=======
const database = new sequelize('MyBookList', '<name>', '<password>', {
>>>>>>> f763be9e6fdd7d4b858e89495f249367e043a076
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
