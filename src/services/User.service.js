const userModel = require('./../models/User.model');
const fr = require('./../utils/FormatResponse');

async function login(dto) {
    const user = await userModel.findOne({ where: { email: dto.email } });

    if (user === null) return fr.responseError("E-mail não encontrado.");

    if (user.password !== dto.password) return fr.responseError("Senha incorreta.");

    return fr.responseSucces(user);
}

async function createUser(dto) {
    const findEmail = await userModel.count({ where: { email: dto.email } });

    if (findEmail >= 1) return fr.responseError("E-mail já cadastrado no sistema.");

    const user = await userModel.create(dto);

    return fr.responseSucces(user);
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
    login,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}
