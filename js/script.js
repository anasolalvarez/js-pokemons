let pokemonList = [{
  name: 'Bulbasaur',
  height: 0.7,
  types: ['grass', 'poison']
}, {
  name: 'Venusaur',
  height: 1,
  types: ['seed', 'overgrown']
}, {
  name: 'Charmander',
  height: 2,
  types: ['fire']
}, {
  name: 'Caterpie',
  height: 0.3,
  types: ['fire', 'water']
}];

let pokemonList2 = [{
  name: 'Kakuna',
  height: 0.6,
  types: ['flying', 'psychic']
}, {
  name: 'Blastoise',
  height: 1.6,
  types: ['grass', 'electric']
}, {
  name: 'Rattata',
  height: 0.3,
  types: ['fighting', 'ghost']
}, {
  name: 'Nidoking',
  height: 1.4,
  types: ['psychic', 'water']
}];

console.log(pokemonList);

document.write('Balbasaur, ', 'Venusaur, ', 'Charmander, ', 'Caterpie. ');


// let pokemonsList = [] //'Balbasaur', 'Venusaur', 'Charmander','Caterpie'
// let text = '';
// let i = 0;
// for (; pokemonList[i];) {
//   text = text + '' + pokemonsList[i];
//   i++;
// }
// console.log('Balbasaur height:0.7 - Venusaur height:1 - Charmender height:2 - Caterpie height:0.3');

for (let i = 0; i < pokemonList.lenght; i++) {
  if (pokemonList[i].height > 1.8){
    console.log(pokemonList[i].name + 'Wow that is big');
  } else if (pokemonList.height > 0.5 && pokemonList.height < 1.8){
    console.log(pokemonList[i].name +'this is an average pokemon');
  } else {
    console.log(pokemonList[i].name +'this is a small pokemon');
  }
}

// let Venusaur = [];
// if (pokemonList[1].height > 1.8) {
//   console.log('this is a big pokemon, Wow that is big!')
// } else if (pokemonList[1].height > 0.5 && pokemonList[1].height < 1.8) {
//   console.log('this is an average pokemon')
// } else {
//   console.log('this is a small pokemon')
// }
//
// let Charmander = []; //{name:'Charmander', height: 2}
// if (pokemonList[2].height > 1.8) {
//   console.log('this is a big pokemon, Wow that is big!')
// } else if (pokemonList[2].height > 0.5 && pokemonList[2].height < 1.8) {
//   console.log('this is an average pokemon')
// } else {
//   console.log('this is a small pokemon')
// }
//
// let Caterpie = []; //{name:'Caterpie', height: 0.3}
// if (pokemonList[3].height > 1.8) {
//   console.log('this is a big pokemon, Wow that is big!')
// } else if (pokemonList[3].height > 0.5 && pokemonList[3].height < 1.8) {
//   console.log('this is an average pokemon')
// } else {
//   console.log('this is a small pokemon')
// }

//let pokemonList2 = [
// different set of Pokémon objects
//];
