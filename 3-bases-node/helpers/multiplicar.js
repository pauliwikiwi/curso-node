const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 9, listar = false, hasta = 10 ) => {
    let salida = '';
    let consola = '';

    try{
        for (let i = 1; i<= hasta; i++){
            salida += (`${base} x ${i} = ${base*i}\n`);
            consola += (`${base} ${'x'.red} ${i} ${'='.cyan} ${base*i}\n`);
        }
        if (listar){
            console.log(colors.rainbow('=========='));
            console.log(colors.america(`Tabla del ${base}`));
            console.log(colors.rainbow('=========='))
            console.log(consola)
        }
        //writeFileSync es más sencillo pero hay que envolverlo en un try/catch
        // writeFile usas el callback para capturar el error
        fs.writeFileSync('./salida/tabla-' + base +'.txt', salida);
        return `tabla-${base}.txt`
    }catch (error){
        throw error
    }

}

module.exports = {
    crearArchivo
}