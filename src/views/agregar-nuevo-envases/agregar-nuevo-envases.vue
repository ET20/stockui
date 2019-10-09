<template>
  
  <div id="HomeContainer" class="pageContainer">

   <div class="level is-marginless">
            Agregar nuevos envases
        </div>
 
  <section>
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>

        <b-field label="Message">
            <b-input maxlength="200" type="textarea"></b-input>
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
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style scoped>
@import "agregar-nuevo-envases.min.css";
</style>
