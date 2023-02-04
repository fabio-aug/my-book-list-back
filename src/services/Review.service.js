const { Op } = require('sequelize');
const reviewModel = require('./../models/Review.model');
const bookModel = require('./../models/Book.model');


async function getMostReviewed(amoutItems) {
    amoutItems = parseInt(amoutItems); 
    const data = await reviewModel.findAll({
        limit: amoutItems,
        order:[
            ['idBook', 'DESC']
        ] 
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

module.exports = {
    getMostReviewed,
    getBestReviewed
}
