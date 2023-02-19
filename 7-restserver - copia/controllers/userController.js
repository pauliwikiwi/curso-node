const {response} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const usersGet = async (req, res = response) => {
    const {limite = 5, desde = 0} = req.query
    const query = {estado: true}

   /*const usuarios = await Usuario.find(query).skip(Number(desde)).limit(Number(limite))
    const total = await Usuario.countDocuments(query);*/

    const [total, usuarios] = await  Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(Number(desde)).limit(Number(limite))
        ]
    )
    res.json({
        total,
        usuarios
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
        usuario
    })
}

const usersDelete = async (req, res = response) => {
    const {id} = req.params

    //Fisicamente lo borramos
    //const usuario = await Usuario.findByIdAndDelete(id)

    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})
    res.json({
        usuario
    })
}




module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}