const {response} = require("express");
const Usuario = require('../models/usuario')
const login = async (req, res = response) => {
    const {correo, password} = req.body;

    try{

        //Verificar si el correo existe
        const usuario = await Usuario.findOne({correo});
        if (!usuario){
            return res.status(400).json({
                msg: "El usuario o la contraseña no son correctos - correo"
            })
        }

        //El usuario esta activo en la bbdd

        //Verificar contraseña

        //Generar ej JWT (Jason Web Token)

        res.json({
            msg: 'Login Ok'
        })
    }catch (error){
        console.log(error)
        return res.status(500).json({
            msg: "Hable con el administrador"
        })

    }
}
module.exports = {
    login
}