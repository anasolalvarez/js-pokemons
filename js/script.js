var pokemonRepository = (function() {
  var pokemonList = [];

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

//add poke
  function add(pokemon) {
     if (typeof pokemon === 'object' &&
       'name' in pokemon &&
       'detailsUrl' in pokemon
     ) {
       pokemonList.push(pokemon);
     } else {
       console.log('The Pokemon is not correct' + '<br>')
     }
   }

  // c

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

  function showLoadingMessage() {
    document.querySelector('#loading').style.visibility = 'visible';
  }

  function hideLoadingMessage() {
    document.querySelector('#loading').style.visibility = 'hidden';
  }


  /////////modals//////

  function showModal(item) {
    let modalContainer = document.querySelector('#modal-container');
    // Clear all existing modal content
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');


    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

let elementContainer = document.createElement('div');
elementContainer.classList.add('element-container');

let imgElement = document.createElement('img');
imgElement.classList.add('pokemon.img');
let titleElement = document.createElement('h1');
titleElement.classList.add('pokemon.title');
let typeElement = document.createElement('p');
typeElement.classList.add('pokemon.type');
let heightElement = document.createElement('p');
heightElement.classList.add('pokemon.height');

imgElement.src = item.image;

if (item.type.length === 1) {
  typeElement.innerText = 'Type: ' + item.type;
} else {
  typeElement.innerText = 'Types: ' + item.type;
}

if (item.height > 10) {
  heightElement.innerText = 'Height: ' + item.height / 10 + ' m ';
} else {
  heightElement.innerText = 'Height: ' + item.height + '0 cm ';
}


modal.appendChild(closeButtonElement);
modal.appendChild(elementContainer);
elementContainer.appendChild(imgElement);
elementContainer.appendChild(titleElement);
elementContainer.appendChild(typeElement);
elementContainer.appendChild(heightElement);
modalContainer.appendChild(modal);

modalContainer.classList.add('is-visible');
}


  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
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

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
  ////////modals^//////


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
