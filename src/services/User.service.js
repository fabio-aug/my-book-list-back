const userModel = require('./../models/User.model');

async function createUser(dto) {
    const user = await userModel.create(dto);
    return user;
}

async function getUserById(id) {
    const user = await userModel.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            idUser: parseInt(id)
        }
    });
    return user;
}

async function updateUser(id, dto) {
    const user = await userModel.update(dto, {
        where: {
            idUser: parseInt(id)
        }
    });
    return user;
}

async function deleteUser(id) {
    const user = await userModel.destroy({
        where: {
            idUser: parseInt(id)
        }
    });
    return user;
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
}
