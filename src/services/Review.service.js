const reviewModel = require('./../models/Review.model');

async function getMostReviewed(amoutItems) {
    amoutItems = parseInt(amoutItems); 
    const data = await reviewModel.findAll({
        limit: amoutItems,
        group: ['idBook']
    });
    return {bookList: data};
}

async function getBestReviewed(amoutItems){
    amoutItems = parseInt(amoutItems); 
    const data = await reviewModel.findAll({
        limit: amoutItems,
        order:[
            ['score', 'DESC']
        ] 
    });
    return {bookList: data};
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
