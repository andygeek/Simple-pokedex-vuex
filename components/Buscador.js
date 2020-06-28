Vue.component('Buscador', {
    template:`
        <div class="card mt-4">
            <div class="card-header">
                <h5 class="card-title">Buscador</h5>
            </div>
            <div class="card-body">
                <div class="row gy-2">
                    <div class="col-lg-2 col-md-3 col-sm-2 col-3">
                        <label for="" class="col-form-label">
                            <p class="font-weight-normal">Id o Nombre:</p>
                        </label>
                    </div>
                    <div class="col-lg-7 col-md-9 col-sm-7 col-9 d-flex align-items-center">
                        <input type="text" class="form-control" v-model="name" @keyup.enter="obtenerPokemon(name)">
                    </div>
                    <div class="col-lg-3 col-sm-3 col-md-12 d-flex align-items-center">
                        <button class="btn btn-success btn-block" @click="obtenerPokemon(name)">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods:{
        ...Vuex.mapActions(['obtenerPokemon']),
    },
    data(){
        return {
            name:''
        }
    }
})