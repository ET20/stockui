<template>
  
  

  <div id="app">
  <div class="columns">
  <div class="caja0">2</div>
  <div class="caja1">3</div>
  <div class="caja2">4</div>
</div>
    <!--Contenedor principal donde cargan las páginas de la app-->
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


