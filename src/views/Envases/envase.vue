<template>
<div id="HomeContainer" class="pageContainer">
<div class="envasehome">
    <div class="level is-marginless" >
Envases
        <div class="level-left">
            
        </div>
        <div class="level-right">
            <b-field grouped>

                <b-input placeholder="Search..." type="search" icon="magnify" v-model="buscar">
                </b-input>

                <b-button class="botonsearch" type="is-danger" icon-right="plus" rounded="true" @click="clickMe" />
                <b-button class="botonsearch2" type="is-danger" icon-right="printer" rounded="true" @click="clickMe" 
                 />
            </b-field>
        </div>

    </div>

    <!--  <div class="pageContentAbsolut">
      Hola soy kevin! 
       <b-button @click="clickMe">boton</b-button>
    </div>-->
    <!--<img id="logo" src="img/fondo2.jpg" width="1500px" height="1000px" />-->

    <b-table :data="envasefiltrado">

        <template slot-scope="props">
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

            <!-- <b-table-column field="capa" label="Capacidad">
                    {{ props.row.capa }}
                </b-table-column>

                <b-table-column field="uni" label="Unidad">
                    {{ props.row.uni }}
                </b-table-column>

                <b-table-column field="prec" label="Precio">
                    {{ props.row.prec }}
                </b-table-column>-->

            <!--TABLA FEMENINO Y MASCULINO
            <b-table-column label="Precio">
            <span>
                <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                </b-icon>
                {{ props.row.gender }}
            </span>
        </b-table-column>-->

            <b-table-column field="" label="" centered class="has-text-right">
                <b-button type="is-danger" icon-right="delete" rounded="true"/>
                <b-button type="is-danger" icon-right="pencil" rounded="true" />
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
        
        toggleNav: function () {
            this.$emit('toggleNav')
        },
        getenvases() {
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
