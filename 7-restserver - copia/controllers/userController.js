const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const usersGet = (req, res = response) => {
    res.json({
        msg: 'get correcto - controller',
    })
}

const usersPost = async(req, res = response) => {

    const {password, ... body} = req.body;
    const usuario = new Usuario(body);
    const correo = body.correo;

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();

    res.json({
        msg: 'post correcto - controller',
        usuario
    })
}

const usersPut = async (req, res = response) => {
    const {id} = req.params
    const {password, google, correo, ...resto} = req.body

    //TODO: Validar contra base de datos
    if (password){
       const salt = bcryptjs.genSaltSync();
       resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put correcto - controller',
        usuario
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