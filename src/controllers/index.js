const bookController = require('./Book.controller');
const userController = require('./User.controller');
const favoriteController = require('./Favorite.controller');
const friendshipController = require('./Friendship.controller');
const reviewController = require('./Review.controller');

module.exports = {
    bookController,
    userController,
    favoriteController,
    friendshipController,
    reviewController
}
