function success(data) {
    return {
        data: data,
        error: null,
        status: true
    };
}

function error(e) {
    return {
        data: null,
        error: e.message,
        status: false
    };
}

module.exports = {
    success,
    error
};