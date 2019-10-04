<template>
<div id="HomeContainer" class="pageContainer">
    <div id="tabla2" class="tabla2" back>
        Envases
    </div>
    <!--  <div class="pageContentAbsolut">
      Hola soy kevin! 
       <b-button @click="clickMe">boton</b-button>
    </div>-->
    <!--<img id="logo" src="img/fondo2.jpg" width="1500px" height="1000px" />-->

    <b-table :data="data">
       
    <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
            {{ props.row.id }}
        </b-table-column>

        <b-table-column field="material" label="material">
            {{ props.row.first_name }}
        </b-table-column>

        <b-table-column field="descrip" label="Descripción">
            {{ props.row.last_name }}
        </b-table-column>

        

        <b-table-column label="Gender">
            <span>
                <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                </b-icon>
                {{ props.row.gender }}
            </span>
        </b-table-column>

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
                    'date': '2016/10/15 13:43:27',
                    'gender': 'Male'
                },
                {
                    'id': 2,
                    'material': 'John',
                    'descrip': 'Jacobs',
                    'date': '2016/12/15 06:00:53',
                    'gender': 'Male'
                },
                {
                    'id': 3,
                    'material': 'Tina',
                    'descrip': 'Gilbert',
                    'date': '2016/04/26 06:26:28',
                    'gender': 'Female'
                },
                {
                    'id': 4,
                    'material': 'Clarence',
                    "descrip": 'Flores',
                    'date': '2016/04/10 10:28:46',
                    'gender': 'Male'
                },
                {
                    'id': 5,
                    'material': 'Anne',
                    'descrip': 'Lee',
                    'date': '2016/12/06 14:38:38',
                    'gender': 'Female'
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
