const dotEnv = require('dotenv');
const sequelize = require('sequelize'); // https://sequelize.org/docs/v6/

dotEnv.config();

function createConnection() {
    if (process.env.DATABASE === 'mysql') {
        return new sequelize('MyBookList', process.env.USER, process.env.PASSWORD, {
            dialect: 'mysql',
            host: 'localhost'
        });
    } else {
        return new sequelize({
            dialect: 'sqlite',
            storage: 'src/database/MybookList.sqlite'
        });
    }
}

const database = createConnection();

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}

module.exports = {
    database,
    options
};
