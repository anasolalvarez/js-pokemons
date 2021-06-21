var pokemonRepository = (function() {
  var pokemonList = [
    // {
    //   name: 'Bulbasaur',
    //   height: 0.7,
    //   types: ['grass', 'poison']
    // }, {
    //   name: 'Venusaur',
    //   height: 1,
    //   types: ['seed', 'overgrown']
    // }, {
    //   name: 'Charmander',
    //   height: 2,
    //   types: ['fire']
    // }, {
    //   name: 'Caterpie',
    //   height: 0.3,
    //   types: ['fire', 'water']
    // }
  ];

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
    let pokemonList = document.querySelector('.pokemon-list'); //define
    let listPokemon = document.createElement('li'); //create li element
    let button = document.createElement('button'); //create button
    button.innerText = pokemon.name; //tell each button to have the name on the pokemonList (I defined pokemon with function)
    button.classList.add('button-class'); //add style to my button
    listPokemon.appendChild(button); // appen all the li into button
    pokemonList.appendChild(listPokemon); // define pokemosList as li
    button.addEventListener("click", function() {
      showDetails(pokemon)
    })
  }

  // function showDetails(pokemon){
  // console.log(pokemon);
  // }

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Other functions remain here

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon)
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    });
  }

  return { //makes my function public
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

console.log(pokemonRepository.getAll());


function myLoopFunction(pokemonList) {
  pokemonList.forEach((pokemon, index) => {
    console.log(pokemon, index)
  })
}
myLoopFunction(pokemonRepository.getAll())


// pokemonRepository.getAll().forEach(function(pokemon) {
//   pokemonRepository.addListItem(pokemon);
// });

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

///////////

// fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
//   return response.json(); // This returns a promise!
// }).then(function (pokemonList) {
//   console.log(pokemonList); // The actual JSON response
// }).catch(function () {
//   // Error
// });

///

// let pokemonRepository = (function () {
//   let pokemonList = [];
//   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//
//   // Other functions remain here
//
//   function loadList() {
//     return fetch(apiUrl).then(function (response) {
//       return response.json();
//     }).then(function (json) {
//       json.results.forEach(function (item) {
//         let pokemon = {
//           name: item.name,
//           detailsUrl: item.url
//         };
//         add(pokemon);
//       });
//     }).catch(function (e) {
//       console.error(e);
//     })
//   }
//
//   return {
//     add: add,
//     getAll: getAll,
//     loadList: loadList
//   };
// })();
//
// pokemonRepository.loadList().then(function() {
//   // Now the data is loaded!
//   pokemonRepository.getAll().forEach(function(pokemon){
//     pokemonRepository.addListItem(pokemon);
//   });
// });
