const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.red} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.red} Historial`
            },
            {
                value: 0,
                name: `${'0.'.red} Salir`
            },

        ]
    }
]


const inquirerMenu = async() => {
    /*console.clear();*/
    console.log('========================'.rainbow)
    console.log('SELECCIONE UNA OPCIÓN')
    console.log('========================'.rainbow)
    console.log('\n');

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;

}

const pausa = async() => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.red} para continuar`
    }]
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if (value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas = []) => {
    const choices =tareas.map((tarea, id) => {
        const idx = `${id +1}.`.red;
        return {
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`,
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.red + 'Salir'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(mensaje) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ]

    const { ok } = await inquirer.prompt(pregunta);
    return ok;
}

const mostrarListadoChecklist = async(tareas = []) => {
    const choices =tareas.map((tarea, id) => {
        const idx = `${id +1}.`.red;
        return {
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}