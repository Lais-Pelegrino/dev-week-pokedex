/* quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão do pokémon correspondente ao que foi selecionado na listagem*/

/*para isso vamos precisar trabalhar com dois elementos:
1-listagem
2-cartão do pokémon
então vamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

-remover a classe aberto do cartão
-ao clicar em um pokémon da listagem, pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item selecionado
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartão
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const idPokemonSelecionado = pokemon.attributes.id.value

        //clicar em um pokémon da listagem e pegar o id para mostrar o cartao
        const idCardPokemonAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonAbrir = document.getElementById(idCardPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')
        //adicionar o ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})