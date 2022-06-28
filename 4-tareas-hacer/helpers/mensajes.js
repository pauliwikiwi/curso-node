require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('========================'.rainbow)
        console.log('SELECCIONE UNA OPCIÓN')
        console.log('========================'.rainbow)
        console.log('\n');

        console.log(`${'1.'.red}Crear tarea`);
        console.log(`${'2.'.red}Listar tareas`);
        console.log(`${'3.'.red}Listar tareas completadas`);
        console.log(`${'4.'.red}Listar tareas pendientes`);
        console.log(`${'5.'.red}Completar tarea(s)`);
        console.log(`${'6.'.red} Borrar una tarea`);
        console.log(`${'0.'.red} Salir \n`);

        const  readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //se usa para mostrar info al user
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt)
        })
    })

}

const pausa = () => {
    return new Promise(resolve => {
        const  readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        //se usa para mostrar info al user
        readline.question(`\nPresione ${'ENTER'.red} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    })
}

module.exports={
    mostrarMenu,
    pausa
}