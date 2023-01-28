const { Op } = require('sequelize');
const bookModel = require('./../models/Book.model');

async function getBookById(id) {
    const book = await bookModel.findByPk(parseInt(id));
    return book;
}

async function searchBook(term = '', page, amoutItems) {
    term = `%${term}%`;
    page = parseInt(page) - 1;
    amoutItems = parseInt(amoutItems);

    const data = await bookModel.findAndCountAll({
        offset: page * amoutItems,
        limit: amoutItems,
        where: {
            [Op.or]: [
                { name: { [Op.like]: term } },
                { author: { [Op.like]: term } },
                { publisher: { [Op.like]: term } },
            ]
        }
    });

    const pageCount = data.count >= 1 ? Math.ceil(data.count / amoutItems) : 0;

    return {
        bookList: data.rows,
        pageCount: pageCount
    };
}

module.exports = {
    getBookById,
    searchBook
}
