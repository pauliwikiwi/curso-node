/*
function sumar (a, b){
    return a+b;
}
let suma = sumar(5,10)
console.log(suma);
*/

const sumar = (a,b) => {
    return a+b;
}
const sumarEnUnaSolaLinea = (a,b = 8) => a+b;
const saludar = () => 'Holi caracoli!'

console.log(sumar(5,10), sumarEnUnaSolaLinea(10), saludar());