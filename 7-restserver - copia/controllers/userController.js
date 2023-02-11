const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require("express-validator");

const usersGet = (req, res = response) => {
    res.json({
        msg: 'get correcto - controller',
    })
}

const usersPost = async(req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const {password, ... body} = req.body;
    const usuario = new Usuario(body);
    const correo = body.correo;
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        return res.status(400).json({
            msg: 'El correo ya esta registrado.'
        })
    }

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

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