const pikachu = {
    numero: 'Nº 025',
    generacion: 'primera',
    tipo: 'eléctrico',
    getNumero() {
        return `${this.numero}`
    }
}

/*const numero = pikachu.numero;
const generacion = pikachu.generacion;
const tipo = pikachu.tipo;*/

//Desetructuracion de objeto

function imprimePokemon(pokemon){
    const {numero, generacion, tipo, evolucion = 'Raichu'} = pokemon;
    console.log(numero, generacion, tipo, evolucion);
}

function imprimePokemon2({numero, generacion, tipo, evolucion = 'Raichu'}){
    generacion = 'todas';
    console.log(numero, generacion, tipo, evolucion);
}

imprimePokemon(pikachu);
imprimePokemon2(pikachu);

const pokemon = ['Pickachu', 'Bulbasur', 'Charmander'];

const [p1, p2, p3] = pokemon;
const [, , po3] = pokemon;
console.log(po3);

function imprimeArregloPokemon(pokemon){
    const [pok1, pok2,pok3] = pokemon;
    console.log(pok1, pok2,pok3);
}

function imprimeArregloPokemon1([poke1, poke2,poke3]){
    poke2 = 'Chimchar';
    console.log(poke1, poke2,poke3);
}

imprimeArregloPokemon(pokemon);
imprimeArregloPokemon1(pokemon);