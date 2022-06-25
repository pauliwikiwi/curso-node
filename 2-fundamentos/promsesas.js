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

const id =1;

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        /*if (empleado) {
            resolve(empleado)
        } else {
            reject(`No existe empleado con id ${id}`)
        }*/
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });

}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario con id ${id}`);
    });

}
getEmpleado(id)
    .then(empleado => {
        //importante el return para encadenar varias promesas
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de: ${salario}`))
    .catch(err => console.log(err));

/*
----MAL
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
----MAL
getEmpleado(id)
    .then(empleado => {
        getSalario(id).then(salario => {
            console.log(`El empleado ${empleado} tiene un salario de: ${salario}`)
        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err));*/
