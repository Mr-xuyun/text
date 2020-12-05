import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import nextTick from "./components/nextTick.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nextTick',
      name: 'nextTick',
      component: nextTick
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:"/transition",
      name:"transition",
      component:()=>import(/* webpackChunkName :"transition" */ './components/transition.vue'),

    }

  ]
})
