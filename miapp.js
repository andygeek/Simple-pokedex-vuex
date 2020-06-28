const almacen = new Vuex.Store({
    state: {
        title: 'Pokedex XD',
        pokemon: {
            sprites:'',
            name:'',
            id:''
        },
    },
    mutations:{
        colocarNombre(state, pokeAction){
            state.pokemon = pokeAction;
        },
    },
    actions:{
        obtenerPokemon: async function (context, name) {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);            
            try {
                const pokemon = await data.json();
                context.commit('colocarNombre', pokemon);
            } catch (error) {
                poke = {
                    name: 'No encontrado',
                    id: 0,
                    sprites:''
                }
                context.commit('colocarNombre', poke);
            }
            
        }
    },
    getters: {
        obtenerNombre: state => {
            return state.pokemon.name;
        },
        obtenerId: function (state) {
            return state.pokemon.id;
        },
        obtenerImg: state => {
            if(state.pokemon.sprites != ''){
                return state.pokemon.sprites.front_default; 
            }
            else{
                return 'pokeball.png';
            } 
        }
    }
})


const miapp = new Vue({
    el: '#mypokedex',
    data:{
        mensaje: 'Hola XD'
    },
    store: almacen,
})