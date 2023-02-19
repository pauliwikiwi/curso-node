const {Router} = require('express');
const {check} = require("express-validator");
const {usersGet, usersPost, usersPut, usersDelete} = require("../controllers/userController");
const {validarCampos} = require("../middleware/validar-campos");
const {esRolValido, existeEmail, existeUsuarioPorId} = require("../helpers/db-validators");

const router = Router();

router.get('/', usersGet);
router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
], usersPut);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y debe tener más de 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no tiene el formato deseado').isEmail(),
    check('correo').custom(existeEmail),
    check('rol').custom(esRolValido),
    //check('rol', 'No es un rol admitido').isIn(['ADMIN_ROL', 'USER_ROL']),
    validarCampos
], usersPost);
router.delete('/', usersDelete)

module.exports = router;