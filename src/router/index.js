import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IngresarView from '../components/IngresarView.vue'
import ConsultarView from '../components/ConsultarView.vue'
import EditarView from '../components/EditarView.vue'
import PacientesView from '../components/PacientesView.vue'
import ResultadosPaciente from '../components/ResultadosPaciente.vue'

const routes = [
  {
    path: '/resultados/:id',
    name: 'resultados',
    component: ResultadosPaciente
  },
  {
    path: '/consulta_pacientes',
    name: 'consulta_pacientes',
    component: PacientesView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ingresar',
    name: 'ingresar',
    component: IngresarView
  },
  {
    path: '/consultar',
    name: 'consultar',
    component: ConsultarView
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EditarView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
