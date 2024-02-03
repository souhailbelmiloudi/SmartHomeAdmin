<script setup>
import { ref, onMounted } from 'vue';
import { getDataChanged_document, updateData } from '@/firebase/crudFireBase.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const tableEspacio = "usuarios";
const userId = ref("");
const espacioId = ref("");
const nombreEspacio = ref("");
const ejecutores = ref([]);
const sensores = ref([]);
const espacioIdDeseado = ref("");
const espacios = ref([]);

const obtenerDatosDesdeURL = () => {
    try {
        userId.value = router.currentRoute.value.params.id;
        espacioId.value = router.currentRoute.value.query.espacioId;
    } catch (error) {
        console.error("Error al obtener ID de usuario o espacio desde la URL", error);
    }
};

const recuperarDatosEspacio = (datos) => {
    espacios.value = datos.data().espacios;
    nombreEspacio.value = datos.data().espacios.find((espacio) => espacio.id == espacioId.value).nombre;
    espacioIdDeseado.value = datos.data().espacios.find((espacio) => espacio.id == espacioId.value) || false;
    ejecutores.value = espacioIdDeseado.value.ejecutores;
    sensores.value = espacioIdDeseado.value.sensores;
};

const cambiarvalor = (sensor) => {

    const nuevoValor = prompt("Ingrese el nuevo valor del sensor", sensor.valor);
    if (nuevoValor) {
        sensor.valor = nuevoValor;
        const posicion = espacios.value.findIndex((espacio) => espacio.id == espacioId.value);
        espacios.value[posicion].sensores = sensores.value;
        updateData(userId.value, tableEspacio, { espacios: [...espacios.value] });
    }

};





onMounted(() => {
    obtenerDatosDesdeURL();
    getDataChanged_document(tableEspacio, userId.value, recuperarDatosEspacio);
});
</script>
<style scoped></style>

<template>
    <div class="container mt-5">
        <h1 class="display-4 text-center text-primary mb-4">
            Espacio - {{ nombreEspacio }}
        </h1>

        <div class="row">
            <div class="col-lg-6">
                <div class="card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h2 class="h5 mb-0">Ejecutores</h2>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="ejecutor in ejecutores" :key="ejecutor.id">
                                    <td>{{ ejecutor.id }}</td>
                                    <td>{{ ejecutor.nombre }}</td>
                                    <td :class="ejecutor.estado ? 'text-success' : 'text-danger'">
                                        {{ ejecutor.estado ? "Activo" : "Inactivo" }}
                                    </td>
                                    <td>
                                        <router-link :to="{
                                            name: 'DetalleDispositivo',
                                            params: {
                                                UserId: userId,
                                                espacioId: espacioId,
                                                tipo: 'ejecutores',
                                                ideje: ejecutor.id
                                            }
                                        }" class="btn btn-outline-primary btn-sm">
                                            Ver
                                        </router-link>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h2 class="h5 mb-0">Sensores</h2>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Valor</th>
                                    <th>Unidad de medida</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="sensor in sensores" :key="sensor.id">
                                    <td>{{ sensor.id }}</td>
                                    <td>{{ sensor.nombre }}</td>
                                    <td>
                                        <input type="text" class="form-control" :value="sensor.valor"
                                            @click="cambiarvalor(sensor)" readonly>
                                    </td>
                                    <td>{{ sensor.unidadMedida }}</td>
                                    <td>
                                        <router-link
                                            :to="{ name: 'DetalleDispositivo', params: { UserId: userId, espacioId: espacioId, tipo: 'sensores', ideje: sensor.id } }"
                                            class="btn btn-outline-primary btn-sm">
                                            Ver
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
