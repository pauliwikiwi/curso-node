//con var puedes usar la variable sin ser inicializada
//si la variable no va a cambiar se usa const, son mas ligeras y mas eficientes

const nombre = 'Olaf';

if (true){
   let nombre = 'Anna'
    console.log(nombre);
}
console.log(nombre);