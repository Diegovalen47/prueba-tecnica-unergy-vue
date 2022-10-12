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
        return project.nombreProyecto
          .toLowerCase()
          .includes(this.textSearch.toLowerCase());
      });
    },
  },
  async mounted() {
    const res = await axios.get(URL);
    this.projects = res.data;
    this.filteredProjects = res.data;
  },
  components: { Project },
});
</script>

<template>
  <h1>Proyectos</h1>
  <input
    type="text"
    placeholder="Buscar Proyecto"
    v-model="textSearch"
    autofocus
  />
  <div class="container">
    <Project
      v-if="filteredProjects.length > 0"
      v-for="(project, index) in filteredProjects"
      :key="index"
      :nombreProyecto="project.nombre_corto_l[0].text"
      :porcentajeFinanciacion="project.porc_avance_financiacion"
      :rentabilidadEstimada="project.rentabilidad"
      :localizacion="project.id_caracterizacion.ciudad"
      :fechaInicioRentabilidad="project.fecha_inicio_rentabilidad"
      :index="index"
    />
    <div v-else>
      <svg class="ring" viewBox="25 25 50 50" stroke-width="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
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

  /* Clases par el funcionamiento del loading */
.ring 
  --uib-size: 10em
  --uib-speed: 2s
  --uib-color: black
  
  height: var(--uib-size)
  width: var(--uib-size)
  vertical-align: middle
  transform-origin: center
  animation: rotate var(--uib-speed) linear infinite
  margin: 10em

.ring circle
  fill: none
  stroke: var(--uib-color)
  stroke-dasharray: 1, 200
  stroke-dashoffset: 0
  stroke-linecap: round
  animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite

@keyframes rotate
  100% 
    transform: rotate(360deg)

@keyframes stretch
  0% 
    stroke-dasharray: 1, 200
    stroke-dashoffset: 0

  50% 
    stroke-dasharray: 90, 200
    stroke-dashoffset: -35px

  100% 
    stroke-dashoffset: -124px

</style>
