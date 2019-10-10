import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import envase from "./views/Envases/envase.vue"

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
      component: ()=> import ("./views/Envases/envase")
    },
   
    {
      path: '/plus-envase',
      name: 'plus-envase',
      component: ()=> import ("./views/agregar-nuevo-envases/agregar-nuevo-envases.vue")
    },
    {
      path: '/plus-envase',
      name: 'agregar-nuevo-envases',
      component: ()=> import ("./views/agregar-nuevo-envases/agregar-nuevo-envases.vue")
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
