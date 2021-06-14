var pokemonRepository = (function() {
  var pokemonList = [{
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

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

  // function loop(item) {
  //   pokemonRepository.forEach(item)
  // }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);


  }

  return { //makes my function public
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());

//

function myLoopFunction(pokemonList) {
  pokemonList.forEach((pokemon, index) => {
    console.log(pokemon, index)
  })
}
myLoopFunction(pokemonRepository.getAll())

//// 1.6 DOM

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})
