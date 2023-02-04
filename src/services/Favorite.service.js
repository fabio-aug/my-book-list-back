const bookModel = require('./../models/Book.model');
const favoriteModel = require('./../models/Favorite.model');

async function createFavorite(favoriteDto) {
    const favorite = await favoriteModel.create(favoriteDto);
    return favorite;
}

async function getFavoritesListByIdUser(idUser) {
    const favoritesList = await favoriteModel.findAll({
        include: {
            model: bookModel,
        },
        where: {
            idUser: parseInt(idUser)
        }
    });
    return favoritesList;
}

async function deleteFavorite(idUser, idBook) {
    const favorite = await favoriteModel.destroy({
        where: {
            idUser: parseInt(idUser),
            idBook: parseInt(idBook)
        }
    });
    return favorite;
}

module.exports = {
    createFavorite,
    getFavoritesListByIdUser,
    deleteFavorite
}
