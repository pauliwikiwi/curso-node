const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatrio']
    },
    correo:{
        type: String,
        require: [true, 'El correo es obligatrio'],
        unique: true
    },
    password:{
        type: String,
        require: [true, 'La contraseña es obligatrio']
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        require: [true],
        enumerable: ['ADMIN_ROLE', 'USER_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false,
    }
});

module.exports = model('Usuarios', UsuarioSchema);