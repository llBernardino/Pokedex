

const pokeApi = {}
    function convertpokeApiDetailtoPokemon(pokeDetail){
        const pokemon = new Pokemon()
        pokemon.number = pokeDetail.order
        pokemon.name = pokeDetail.name

        
        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types

        pokemon.types = types
        pokemon.type = type
        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
        return pokemon
    }
pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch (pokemon.url)
    .then ((response) => response.json ())
    .then(convertpokeApiDetailtoPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 100 ) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return fetch(url) //promessa de alguma coisa promisse
        .then((response) => response.json()) //convertendo o body em json
        .then((jsonBody) => jsonBody.results) // vai em json e pega o results q é onde ta a lista de pokemon e joga pro proximo then
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error))  //catch serve para pegar o erro e manipular caso o fetch n de certo
        .finally(() => console.log("requisiçao concluida")) //finaly e se der certo ou der erro ele vai retornar algo n importa     
}

Promise.all([ //quanto tem muitas requisiçoes usa o promisse.all para carregar todas de uma vez e depois da o resultado :)
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/5'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/6'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/7'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/8'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/9'),
    
    fetch('https://pokeapi.co/api/v2/pokemon/10')
]).then((results) => {
    console.log(results)
})