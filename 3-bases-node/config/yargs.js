/*https://yargs.js.org/docs/#api-reference-optionkey-opt*/
const argv = require('yargs')
    .options(
        {
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            },
            'l': {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Muestra la tabla en consola'
            },
            'h': {
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Numero hasta donde hacer la multiplicación'
            }
        }
    )
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        if(isNaN(argv.h)){
            throw 'El hasta tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;