let pokemonList = [{name:'Bulbasaur', height:0.7, types: ['grass', 'poison']}];
pokemonList[1]= {name:'Venusaur', height:1, types:['seed', 'overgrown']};
pokemonList[2]= {name:'Charmander', height:2, types:['fire']};
pokemonList[3]= {name:'Caterpie', height:0.3, types:['fire','water']};

console.log(pokemonList);

document.write ('Balbasaur, ', 'Venusaur, ', 'Charmander, ','Caterpie. ');

let pokemons = ['Balbasaur', 'Venusaur', 'Charmander','Caterpie']
let text = '';
let i = 0;
for (;pokemons [i];){
  text = text + '' + pokemons[i];
  i++;
}
console.log(text);

let pokemon0 ={name:'Bulbasaur', height: 0.7}
if (pokemon0.height > 1.8){
console.log ('this is a big pokemon')
}else if (pokemon0.height > 0.5 && pokemon0.height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}

let pokemon1 ={name:'Venusaur', height: 1}
if (pokemon1.height > 1.8){
console.log ('this is a big pokemon, Wow that is big!')
}else if (pokemon1.height > 0.5 && pokemon1.height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}

let pokemon2 ={name:'Charmander', height: 2}
if (pokemon2.height > 1.8){
console.log ('this is a big pokemon, Wow that is big!')
}else if (pokemon2.height > 0.5 && pokemon2.height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}

let pokemon3 ={name:'Caterpie', height: 0.3}
if (pokemon3.height > 1.8){
console.log ('this is a big pokemon, Wow that is big!')
}else if (pokemon3.height > 0.5 && pokemon3.height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}
