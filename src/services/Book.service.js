const bookModel = require('./../models/Book.model');

async function getBookById(id) {
    const book = await bookModel.findByPk(parseInt(id));
    return book;
}

module.exports = {
    getBookById
}
