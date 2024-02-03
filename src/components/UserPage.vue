<script setup>

import {
    ref,
    onMounted,
} from 'vue'
import {
    getDataChanged_document

} from '@/firebase/crudFireBase.js'
import { useRouter } from 'vue-router';

const router = useRouter();
const tableUser = "usuarios";
const id = ref("");
const espacios = ref([]);
const nombre = ref("");

const obtenerDatosDesdeURL = () => {
    try {
        id.value = router.currentRoute.value.params.id;
    } catch (error) {
        console.error("Error al obtener ID desde la URL", error);
    }
};


/**
 * Función para recuperar los datos de un documento
 * @param {snapshot} datos - Datos del documento
 * 
 */
const recuperarDatosa = (datos) => {
    espacios.value = datos.data().espacios;
    nombre.value = datos.data().name;

};


onMounted(() => {
    obtenerDatosDesdeURL();
    getDataChanged_document(tableUser, id.value, recuperarDatosa);

});







</script>


<template>
    <div>

        <div class="container">
            <h1 class="alert alert-primary text-center">
                Espacios {{ nombre }}
            </h1>
            <table class="table table-striped">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ejecutores</th>
                        <th>Sensores</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="espacio in espacios" :key="espacio.id">
                        <td>{{ espacio.id }}</td>
                        <td>{{ espacio.nombre }}</td>
                        <td>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>{{ espacio.ejecutores.length }}</option>
                                <option v-for="ejecutor in espacio.ejecutores" :key="ejecutor.id">
                                    {{ ejecutor.nombre }}
                                </option>
                            </select>
                        </td>
                        <td>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>{{ espacio.sensores.length }}</option>
                                <option v-for="sensor in espacio.sensores" :key="sensor.id">
                                    {{ sensor.nombre }}
                                </option>
                            </select>
                        </td>
                        <td class="d-flex justify-content-around">
                            <router-link class="btn btn-warning"
                                :to="{ name: 'EspacioPage', params: { id: id }, query: { espacioId: espacio.id } }">
                                Ver espacio
                            </router-link>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style  scoped></style>