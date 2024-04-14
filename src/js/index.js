const botaoMostrarPokemons = document.querySelector('.btn-mostrar-pokemons');
const pokemonsInativos = document.querySelectorAll('.pokemon:not(.ativo)');


botaoMostrarPokemons.addEventListener('click',() => {
    mostrarMaisPokemons();
    esconderBotao();
});

function mostrarMaisPokemons() {
    pokemonsInativos.forEach(pokemonsInativos => {
        pokemonsInativos.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarPokemons.classList.add('remover');
}
