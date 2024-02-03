import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/SmartHomeAdmin',
      name: 'listaUser',
      component: () => import('../components/ListaUser.vue')
    },
    {
      path: '/SmartHomeAdmin/user/:id',
      name: 'UserPage',
      component: () => import('../components/UserPage.vue')
    },
    {
      path: '/SmartHomeAdmin/espacio/:id',
      name: 'EspacioPage',
      component: () => import('../components/EspacioPage.vue')
    },
     {
    path: '/SmartHomeAdmin/detalle-dispositivo/:UserId/:espacioId/:tipo/:ideje',
    name: 'DetalleDispositivo',
    component: () => import('../components/DetalleDispositivo.vue')
  },
   
 
  ]
})



export default router
