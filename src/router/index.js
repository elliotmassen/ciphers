import Vue from 'vue'
import VueRouter from 'vue-router'
import Ciphers from '../components/Ciphers.vue'
import Caeser from '../components/Caeser.vue'
import Vigenère from '../components/Vigenère.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Ciphers,
    children: [
      {
        path: '/vigenere',
        name: 'Vigenère',
        component: Vigenère
      },
      {
        path: '/*',
        name: 'Caeser',
        component: Caeser,
        alias: 'caeser'
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
