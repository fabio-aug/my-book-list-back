const userModel = require('./../models/User.model');

async function login(dto) {
    const user = await userModel.findOne({ where: { email: dto.email } });

    if (user === null) throw new Error('E-mail não encontrado.');

    if (user.password !== dto.password) throw new Error('Senha incorreta.');

    return {
        ...user.dataValues,
        password: null
    };
}

async function createUser(dto) {
    const findEmail = await userModel.count({ where: { email: dto.email } });

    if (findEmail >= 1) throw new Error('E-mail já cadastrado no sistema.');

    const user = await userModel.create(dto);

    return {
        ...user.dataValues,
        password: null
    };
}

async function getUserById(id) {
    const user = await userModel.findOne({
        where: {
            idUser: parseInt(id)
        }
    });

    if (user === null) throw new Error('Usuário não encontrado.');

    return {
        ...user.dataValues,
        password: null
    };
}

async function updateUser(id, dto) {
    const userData = await userModel.findOne({
        where: {
            idUser: parseInt(id)
        }
    });

    if (userData === null) throw new Error('Usuário não encontrado.');

    if (userData.password != dto.password) throw new Error('Senha incorreta, autorização negada.');

    const uptObj = {
        name: dto.name != userData.name ? dto.name : userData.name,
        photo: dto.photo != userData.photo ? dto.photo : userData.photo,
        nickname: dto.nickname != userData.nickname ? dto.nickname : userData.nickname,
        dateOfBirth: dto.dateOfBirth != userData.dateOfBirth ? dto.dateOfBirth : userData.dateOfBirth,
        email: dto.email != userData.email ? dto.email : userData.email,
        nationality: dto.nationality != userData.nationality ? dto.nationality : userData.nationality,
        phone: dto.phone != userData.phone ? dto.phone : userData.phone,
    }

    const user = await userModel.update(uptObj, {
        where: {
            idUser: parseInt(id)
        }
    });

    if (user === null) throw new Error('Não foi possível atualizar usuário.');

    uptObj.password = null;

    return uptObj;
}

async function deleteUser(id) {
    const findUser = await userModel.count({ where: { idUser: id } });

    if (findUser === 0) throw new Error('Usuário não encontrado.');

    const user = await userModel.destroy({
        where: {
            idUser: parseInt(id)
        }
    });

    if (user === null) throw new Error('Não foi possível deletar usuário.');

    return 'Usuário deletado com sucesso.';
}

module.exports = {
    login,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}
