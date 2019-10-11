<template>
  <div id="HomeContainer" class="pageContainerh">
   
 <img id="logo" src="img/fondo2.jpg" width=%100 height=%100 />
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
@import "Home.min.css";
</style>
