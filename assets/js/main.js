
    const offset = 0
    const limit = 100
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    
    function convertPokemonToHtml(pokemon){
        return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class = "type">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `
    }

    const pokemonList = document.getElementById("pokemonList")

    pokeApi.getPokemons().then((pokemons = []) => {  //imprimindo o results
        const newHtml = pokemons.map(convertPokemonToHtml).join('') // pega a lista, mapeia/convert os pokemons e uma lista de li e ai juntas eles li sem separador
        pokemonList.innerHTML = newHtml 
    })         
        
        // const newList = pokemons.map((pokemon) => {
        //     return convertPokemonToHtml(pokemon)
        // })
        // const newHtml = newList.join('')
        // pokemonList.innerHTML += newHtml
        // const listItems = []
        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToHtml(pokemon))
        // }
        // console.log(listItems)




    //(function normal grande)
    //.then(function (response) { //then serve para pegar a resposta e manipular caso de certo o fetch 
    //    return response.json() //convertendo a promisse em json
    //})
  