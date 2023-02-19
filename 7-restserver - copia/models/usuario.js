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
        enumerable: ['ADMIN_ROL', 'USER_ROL']
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

UsuarioSchema.methods.toJSON = function(){
    const {__v, password, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('Usuarios', UsuarioSchema);