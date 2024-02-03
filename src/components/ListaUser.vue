<script setup>
import { ref } from 'vue'
import {
 getDataChanged_collection 

} from '@/firebase/crudFireBase.js'

const usuarios = ref([])




const obtenerData = (data) => {
    usuarios.value = []
  data.forEach((doc) => {
    usuarios.value.push({
      id: doc.id,
      name: doc.data().name,
        email: doc.data().email,
        Espacios: doc.data().espacios.length,
      
      
    })
  })
 
}

getDataChanged_collection('usuarios', obtenerData)





</script>

<template>
     <div class="container">
      <h1 class="alert alert-primary text-center">
        Lista de usuarios
      </h1>
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Espacios</th>
            <th>Acciones</th>
           
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.Espacios }}</td>
            <td>
                <router-link class="btn btn-warning"
                    :to="{ name: 'UserPage', params: { id: usuario.id } }"
                   
                >
                    Ver usuario
                </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
    
</template>


<style scoped>

</style>