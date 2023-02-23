const Op = require('sequelize');
const bookModel = require('./../models/Book.model');
const reviewModel = require('./../models/Review.model');

async function getBookById(id) {
    const book = await bookModel.findByPk(parseInt(id));
    return book;
}

async function getLastReviews() {
    const data = await reviewModel.findAll({
        limit: 3,
        include: {
            model: bookModel,
        },
        attributes:{
            include: [Op.fn('COUNT', Op.col('dateOfReview')), 'dateOfReview']
        },
        order:[
            ['dateOfReview', 'DESC']
        ],
        group:['idBook']
    });
    return {
        bookList: data
    };
}

module.exports = {
    getBookById,
    getLastReviews
}