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

console.log(pokemonList2);

// document.write('Balbasaur, ', 'Venusaur, ', 'Charmander, ', 'Caterpie. ');


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
    document.write('pokemonList[i].name' + 'Wow that is big');
  } else if (pokemonList.height > 0.5 && pokemonList.height < 1.8){
    document.write('pokemonList[i].name' +'this is an average pokemon');
  } else {
    document.write('pokemonList[i].name' +'this is a small pokemon');
  }
};

function printArrayDetails (List) {
  for (let i = 0; 0 < List.lenght; i++){
    document.write ('<p>' + List[i].name + '</p>')
    console.log (List[i].name);
  }
}

printArrayDetails (pokemonList);
printArrayDetails (pokemonList2);


function divide(dividend, divisor){
  if(divisor === 0){
    return "You’re trying to divide by zero."
  }else{
    let result = dividend / divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));

let x = 5;

function foo(){
  let y = 10;
  console.log("From inside foo(): x = " + x);
  console.log("From inside foo(): y = " + y);
}

foo();
console.log("From outside foo(): x = " + x);
console.log("From outside foo(): y = " + y);




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
