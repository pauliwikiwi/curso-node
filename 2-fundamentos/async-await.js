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

const id =4;

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

const getInfoUsuario = async (id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`
    }catch (error){
       /* return error;*/
        //Importante para que te devuelva el error y entre en catch, returnear con throw en vez de con return
        throw  error;
    }
}

getInfoUsuario(id )
    .then(msg => {
        console.log('TODO BIEN!!!');
        console.log(msg)
    })
    .catch(err => {
        {
            console.log('ALGO FALLÓ!!')
            console.log(err)
        }
    });