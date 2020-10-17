let selectedPokemonOne;
let selectedPokemonTwo;

function pikachuSelect() {
    selectedPokemonOne = 'pikachu';
    pokemonOneSelection();
}
function magikarpSelect() {
    selectedPokemonOne = 'magikarp';
    pokemonOneSelection();
}
function jigglypuffSelect() {
    selectedPokemonOne = 'jigglypuff';
    pokemonOneSelection();
}
function mudkipSelect() {
    selectedPokemonTwo = 'mudkip';
    pokemonSelection();
}
function snorlaxSelect() {
    selectedPokemonTwo = 'snorlax';
    pokemonSelection();
}
function squirtelSelect() {
    selectedPokemonTwo = 'squirtel';
    pokemonSelection();
}

//traer pokemons de la api
function pokemonOneSelection(){
    const getPokemonOneData = () => {
        return new Promise((resolve, reject) => {

            pokemonOneRequest = new XMLHttpRequest
            pokemonOneRequest.open('GET',`https://pokeapi.co/api/v2/pokemon/${selectedPokemonOne}`)
            
            pokemonOneRequest.onload = function(){
                if(pokemonOneRequest.status !== 200) {
                    console.log('ha ocurrido un error', status.value);
                    reject(pokemonOneRequest.status)
                } else {
                    const parsedResponse = JSON.parse(pokemonOneRequest.response);
                    console.log('respuesta parseada',parsedResponse);
                    resolve(parsedResponse);
                }
            }
        });
    }
    
    getPokemonOneData(selectedPokemonOne)
        .then(response => console.log(response))
        .catch(error => console.log(error))
}



// crear pokemon
class Pokemon {
    constructor(atc,lf,def){
        this.atc = atc;
        this.lf = lf;
        this.def = def;
    }
}
pokemon1 = new Pokemon(20,200,5)
pokemon2 = new Pokemon(15,120,8)

//funcion asigar pokemon


//funcion pelear
function attack(){
    a = a - pokemon2.atc + pokemon1.def;
    b = b - pokemon1.atc + pokemon2.def;
    console.log(a);
    console.log(b);
}

function battle(){
    for(a = pokemon1.lf, b = pokemon2.lf; a > 0 && b > 0;){
       setTimeout(() => attack(),1000)
    }
}


