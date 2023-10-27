import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IngresarView from '../components/IngresarView.vue'
import ConsultarView from '../components/ConsultarView.vue'
import EditarView from '../components/EditarView.vue'
import PacientesView from '../components/PacientesView.vue'
import ResultadosPaciente from '../components/ResultadosPaciente.vue'
import AgregarView from '../components/AgregarView.vue'

const routes = [
  {
    // Ruta que dirige al formulario para ingresar la informacion y el resultado de un nuevo paciente
    path: '/agregar/',
    name: 'agregar',
    component: AgregarView
  },
  {
    // Ruta que dirige al resultado del paciente a quien corresponda el id
    path: '/resultados/:id',
    name: 'resultados',
    component: ResultadosPaciente
  },
  {
    // Login para el paciente ingresar a consultar sus resultados con el número del documento
    path: '/consulta_pacientes',
    name: 'consulta_pacientes',
    component: PacientesView
  },
  {
    // Ruta para volver a la pagina de inicio 
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // Login para el especialista registrado en la base de datos
    path: '/ingresar',
    name: 'ingresar',
    component: IngresarView
  },
  {
    // Ruta para el especialista ver todos los pacientes con resultados 
    path: '/consultar',
    name: 'consultar',
    component: ConsultarView
  },
  {
    // Ruta para el formulario de editar la información de un paciente, solo lo puede hacer el especialista
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
