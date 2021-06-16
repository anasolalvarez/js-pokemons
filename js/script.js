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
    let pokemonList = document.querySelector('.pokemon-list');//define
    let listPokemon = document.createElement('li');//create li element
    let button = document.createElement('button');//create button
    button.innerText = pokemon.name;//tell each button to have the name on the pokemonList (I defined pokemon with function)
    button.classList.add('button-class'); //add style to my button
    listPokemon.appendChild(button); // appen all the li into button
    pokemonList.appendChild(listPokemon); // define pokemosList as li
    button.addEventListener("click", function(){showDetails(pokemon)})
  }

function showDetails(pokemon){
console.log(pokemon);
}

  return { //makes my function public
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails:showDetails,
  };
})();

console.log(pokemonRepository.getAll());


function myLoopFunction(pokemonList) {
  pokemonList.forEach((pokemon, index) => {
    console.log(pokemon, index)
  })
}
myLoopFunction(pokemonRepository.getAll())

//// 1.6 DOM

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
//
// function addListItem (showDetails) {
//   console.log (pokemon, index)
// };
// addListItem (pokemon);
//
// document.querySelector('.show-more').addEventListener('click', function () {
//   document.querySelector('.additional-information')
//     .classList.toggle('is-visible');
// });
