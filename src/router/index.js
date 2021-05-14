import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '导航1',
    component: Index,
    redirect: "/log",
    children:[
      {
        path: '/log',
        name: 'Log',
        component: () => import('../views/PageOne.vue')
      }
    ]
  },
  {
    path:'/navigation',
    name:'导航2',
    component: Index,
    children:[
      {
        path:'/book',
        name:'Book',
        component: () => import('../views/Book.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
