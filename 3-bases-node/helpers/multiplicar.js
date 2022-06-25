const fs = require('fs');

const crearArchivo = async (base = 9) => {
    const numFinal = 10;
    let salida = '';

    console.log('==========');
    console.log(`Tabla del ${base}`);
    console.log('==========')

    try{
        for (let i = 1; i<= numFinal; i++){
            salida += (`${base} * ${i} = ${base*i}\n`);
        }

        console.log(salida)
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