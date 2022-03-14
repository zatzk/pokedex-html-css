const listSelecaoPokemons = document.querySelectorAll('.pokemon') // seleciona todos os elementos com a classe pokemon
const pokemonsCard = document.querySelectorAll('.cartao-pokemon') // seleciona todos os elementos com a classe cartao-pokemon

listSelecaoPokemons.forEach(pokemon => { // para cada elemento da lista de seleção de pokemons
  pokemon.addEventListener('click', () => { // adiciona um evento de click
    const cartaoPokemonAberto = document.querySelector('.aberto') // seleciona o primeiro elemento com a classe aberto
    cartaoPokemonAberto.classList.remove('aberto') // remove a classe aberto do primeiro elemento com a classe aberto


    const idPokemonSelecionado = pokemon.attributes.id.value // pega o valor do atributo id do elemento selecionado

    const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado) // seleciona o elemento com o id cartao-idPokemonSelecionado
    cartaoPokemonParaAbrir.classList.add('aberto') // adiciona a classe aberto ao elemento selecionado


    const pokemonAtivoNaListagem = document.querySelector('.ativo') // seleciona o primeiro elemento com a classe ativo
    pokemonAtivoNaListagem.classList.remove('ativo') // remove a classe ativo do primeiro elemento com a classe ativo

    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado) // seleciona o elemento com o id idPokemonSelecionado
    pokemonSelecionadoNaListagem.classList.add('ativo') // adiciona a classe ativo ao elemento selecionado
  })
})