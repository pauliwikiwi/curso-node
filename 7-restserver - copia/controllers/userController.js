const {response} = require('express');
const Usuario = require('../models/usuario')

const usersGet = (req, res = response) => {
    res.json({
        msg: 'get correcto - controller',
    })
}

const usersPost = async(req, res = response) => {

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'post correcto - controller',
        usuario
    })
}

const usersPut = (req, res = response) => {
    res.json({
        msg: 'put correcto - controller',
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete correcto - controller',
    })
}




module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}