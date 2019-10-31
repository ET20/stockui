<template>
  <div id="app">
    
    <div id="titulo">
    CONTROL DE STOCK
    </div>
  
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>

  
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700");
@import url("http://cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css");
@import "../styles/ui.css";
</style>

<script>
export default {
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
      this.$router.push("home");
    }
  }
};
</script>
