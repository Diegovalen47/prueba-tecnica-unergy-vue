<script>

import { defineComponent } from "vue";
import axios from "axios";
import Project from "./components/Project.vue";

const URL = "/api/landing/project";

const IMAGE_URL = "./assets/defaultProjectImage.png";

export default defineComponent({
  name: "App",
  data() {
    return {
      projects: []
    };
  },
  async mounted() {
    const res = await axios.get(URL);
    this.projects = res.data;
    console.log(this.projects);
  },
  components: { Project },
});

</script>

<template>
  <div class="container">
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :nombreProyecto="project.nombre_corto_l[0].text"
      :porcentajeFinanciacion="project.porc_avance_financiacion"
      :rentabilidadEstimada="project.rentabilidad"
      :localizacion="project.id_caracterizacion.ciudad"
      :fechaInicioRentabilidad="project.fecha_inicio_rentabilidad"
    />
  </div>
</template>

<style lang="sass">

/* Border radios general para toda la App */
*
  box-sizing: border-box

// Estilos generales para el body, colores, y fuentes
body
  background-color: #f7f8fc
  font-family: "Roboto", sans-serif
  color: #10182f

/* Estilos del contenedor principal:
  utilizando flex y direccion row alineados
  al centro, y el flex-wrap para que
  los items salten a la siguiente fila */
.container
  display: flex
  flex-direction: row
  justify-content: center
  flex-wrap: wrap

</style>
