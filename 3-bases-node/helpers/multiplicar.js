const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 9, listar = false ) => {
    const numFinal = 10;
    let salida = '';

    try{
        for (let i = 1; i<= numFinal; i++){
            salida += (`${base} ${'x'.red} ${i} ${'='.cyan} ${base*i}\n`);
        }
        if (listar){
            console.log(colors.rainbow('=========='));
            console.log(colors.america(`Tabla del ${base}`));
            console.log(colors.rainbow('=========='))
            console.log(salida)
        }
        //writeFileSync es más sencillo pero hay que envolverlo en un try/catch
        // writeFile usas el callback para capturar el error
        fs.writeFileSync('tabla-' + base +'.txt', salida);
        return `tabla-${base}.txt`
    }catch (error){
        throw error
    }

}

module.exports = {
    crearArchivo
}