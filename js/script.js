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

console.log(pokemonList);
//
// let pokemonList2 = [{
//   name: 'Kakuna',
//   height: 0.6,
//   types: ['flying', 'psychic']
// }, {
//   name: 'Blastoise',
//   height: 1.6,
//   types: ['grass', 'electric']
// }, {
//   name: 'Rattata',
//   height: 0.3,
//   types: ['fighting', 'ghost']
// }, {
//   name: 'Nidoking',
//   height: 1.4,
//   types: ['psychic', 'water']
// }];
//
// console.log(pokemonList2);


function myLoopFunction(pokemonList) {
  console.log(pokemonList.name + ' is ' + pokemonList.height + ' height.');
}
pokemonList.forEach(myLoopFunction);
