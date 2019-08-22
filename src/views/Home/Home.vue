<template>
  <div id="HomeContainer" class="pageContainer">
    <div class="pageContentAbsolut">
      Hola soy kevin!
       <b-button @click="clickMe">boton</b-button>
    </div>
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
    clickMe () {
      this.$router.push('login')
      //this.$notification.open('Clicked!!')
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style scoped>
@import "Home.min.css";
</style>
