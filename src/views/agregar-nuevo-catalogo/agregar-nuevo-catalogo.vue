<template>
<div class="pageContainer">

    <div class="level is-marginless">
        Agregar nuevos catalogo
    </div>

    <section class="container">
        <div class="columns" >
        <div class="column is-half is-offset-one-quarter" >
        <b-field label="Ingrese un material" class="inpute">
            <b-input maxlength="30"> </b-input>
        </b-field>

        <b-field label="Ingrese una descripcion" class="inpute">

            <b-input maxlength="30"></b-input>
        </b-field>

        

        <b-field label="Ingrese cantidad" class="inpute">
            <b-input maxlength="30"></b-input>
        </b-field>

        <b-field label="Ingrese unidad" class="inpute">
            <b-input maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Ingrese lote" class="inpute">
            <b-input maxlength="30"></b-input>
        </b-field>

        
            <b-field label="Ingrese precio" class="inpute">
                <b-input  type="number" step="2" ></b-input>
            </b-field>
        </div>
        </div>

    </section>
</div>
</template>

<script>
export default {
    components: {},
    data: function() {
        envases:false
    },
    methods: {
        toggleNav: function () {
            this.$emit('toggleNav')
        },

         getsocio() {
            //http://et20-stockapi.herokuapp.com/public/container
            this.cargando = true
            axios.get("http://newberygestionapi.herokuapp.com/public/members/" + this.$route.params.id )
                .then(({
                    data
                }) => {
                    this.envases = data.result
                    
                })
                .catch(error => {
                    this.envases = false
                })
               
        },

    },
    created() {
        this.$store.commit('SET_LAYOUT', 'principal-layout')
        this.getsocio()
    }
}
</script>

<style scoped>
@import "agregar-nuevo-catalogo.min.css";
</style>
