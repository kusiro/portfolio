import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import(/*webpackChunckName: "Intro"*/'../pages/about.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/*webpackChunckName: "About"*/'../pages/about.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import(/*webpackChunckName: "Projects"*/'../pages/projects.vue')
  },
  {
    path: '/Work-Experience',
    name: 'Work-Experience',
    component: () => import(/*webpackChunckName: "Work"*/'../pages/work.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
