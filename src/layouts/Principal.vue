<template>
  <div id="app">
    <!--Contenedor del menu lateral-->
    <nav id="mainNav" v-bind:class="[nav.show ? 'show' : 'hide']">
      <div id="navBanner">
        <!--<img id="imagenfondo" src="../src/assets/ninja.jpg">-->
        <router-link class to="/account" id="usuario">
          <img id="imagenperfil" src="../assets/logo.png" />
          <h1>Walter Molina</h1>
          <h2>walter@tachuso.com</h2>
        </router-link>
      </div>
      <ul class="list-unstyled">
        <li>
          <router-link class to="/">
            <i class="optionIcon mdi mdi-home"></i>
            <span class="optionText">Inicio</span>
          </router-link>
        </li>
        <li>
          <router-link class to="/members">
            <i class="optionIcon mdi mdi-account"></i>
            <span class="optionText">Socios</span>
          </router-link>
        </li>
        <li>
          <router-link class to="/fees">
            <i class="optionIcon mdi mdi-ticket-account"></i>
            <span class="optionText">Cuotas</span>
          </router-link>
        </li>
        <li>
          <router-link class to="/newfee">
            <i class="optionIcon mdi mdi-ticket-account"></i>
            <span class="optionText">Generar Cuotas</span>
          </router-link>
        </li>
        <li>
          <router-link class to="/newpay">
            <i class="optionIcon mdi mdi-ticket-account"></i>
            <span class="optionText">Registrar Pago</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade" :duration="500">
      <div v-if="nav.show" id="navOverlay" @click="toggleNav(false)"></div>
      <!--v-bind:class="[nav.show ? 'show' : 'hide']"-->
    </transition>

    <!--Contenedor principal donde cargan las páginas de la app-->
    <main>
      <header id="appHeader">
        <button id="hamburguer" class="button" @click="toggleNav()">
          <i class="mdi mdi-menu"></i>
        </button>
        <img id="logo" src="../assets/logo.png" />
        <h1>Título 1</h1>
        <i class="chevron mdi mdi-chevron-right"></i>
        <h2>
          <i class="mdi mdi-user"></i>
          Título 2
        </h2>
        <div class="clr"></div>
      </header>
      <transition name="fade">
        <router-view v-on:toggleNav="toggleNav"></router-view>
      </transition>
    </main>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      nav: {
        show: false
      }
    }
  },

  watch: {
    $route: 'changeRoute'
  },
  methods: {
    setTitle: function (data) {
      // console.log(data);
      if (data.level > 0) {
        // this.title[data.level] = { title: data.title, icon: data.icon }
      }
    },
    toggleNav: function (t) {
      switch (t) {
        case true:
          this.nav.show = true
          break;
        case false:
          this.nav.show = false
          break;
        default:
          this.nav.show = !this.nav.show
          break;
      }
    },
    changeRoute: function () {
      // al cambiar de ruta se cierra la barra de navegación automáticamente
      const t = this
      // setTimeout(function() {
      t.toggleNav(false)
      // }, 100);
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700");
@import url("http://cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css");
@import "../styles/ui.css";
</style>
