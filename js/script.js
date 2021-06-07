let pokemonList = [{name:'Bulbasaur', height:0.7, types: ['grass', 'poison']}];
pokemonList[1]= {name:'Venusaur', height:1, types:['seed', 'overgrown']};
pokemonList[2]= {name:'Charmander', height:2, types:['fire']};
pokemonList[3]= {name:'Caterpie', height:3, types:['fire','water']};

console.log(pokemonList);

document.write ('Balbasaur, ', 'Venusaur, ', 'Charmander, ','Caterpie. ');

let pokemonsList = []//'Balbasaur', 'Venusaur', 'Charmander','Caterpie'
let text = '';
let i = 0;
for (;pokemonList [i];){
  text = text + '' + pokemonsList[i];
  i++;
}
console.log('Balbasaur height:0.7 - Venusaur height:1 - Charmender height:2 - Caterpie height:0.3');

let Balbasaur = [];
if (pokemonList[0].height > 1.8){
console.log ('this is a big pokemon')
}else if (pokemonList[0].height > 0.5 && pokemonList[0].height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}

let Venusaur =[];
if (pokemonList[1].height > 1.8){
console.log ('this is a big pokemon, Wow that is big!')
}else if (pokemonList[1].height > 0.5 && pokemonList[1].height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}

let Charmander = [];//{name:'Charmander', height: 2}
if (pokemonList[2].height > 1.8){
console.log ('this is a big pokemon, Wow that is big!')
}else if (pokemonList[2].height > 0.5 && pokemonList[2].height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}

let Caterpie = []; //{name:'Caterpie', height: 0.3}
if (pokemonList[3].height > 1.8){
console.log ('this is a big pokemon, Wow that is big!')
}else if (pokemonList[3].height > 0.5 && pokemonList[3].height <1.8){
  console.log('this is an average pokemon')
} else {
console.log ('this is a small pokemon')}
