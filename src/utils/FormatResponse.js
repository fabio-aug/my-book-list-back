function responseError(msg) {
    return {
        msg: msg,
        status: false
    }
}

function responseSucces(data) {
    return {
        data: data,
        status: true
    }
}

module.exports = {
    responseSucces,
    responseError
}
