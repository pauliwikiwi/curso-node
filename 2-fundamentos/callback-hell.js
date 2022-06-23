const empleados = [
    {
        id: 1,
        nombre: 'Paula'
    },
    {
        id: 2,
        nombre: 'Leila'
    },
    {
        id: 3,
        nombre: 'Rebeca'
    }
];

const salarios = [
    {
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 1500
    }
];

const id = 3;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    if(empleado){
        callback(null, empleado);
    }else {
        callback( `Empleado con ${id} no existe` );
    }

}

const getSalario = (id, callback) => {
    //? -> null check operator
    const salario = salarios.find((s) => s.id === id)?.salario;
    if(salario){
        callback(null, salario);
    }else {
        callback( `El salario con id ${id} no existe` );
    }

}

getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR!!')
        return console.log(err)
    }
    getSalario(id, (err, salario) => {
        if(err){
            return console.log(err)
        }
        console.log('El empleado', empleado, 'tiene un salario de:', salario , '€');
    })
})
