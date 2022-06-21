
console.log('Inicio de programa'); //1

setTimeout(() => {
    console.log('primer timeouut'); //5
    }, 3000)

setTimeout(() => {
    console.log('segundo timeouut'); //2 :: 3
    }, 0)

setTimeout(() => {
    console.log('tercer timeouut'); //3 :: 4
}, 0)

console.log('Fin del programa'); //4 :: 2