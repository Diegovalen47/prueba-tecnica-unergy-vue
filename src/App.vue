<script >
import { defineComponent } from 'vue';
import axios from "axios";
import Project from './components/Project.vue';

const URL = "/api/landing/project";

const IMAGE_URL = "./assets/defaultProjectImage.png"
export default defineComponent({
    name: "App",
    data() {
        return {
            projects: [],
        };
    },
    async mounted() {
        const res = await axios.get(URL);
        this.projects = res.data;
        console.log(this.projects);
    },
    components: { Project }
});
</script>

<template>
  <div class="container">
    <Project v-for="(project, index) in projects" :key="index" :nombreProyecto="project.nombre_corto_l[0].text" :imagenProyecto="IMAGE_URL" :porcentajeFinanciacion="project.porc_avance_financiacion" :rentabilidadEstimada="project.rentabilidad" :localizacion="project.id_caracterizacion.ciudad
" :fechaInicioRentabilidad="project.fecha_inicio_rentabilidad" />
  </div>
</template>

<style lang="sass">
  $red-color: #f00
  h1 
    color: $red-color

  .container
    display: flex
    flex-wrap: wrap
    justify-content: space-between
  
  
</style>
