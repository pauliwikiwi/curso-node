const {Router} = require('express');
const {usersGet, usersPost, usersPut, usersDelete} = require("../controllers/userController");
const {check} = require("express-validator");

const router = Router();

router.get('/', usersGet);
router.put('/', usersPut);
router.post('/', [
    check('correo', 'El correo no tiene el formato deseado').isEmail(),
], usersPost);
router.delete('/', usersDelete)

module.exports = router;