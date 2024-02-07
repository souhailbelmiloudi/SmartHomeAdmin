<script setup>
import { ref, onMounted } from 'vue';
import { getDataChanged_document } from '@/firebase/crudFireBase.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const espacioId = ref("");
const tipo = ref("");
const id = ref("");
const ideje = ref("");
const ejecutores = ref([]);
const despositivoDesado = ref("");


const obtenerDatosDesdeURL = () => {
    try {

        id.value = router.currentRoute.value.params.UserId
        espacioId.value = router.currentRoute.value.params.espacioId;
        tipo.value = router.currentRoute.value.params.tipo;
        ideje.value = router.currentRoute.value.params.ideje;
   
    } catch (error) {
        console.error("Error al obtener parámetros desde la URL", error);
    }
};

 const recuperarDatosEspacio = (datos) => {
    ejecutores.value = datos.data().espacios.find((espacio) => espacio.id == espacioId.value)[tipo.value];
    despositivoDesado.value = ejecutores.value.find((dispositivo) => dispositivo.id == ideje.value) || false;
 };

onMounted(() => {
    obtenerDatosDesdeURL();
     getDataChanged_document('usuarios', id.value, recuperarDatosEspacio);
});
</script>


<template>
    <div>
         <div class="container" v-if="despositivoDesado === false">
                <h1 class="alert alert-danger text-center">
                    Dispositivo no encontrado
                </h1>
        </div>
        <div v-else>

        

        <div class="container" v-if="tipo === 'ejecutores'">
            <h1 class="alert alert-primary text-center">
                Dispositivo {{ despositivoDesado.nombre }}
            </h1>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title
                            ">
                                {{ despositivoDesado.nombre }}
                            </h5>
                            <p class="card-text">
                                {{ despositivoDesado.estado ? 'Encendido' : 'Apagado' }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
            <div class="container" v-else-if="tipo === 'sensores'">
                <h1 class="alert alert-primary text-center">
                    Sensor {{ despositivoDesado.nombre }}
                </h1>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title
                            ">
                                    {{ despositivoDesado.nombre }}
                                </h5>
                                <p class="card-text">
                                    {{ despositivoDesado.valor }} {{ despositivoDesado.unidadMedida }}
                                </p>
                                 
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>

</div>



</template>



<style lang="scss" scoped></style>