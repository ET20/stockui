<template>

    <div id="app">

        <nav id="mainNav" v-bind:class="[nav.show ? 'show' : 'hide']">
           
            <div class="box-user">
                <div id="navBanner">
                    <!--<img id="imagenfondo" src="/img/fondo.jpg">-->
                    <router-link class to="/account" id="usuario">
                        <img id="imagenperfil" src="/img/user.png" />
                        <h1>Kevin Olguin</h1>
                        <h2>kevinsolguin@sanluis.edu.ar</h2>
                    </router-link>

                </div>
            </div>

            <div class="box-list">
                <ul class="list-unstyled">

                    <li>
                        <router-link class to="/envases">
                            <i class="optionIcon mdi mdi-beaker"></i>
                            <span class="optionText">Envases</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class to="/herramientas">
                            <i class="optionIcon mdi mdi-wrench"></i>
                            <span class="optionText">Herramientas</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class to="/materia-prima">
                            <i class="optionIcon mdi mdi-food-apple"></i>
                            <span class="optionText">Materia Prima</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class to="/catalogo">
                            <i class="optionIcon mdi mdi-cart"></i>
                            <span class="optionText">Catalogo</span>
                        </router-link>
                    </li>

                    <li>

                        <button class="cerrar button block optionIcon mdi mdi-exit-to-app" @click="close()">Cerrar sesión</button>

                    </li>

                </ul>
            </div>
        </nav>
        <transition name="fade" :duration="500">
            <div v-if="nav.show" id="navOverlay" @click="toggleNav(false)"></div>
            <!--v-bind:class="[nav.show ? 'show' : 'hide']"-->
        </transition>

        <!--Contenedor principal donde cargan las páginas de la app-->
        <main>
            <header id="appHeader" class="level">
                <div class="level-left">
                    <button id="hamburguer" class="button" @click="toggleNav()">
                        <b-icon icon="menu" size="is-medium">
                        </b-icon>
                    </button>

                </div>

                <div class="level-right">
                    <nav id="mainNav" v-bind:class="[nav.show ? 'show' : 'hide']">
                        <ul class="list-unstyled">
                            <li>
                                <router-link class to="/login">
                                    <i class="optionIcon mdi mdi-beaker"></i>
                                    <span class="optionText">Envases</span>
                                </router-link>
                            </li>
                        </ul>
                    </nav>

                    <!--//BOTON Y LOGO DE LOGIN 
                <div id="caja1" class="caja0">

                    <b-button @click="clickMe" size="is-large">
                        <b-icon icon="account" size="is-medium">
                        </b-icon>

                    </b-button>

                </div>-->
                </div>

            </header>
            <div class="notify" v-if="isActive" @click="toggle(false)" aria-close-label="Close notification">
                ¿Seguro que quiere salir?
                <div class="columns">
                    <div class="column">
                        <div class="botonno" size="is-large">
                            <b-button @click="isActive = !isActive" type="is-info" >NO
                                <b-icon icon="close-box-outline" size="is-small">
                                </b-icon>
                            </b-button>
                        </div>
                    </div>
                    <div class="column">
                        <div class="botonsi" size="is-large">
                            <b-button @click="clickMe" type="is-info">
                                SI <b-icon icon="exit-to-app" size="is-small">
                                </b-icon>

                            </b-button>
                        </div>
                    </div>
                </div>
            </div>

            <transition name="fade">
                <router-view v-on:toggleNav="toggleNav"></router-view>
            </transition>
        </main>
    </div>


</template>

<script>
export default {
    name: 'Aplicacion',
    data() {
        return {
            nav: {
                show: false

            },
            isActive: false

        }
    },

    watch: {
        $route: 'changeRoute'
    },
    methods: {
        clickMe() {

            this.$router.push('login')
            //this.$notification.open('Clicked!!')
        },
        close() {
            this.toggleNav(false)
            this.isActive = !this.isActive
        },

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

        toggle: function (t) {
            switch (t) {
                case true:
                    this.isActive = true
                    break;
                case false:
                    this.isActive = false
                    break;
                default:
                    this.isActive = !this.isActive
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
