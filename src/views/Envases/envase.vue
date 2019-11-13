<template>
<div id="HomeContainer" class="pageContainer">
    <div class="envasehome">
        <div class="level is-marginless">
            Envases
            <div class="level-left">

            </div>
            <div class="level-right">
                <b-field grouped>

                    <b-input placeholder="Search..." type="search" icon="magnify" v-model="buscar">
                    </b-input>

                    <b-button class="botonsearch" type="is-danger" icon-right="plus" :rounded="true" @click="clickMe" />
                    <b-button class="botonsearch2" type="is-danger" icon-right="printer" :rounded="true" @click="imprimir" />

                </b-field>
            </div>

        </div>

        <!--  <div class="pageContentAbsolut">
      Hola soy kevin! 
       <b-button @click="clickMe">boton</b-button>
    </div>-->
        <!--<img id="logo" src="img/fondo2.jpg" width="1500px" height="1000px" />-->

        <b-table :data="envasefiltrado">

            <template slot-scope="props" class="props">
                <b-table-column field="idmember" label="ID" width="40" numeric>
                    {{ props.row.idmember}}
                </b-table-column>

                <b-table-column field="lastname" label="material">
                    {{ props.row.lastname }}
                </b-table-column>

                <b-table-column field="dni" label="Descripción">
                    {{ props.row.dni }}
                </b-table-column>

                <b-table-column field="gender.gendername" label="Cantidad">
                    {{ props.row.gender.gendername }}
                </b-table-column>
                <b-table-column field="gender.gendername" label="Capacidad">
                    {{ props.row.gender.gendername }}
                </b-table-column>
                <b-table-column field="gender.gendername" label="Unidad">
                    {{ props.row.gender.gendername }}
                </b-table-column>

                
                <b-table-column label>
                    <router-link :to="`/editarcatalogo/${props.row.idmember}`">
                        <b-icon icon="chevron-right" size="is-medium"></b-icon>
                    </router-link>

                </b-table-column>
            </template>
        </b-table>

    </div>
</div>
</template>

<script>
import axios from "axios";
export default {

    components: {},

    data() {
        return {
            envases: [],
            buscar: ""

        }
    },

    computed: {
        envasefiltrado() {
            return this.envases.filter(
                en => {
                    return en.lastname.toLowerCase().includes(this.buscar.toLowerCase())

                }

            )
        }
    },

    methods: {
        clickMe() {

            this.$router.push('plus-envase')
            //this.$notification.open('Clicked!!')
        },

        imprimir() {

        },

        toggleNav: function () {
            this.$emit('toggleNav')
        },
        getenvases() {
            //http://et20-stockapi.herokuapp.com/public/container
            // http://newberygestionapi.herokuapp.com/public/members
            axios.get("http://newberygestionapi.herokuapp.com/public/members")
                .then(({
                    data
                }) => {
                    this.envases = data.result

                })
        }

    },
    created() {
        this.$store.commit('SET_LAYOUT', 'principal-layout')

        this.getenvases()
    }

}
</script>

<style scoped>
@import "envases.min.css";
</style>
