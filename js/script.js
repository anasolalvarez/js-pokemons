let pokemonList = [{
  name: 'Bulbasaur',
  height: 0.7,
  types: ['grass', 'poison']
}, {
  name: 'Venusaur',
  height: 3,
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

// document.write('Balbasaur, ', 'Venusaur, ', 'Charmander, ', 'Caterpie. ');


for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.8){
    document.write(pokemonList[i].name +' height ' +pokemonList[i].height+  "   Wow that's big" + '<br>');
  } else if (pokemonList[i].height > 0.5 && pokemonList[i].height < 1.8){
    document.write(pokemonList[i].name +' height ' + pokemonList[i].height + '  this is an average pokemon' +'<br>');
  } else {
    document.write(pokemonList[i].name + ' height '+pokemonList[i].height + '  this is a small pokemon' + '<br>');
  }
};

// function printArrayDetails (List) {
//   for (let i = 0; 0 < List.length; i++){
//     document.write ('<p>' + List[i].name + '</p>')
//     console.log (List[i].name);
//   }
// }
//
// printArrayDetails (pokemonList);
// printArrayDetails (pokemonList2);
//
//
// function divide(dividend, divisor){
//   if(divisor === 0){
//     return "You’re trying to divide by zero."
//   }else{
//     let result = dividend / divisor;
//     return result;
//   }
// }
//
// console.log(divide(4, 2));
// console.log(divide(7, 0));
// console.log(divide(1, 4));
// console.log(divide(12, -3));






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
