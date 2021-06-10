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
