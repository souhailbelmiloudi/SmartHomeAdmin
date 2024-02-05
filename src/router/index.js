import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listaUser',
      component: () => import('../components/ListaUser.vue')
    },
    {
      path: '/user/:id',
      name: 'UserPage',
      component: () => import('../components/UserPage.vue')
    },
    {
      path: '/espacio/:id',
      name: 'EspacioPage',
      component: () => import('../components/EspacioPage.vue')
    },
     {
    path: '/detalle-dispositivo/:UserId/:espacioId/:tipo/:ideje',
    name: 'DetalleDispositivo',
    component: () => import('../components/DetalleDispositivo.vue')
  },
   
 
  ]
})



export default router
