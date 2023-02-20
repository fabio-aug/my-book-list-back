const Op = require('sequelize');
const reviewModel = require('./../models/Review.model');
const bookModel = require('./../models/Book.model');

async function getMostReviewed() {
    const data = await reviewModel.findAll({
        limit: 3,
        include: {
            model: bookModel,
        },
        attributes:{
            include: [Op.fn('SUM', Op.col('score')), 'score']
        },
        order:[
            ['score', 'DESC']
        ],
        group:['idBook']
    });
    return {
        bookList: data
    };
}

async function getBestReviewed(){
    const data = await reviewModel.findAll({
        limit: 3,
        include: {
            model: bookModel,
        },
        attributes:{
            include: [Op.fn('AVG', Op.col('score')), 'score']
        },
        order:[
            ['score', 'DESC']
        ],
        group:['idBook']
    });
    return {
        bestBookOne: data[0],
        bestBookTwo: data[1],
        bestBookThree: data[2]
    };
}

async function dashboardByIdUser(idUser) {
    idUser = parseInt(idUser);

    const countReading = await reviewModel.count({
        where: {
            idUser: idUser,
            status: 1
        }
    });

    const countCompleted = await reviewModel.count({
        where: {
            idUser: idUser,
            status: 2
        }
    });

    const countStopped = await reviewModel.count({
        where: {
            idUser: idUser,
            status: 3
        }
    });

    const countToRead = await reviewModel.count({
        where: {
            idUser: idUser,
            status: 4
        }
    });

    return {
        reading: countReading,
        completed: countCompleted,
        stopped: countStopped,
        toRead: countToRead
    };
}

module.exports = {
    getMostReviewed,
    getBestReviewed,
    dashboardByIdUser
}
