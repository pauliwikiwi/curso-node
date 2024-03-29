const {Router} = require('express');
const {check} = require("express-validator");
const {login} = require("../controllers/authController");
const {validarCampos} = require("../middleware/validar-campos");

const router = Router();

router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isEmpty(),
    validarCampos
], login );

module.exports= router;