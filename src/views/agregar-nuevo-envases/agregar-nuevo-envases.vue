<template>
<div class="pageContainer">

    <div class="level is-marginless">
        Agregar nuevos envases
    </div>

    <section class="container">
        <b-field label="Ingrese un material" class="inpute">
            <b-input maxlength="30"> </b-input>
        </b-field>

        <b-field label="Ingrese una descripcion" class="inpute">

            <input type="number" step="2" maxlength="30"/>
            
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
            <b-input maxlength="30"></b-input>
        </b-field>
    </section>
</div>
</template>

<script>
export default {
    components: {},
    // data: function() {},
    methods: {
        toggleNav: function () {
            this.$emit('toggleNav')
        },

    },
    created() {
        this.$store.commit('SET_LAYOUT', 'principal-layout')
    }
}
</script>

<style scoped>
@import "agregar-nuevo-envases.min.css";
</style>
