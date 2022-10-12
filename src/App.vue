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
      projects: [],
      filteredProjects: [],
      textSearch: "",
    };
  },
  watch: {
    textSearch() {
      this.filteredProjects = this.projects.filter((project) => {
        console.log(project.nombreProyecto.toLowerCase());
        return (
          project.nombreProyecto.toLowerCase().includes(this.textSearch.toLowerCase())
        )
      });
    },
  },
  async mounted() {
    const res = await axios.get(URL);
    this.projects = res.data;
    this.filteredProjects = res.data;
  },
  components: { Project }
});

</script>

<template>
  <h1>Proyectos</h1>
  <input type="text" placeholder="Buscar Proyecto" v-model="textSearch" autofocus>
  <div class="container">
    <Project
      v-for="(project, index) in filteredProjects"
      :key="index"
      :nombreProyecto="project.nombre_corto_l[0].text"
      :porcentajeFinanciacion="project.porc_avance_financiacion"
      :rentabilidadEstimada="project.rentabilidad"
      :localizacion="project.id_caracterizacion.ciudad"
      :fechaInicioRentabilidad="project.fecha_inicio_rentabilidad"
      :index="index"
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
