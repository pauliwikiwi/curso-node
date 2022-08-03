const {response} = require('express');

const usersGet = (req, res = response) => {
    res.json({
        msg: 'get correcto - controller',
    })
}

const usersPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post correcto - controller',
        nombre,
        edad
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