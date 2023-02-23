const Op = require('sequelize');
const reviewModel = require('./../models/Review.model');
const bookModel = require('./../models/Book.model');

async function createReview(reviewDto) {
    const review = await reviewModel.create(reviewDto);
    return review;
}

async function getReviewsByIdUser(idUser) {
    const reviewsList = await reviewModel.findAll({
        include: {
            model: bookModel,
        },
        where: {
            idUser: parseInt(idUser)
        }
    });
    return reviewsList;
}

async function deleteReview(idUser, idBook) {
    const review = await reviewModel.destroy({
        where: {
            idUser: parseInt(idUser),
            idBook: parseInt(idBook)
        }
    });
    return review;
}

async function getMostReviewed() {

    const data = await reviewModel.findAll({
        limit: 3,
        include: {
            model: bookModel,
        },
        attributes:{
            include: [Op.fn('COUNT', Op.col('status')), 'status']
        },
        order:[
            ['status', 'DESC']
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
        bookList: data 
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
    createReview,
    getReviewsByIdUser,
    deleteReview,
    getMostReviewed,
    getBestReviewed,
    dashboardByIdUser
}
