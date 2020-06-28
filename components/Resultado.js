Vue.component('Resultado', {
    template:`
        <div class="card mt-4">
            <div class="card-header">
                <h4 class="card-title">Pokemon</h4>
            </div>
            <div class="card-body">
                <div class="row gy-1">
                    <div class="col-md-6">
                        <div class="row pb-2">
                            <div class="col-auto">
                                <strong>Id:</strong>
                            </div>
                            <div class="col-auto">
                                {{obtenerId}}
                            </div>
                        </div>
                        <div class="row pb-2">
                            <div class="col-auto">
                                <strong>Nombre:</strong>
                            </div>
                            <div class="col-auto">
                                {{obtenerNombre}}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <img :src="obtenerImg" alt="pokemon" class="img-thumbnail" style="width: 230px;">
                    </div>
                </div>
            </div>
        </div>
    `,
    computed:{
        ...Vuex.mapGetters(['obtenerNombre', 'obtenerId', 'obtenerImg'])
    }
})