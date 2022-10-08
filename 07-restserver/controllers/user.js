const { response } = require('express');

const getUser = (req, res = response) => {
    res.json({
        msg: 'get API - Controller'
    });
};

const putUser = (req, res = response) => {
    res.json({
        msg: 'put API - Controller'
    });
};

const postUser = (req, res = response) => {
    res.json({
        msg: 'post API - Controller'
    });
};

const deleteUser = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    });
};

const patchUser = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
};

module.exports = {
    getUser,
    putUser,
    postUser,
    deleteUser,
    patchUser,
}