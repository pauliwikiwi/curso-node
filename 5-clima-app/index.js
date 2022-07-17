require('dotenv').config()

const {leerInput, inquirerMenu, pausa, listarLugares} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

   const busquedas = new Busquedas();

   let opt = '';
   do {
      opt = await inquirerMenu();
      switch (opt){
         case 1:
            //Mostrar mensaje
            const terminoBusqueda = await leerInput('Escriba la ciudad que desea buscar: ');

            //Buscar los lugares
            let ciudades = await busquedas.ciudad(terminoBusqueda);


            //Seleccionar el lugar
            const id = await listarLugares(ciudades);
            if (id === '0')continue;

            const lugarSeleccionado = ciudades.find(l => l.id === id);

            //Guardar en db
             busquedas.agregarHistorial(lugarSeleccionado.nombre);

            //Datos de clima
            const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng)
            //Mostrar resultados
            console.log('Información de la ciudad'. rainbow);
            console.log('Ciudad ',  (lugarSeleccionado.nombre).yellow);
            console.log('Latitud ', lugarSeleccionado.lat);
            console.log('Longitud ', lugarSeleccionado.lng);
            console.log('Temperatura actual ', (clima.temp + 'º').yellow);
            console.log('Temperatura maxima ', (clima.min + 'º').yellow);
            console.log('Temperatura minima ',( clima.max + 'º').yellow);
            console.log('Descripción del cielo ', (clima.desc).yellow);
         break;
         case 2:
            busquedas.HistorialCapitalizado.forEach((lugar, i) => {
               const idx = `${i +1}`.red;
               console.log(`${idx} ${lugar}`);
            })
         break;

      }
      if (opt !== 0) await pausa()
   }while (opt !== 0);

}

main();
