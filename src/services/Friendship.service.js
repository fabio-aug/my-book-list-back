const { Op } = require('sequelize');
const userModel = require('./../models/User.model');
const friendshipModel = require('./../models/Friendship.model');

async function searchUserFriendship(idUser, page, amoutItems) {
    idUser = parseInt(idUser);
    page = parseInt(page) - 1;
    amoutItems = parseInt(amoutItems);

    const joins = {
        model: userModel,
        attributes: ['idUser', 'name', 'nickname', 'photo'],
    }

    const data = await friendshipModel.findAndCountAll({
        offset: page * amoutItems,
        limit: amoutItems,
        where: {
            [Op.or]: [
                { idUser1: idUser },
                { idUser2: idUser },
            ]
        },
        include: [
            { ...joins, as: 'User2', },
            { ...joins, as: 'User1', }
        ]
    });

    const pageCount = data.count >= 1 ? Math.ceil(data.count / amoutItems) : 0;

    const friendshipList = data.rows.map((friendship) => {
        const vl = friendship.dataValues
        return {
            idUser1: vl.idUser1,
            idUser2: vl.idUser2,
            dateOfFriendship: vl.dateOfFriendship,
            friend: vl.User1.idUser == idUser ? vl.User2 : vl.User1,
        }
    })

    return {
        friendshipList,
        pageCount
    };
}

async function verifyFriendship(idUser1, idUser2) {
    const verifyCount = await friendshipModel.count({
        where: {
            [Op.or]: [{
                idUser1: idUser1,
                idUser2: idUser2
            }, {
                idUser1: idUser2,
                idUser2: idUser1
            }]
        },
    });

    return verifyCount === 1;
}

async function createFriendship(idUser1, idUser2) {
    const verify = await verifyFriendship(idUser1, idUser2);

    if (verify) throw new Error('Usuários já são amigos.');

    const friendship = await friendshipModel.create({
        idUser1: idUser1,
        idUser2: idUser2,
        dateOfFriendship: new Date()
    });

    return true;
}

async function deleteFriendship(idUser1, idUser2) {
    const verify = await verifyFriendship(idUser1, idUser2);

    if (!verify) throw new Error('Usuários não são amigos.');

    const friendship = await friendshipModel.destroy({
        where: {
            [Op.or]: [{
                idUser1: idUser1,
                idUser2: idUser2
            }, {
                idUser1: idUser2,
                idUser2: idUser1
            }]
        },
    });

    return false;
}

module.exports = {
    searchUserFriendship,
    verifyFriendship,
    createFriendship,
    deleteFriendship
}
