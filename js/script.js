
let pokemonRepository = (function() {
  let pokemonList = [];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

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

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#button-class');

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

  // function showDetails(item) {
  //   pokemonRepository.loadDetails(item).then(function() {
  //     console.log(item);
  //   });
  // }

  /////modals//
  function showModal (title,pokemon) {
    let modal = document.querySelector('.pokemon-list');
    modalContainer.innerHTML = '';
    // let modal = document.createElement('div');
    modal.classList.add('modal');

    // let closeButtonElement = document.createElement('button');
    let closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    //i think that in my case I dont need to create this elements? //
    let titleElement = document.querySelector('h1');
    titleElement.innerText = title;

    let contentElement = document.querySelector('ul');
    contentElement.innerText = pokemon.name;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);


    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('button-class').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

})();



////////

  return { //makes my function public
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

console.log(pokemonRepository.getAll());


function myLoopFunction(pokemonList) {
  pokemonList.forEach((pokemon, index) => {
    console.log(pokemon, index)
  })
}
myLoopFunction(pokemonRepository.getAll())


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
