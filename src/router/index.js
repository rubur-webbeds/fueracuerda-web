import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from "../components/Content.vue";
import Sector from "../components/Sector.vue";
import Calas from "../components/Integrations/Calas.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Content
  },
  {
    path: '/sector/:id',
    component: Sector
  },
  {
    path: '/calas',
    component: Calas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
