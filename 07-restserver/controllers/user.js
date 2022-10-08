const { response, request } = require('express');

const getUser = (req = request, res = response) => {
    const { q, nombre = "Sin nombre", apikey, page = 1, limit = 10} = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const putUser = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - Controller',
        id
    });
};

const postUser = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
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