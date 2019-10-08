<template>
<div id="HomeContainer" class="pageContainer">
    <div id="tabla2" class="tabla2" back>
        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify">
            </b-input>
        </b-field>
        Envases
        
    </div>
    <!--  <div class="pageContentAbsolut">
      Hola soy kevin! 
       <b-button @click="clickMe">boton</b-button>
    </div>-->
    <!--<img id="logo" src="img/fondo2.jpg" width="1500px" height="1000px" />-->
<div class="tabla">
    <b-table :data="data">
       
    <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
            {{ props.row.id }}
        </b-table-column>

        <b-table-column field="material" label="material">
            {{ props.row.material }}
        </b-table-column>

        <b-table-column field="descrip" label="Descripción">
            {{ props.row.descrip }}
        </b-table-column>

        <b-table-column field="cant" label="Cantidad">
            {{ props.row.cant }}
        </b-table-column>

        <b-table-column field="capa" label="Capacidad">
            {{ props.row.capa }}
        </b-table-column>

         <b-table-column field="uni" label="Unidad">
            {{ props.row.uni }}
        </b-table-column>

         <b-table-column field="prec" label="Precio">
            {{ props.row.prec }}
        </b-table-column>

        <!--TABLA FEMENINO Y MASCULINO
            <b-table-column label="Precio">
            <span>
                <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                </b-icon>
                {{ props.row.gender }}
            </span>
        </b-table-column>-->

        <b-table-column field="" label="" centered>
             <b-button type="is-danger"
                icon-right="delete"  rounded="true"/>
                <b-button type="is-danger"
                icon-right="pencil" rounded="true" />
        </b-table-column>
    </template>
    </b-table>
    

</div>
</template>

<script>
export default {

    components: {},

    data() {
        return {
            data: [{
                    'id': 1,
                    'material': 'Jesse',
                    'descrip': 'Simmons',
                    'cant': '2016',
                    'capa': '5',
                    "uni": "4",
                    "prec":"$400"
                },
                {
                    'id': 2,
                    'material': 'John',
                    'descrip': 'Jacobs',
                    'cant': '153',
                    'capa': 'Male',
                    "uni": "4",
                     "prec":"$400"

                },
                {
                    'id': 3,
                    'material': 'Tina',
                    'descrip': 'Gilbert',
                    'cant': '2016/04/26 06:26:28',
                    'capa': 'Female',
                    "uni": "4",
                     "prec":"$400"
                },
                {
                    'id': 4,
                    'material': 'Clarence',
                    "descrip": 'Flores',
                    'cant': '2016/04/10 10:28:46',
                    'capa': 'Male',
                    "uni": "4",
                     "prec":"$400"
                },
                {
                    'id': 5,
                    'material': 'Anne',
                    'descrip': 'Lee',
                    'cant': '2016/12/06 14:38:38',
                    'capa': 'Female',
                    "uni": "4",
                     "prec":"$400"
                }
            ],
           

            
        }
    },
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
@import "envases.min.css";
</style>
