import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import envase from "./views/Envases/envase.vue"
import catalogo from "./views/Catalogo/catalogo.vue"
import materia from "./views/materia-prima/materia.vue"
import herramientas from "./views/herramientas/herramientas.vue"
import agregarcatalogo from "./views/agregar-nuevo-catalogo/agregar-nuevo-catalogo.vue"


Vue.use(Router) 

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: ()=> import ("./views/Home/Home.vue")
    },
    {
      path: '/envases',
      name: 'envase',
      component: ()=> import ("./views/Envases/envase.vue")
    },
   
    {
      path: '/materia-prima',
      name: 'materia',
      component: ()=> import ("./views/materia-prima/materia.vue")
    },


    {
      path: '/plus-envase',
      name: 'plus-envase',
      component: ()=> import ("./views/agregar-nuevo-envases/agregar-nuevo-envases.vue")
    },
    {
      path: '/agregarcatalogo/:id',
      name: 'agregarcatalogo',
      component: ()=> import ("./views/agregar-nuevo-catalogo/agregar-nuevo-catalogo.vue")
    },
    {
      path: '/Catalogo',
      name: 'catalogo',
      component: ()=> import ("./views/Catalogo/catalogo.vue")
    },
    {
      path: '/Herramientas',
      name: 'herramientas',
      component: ()=> import ("./views/herramientas/herramientas.vue")
    },
    
    
    
    
    {
      path: '/members/all',
      name: 'ListMembers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Members/ListMembers/ListMembers.vue')
    },
    {
      path: '/members/add',
      name: 'AddMember',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Members/AddMember/AddMember.vue')
    },
    {
      path: '/members/:id',
      name: 'MemberProfile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Members/MemberProfile/MemberProfile.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About/About.vue')
    }
  ]
})
