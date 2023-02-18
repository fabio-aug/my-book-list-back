const bookModel = require('./../models/Book.model');
const reviewModel = require('./../models/Review.model');

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

module.exports = {
    createReview,
    getReviewsByIdUser,
    deleteReview
}
