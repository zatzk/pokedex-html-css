const listPokemonSelect = document.querySelectorAll('.pokemon') // seleciona todos os elementos com a classe pokemon
const pokemonsCard = document.querySelectorAll('.pokemon-card') // seleciona todos os elementos com a classe cartao-pokemon

listPokemonSelect.forEach(pokemon => { // para cada elemento da lista de seleção de pokemons
  pokemon.addEventListener('click', () => { // adiciona um evento de click
    const openPokemonCard = document.querySelector('.open') // seleciona o primeiro elemento com a classe open
    openPokemonCard.classList.remove('open') // remove a classe open do primeiro elemento com a classe open


    const pokemonSelectedID = pokemon.attributes.id.value // pega o valor do atributo id do elemento selecionado

    const pokemonCardOpen = document.getElementById('card-' + pokemonSelectedID) // seleciona o elemento com o id cartao-pokemon-id
    pokemonCardOpen.classList.add('open') // adiciona a classe open ao elemento selecionado


    const pokemonListingActive = document.querySelector('.active') // seleciona o primeiro elemento com a classe active
    pokemonListingActive.classList.remove('active') // remove a classe active do primeiro elemento com a classe active

    
    const pokemonSelectedOnListing = document.getElementById(pokemonSelectedID) // seleciona o elemento com o id pokemonSelectedID
    pokemonSelectedOnListing.classList.add('active') // adiciona a classe active ao elemento selecionado
  })
})