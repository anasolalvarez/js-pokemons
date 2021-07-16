var pokemonRepository = (function () {
    var pokemonList = []

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=300'
    // let modalContainer = document.querySelector('#modal-container')
    let searchInput = document.querySelector('#searchIn')
    // let pokemon = ''

    function getAll() {
        return pokemonList
    }

    // function add(item) {
    //     pokemonList.push(item)
    // }

    //add poke
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon
        ) {
            pokemonList.push(pokemon)
        } else {
            console.log('The Pokemon is not correct' + '<br>')
        }
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.list-group')
        let listPokemon = document.createElement('li')
        listPokemon.classList.add('list-group-item', 'list-group-item-action')
        let button = document.createElement('button')
        button.innerText = pokemon.name
        button.classList.add('btn', 'btn-primary'),
            button.setAttribute(
                'data-target',
                '#pokemonModal',
                'data-toggle',
                'modal'
            )
        pokemonList.appendChild(listPokemon)
        listPokemon.appendChild(button)
        button.addEventListener('click', function () {
            showDetails(pokemon)
        })
    }

    // Other functions remain here

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    }
                    add(pokemon)
                    // console.log(pokemon)
                })
            })
            .catch(function (e) {
                console.error(e)
            })
    }

    function loadDetails(item) {
        let url = item.detailsUrl
        return fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (details) {
                // Now we add the details to the item
                item.imageUrl = details.sprites.front_default
                item.height = details.height
                item.types = details.types
                item.abilities = details.abilities
                item.types = []
                for (let i = 0; i < details.types.length; i++) {
                    item.types.push(details.types[i].type.name)
                }
                //pokemon abilities
                item.abilities = []
                for (let i = 0; i < details.abilities.length; i++) {
                    item.abilities.push(details.abilities[i].ability.name)
                }
            })
            .catch(function (e) {
                console.error(e)
            })
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log('item', item)
            pokemonRepository.showModal(item)
        })
    }

    /////////modals//////

    function showModal(item) {
        pokemonRepository.loadDetails(item).then(function () {
            //bootstrap
            let modalBody = $('.modal-body')
            let modalTitle = $('.modal-title')
            // let modalHeader = $('.modal-header')

            modalTitle.empty()
            modalBody.empty()

            let nameElement = '<h1>' + item.name + '</h1>'

            let imageElementFront = $(
                '<img class="modal-img" style="width:20%">'
            )
            imageElementFront.attr('src', item.imageUrl)

            let heightElement = $('<p>' + 'Height: ' + item.height + '</p>')

            let abilitiesElement = $(
                '<p>' + 'Abilities: ' + item.abilities + '</p>'
            )

            let typesElement = $('<p>' + 'Types: ' + item.types + '</p>')

            //add event listener to search bar to find pokemon in the list
            searchInput.addEventListener('input', function () {
                let listPokemon = document.querySelectorAll('.list-group-item')
                let value = searchInput.value.toUpperCase()

                listPokemon.forEach(function (pokemon) {
                    if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
                        pokemon.style.display = ''
                    } else {
                        pokemon.style.display = 'none'
                    }
                })
            })

            modalTitle.append(nameElement)
            modalBody.append(imageElementFront)
            modalBody.append(heightElement)
            modalBody.append(abilitiesElement)
            modalBody.append(typesElement)

            $('#pokemonModal').modal('toggle')
        })
    }

    // boostrap ^

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    }
})()

console.log(pokemonRepository.getAll())

function myLoopFunction(pokemonList) {
    pokemonList.forEach((pokemon, index) => {
        console.log(pokemon, index)
    })
}
myLoopFunction(pokemonRepository.getAll())

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    })
})

// $ npm i --save-dev eslint [eslint-plugins]
