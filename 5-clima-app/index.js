const {leerInput, inquirerMenu, pausa} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

   const busquedas = new Busquedas();

   let opt = '';
   do {
      opt = await inquirerMenu();
      switch (opt){
         case 1:
            //Mostrar mensaje
            const lugar = await leerInput('Escriba la ciudad que desea buscar: ');
            await busquedas.ciudad(lugar)
            //Buscar los lugares

            //Seleccionar el lugar

            //Datos de clima

            //Mostrar resultados
            console.log('Información de la ciudad'. rainbow);
            console.log('Ciudad');
            console.log('Temperatura maxima');
            console.log('Temperatura minima');
         break;
         case 2:
            console.log('Ha seleccionado la opción 2');
         break;

      }
      if (opt !== 0) await pausa()
   }while (opt !== 0);

}

main();