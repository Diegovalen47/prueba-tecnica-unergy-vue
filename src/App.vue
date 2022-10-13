<script>
import { defineComponent } from "vue";
import axios from "axios";
import Project from "./components/Project.vue";

const URL = "/api/landing/project";

export default defineComponent({
  name: "App",
  /* 
    Definimos un arrego para almacenar los proyectos
    otro para los poryectosFiltrados por la busqueda
    y otro campo string par guardar el valor de la busqueda
    todo esto en data() para que Vue se encargue de la reactividad
    y el renderizado de los cambios
    */
  data() {
    return {
      projects: [],
      filteredProjects: [],
      textSearch: "",
    };
  },
  /* 
    En este método mounted (que se ejecuta al iniciar el componente, en este caso la app)
    se hace una petición a la API con ayuda de axios para obtener los proyectos,
    estos se guardan en el arreglo projects y en filtered projects
    Notese el uso de async-await ya que esta peticiones son asincronas
    */
  async mounted() {
    const res = await axios.get(URL);
    this.projects = res.data;
    this.filteredProjects = res.data;
  },
  methods: {
    /* 
      Este método se ejecuta cada vez que se escribe en el input de busqueda
      y se encarga de filtrar los proyectos por el texto ingresado
    */
    Search() {
      /*
        Para no cambiar el arreglo original de proyectos, los afectados por la busqueda
        quedaran en filteredProjects, con la ayude de filter obtenemos un nuevo 
        arreglo filtrado (sin modificar el original) con aqueyos que cumplan la condicion
       */
      this.filteredProjects = this.projects.filter(
        (project) => {
          return (
            String(project.nombre_corto_l[0].text).toLowerCase()
            .includes(String(this.textSearch).toLowerCase())
          )
        }
      );
    },
  },
  components: { Project },
});
</script>

<template>
  <header>
    <h1>Proyectos</h1>
    <input
      type="text"
      placeholder="Buscar Proyecto"
      @keyup="Search()"
      v-model="textSearch"
      autofocus
    />
  </header>

  <div class="container">
    <div v-if="filteredProjects.length > 0" class="container">
      <Project
        v-for="(project, index) in filteredProjects"
        :key="index"
        :nombreProyecto="project.nombre_corto_l[0].text"
        :porcentajeFinanciacion="project.porc_avance_financiacion"
        :rentabilidadEstimada="project.rentabilidad"
        :localizacion="project.id_caracterizacion.ciudad"
        :fechaInicioRentabilidad="project.fecha_inicio_rentabilidad"
        :imagenProjecto="project.project_file[0].nomfile_img"
      />
    </div>
    <div v-else-if="filteredProjects.length === 0 && textSearch !== ''">
      <h2>No se encontraron proyectos</h2>
    </div>
    <!-- Renderizado condicional de un loader mientras se obtienen los datos de la API -->
    <div v-else>
      <svg class="ring" viewBox="25 25 50 50" stroke-width="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  </div>
</template>

<style lang="sass">
/* Variables para colores y medidas que se repiten */
$body-color: #10182f
$background-body-color: #fff
$purple-color: #7d47d4
$uib-size: 10em
$uib-speed: 2s
$uib-color: #000

/* Border radios general para toda la App */
*
  border-sizing: border-box

// Estilos generales para el body, colores, y fuentes
body
  background-color: $background-body-color
  font-family: "Roboto", sans-serif
  color: $body-color

header
  display: flex
  flex-direction: column  
  justify-content: center
  margin: 1em 10em 1em 10em

h1
  text-align: center

input
  width: 100%
  align-items: center
  padding: 0.7em 
  font-size: 1.5em
  border: 1px solid $purple-color
  border-radius: 1em
  box-sizing: border-box

.land-image
  

/* Estilos del contenedor principal:
  utilizando flex y direccion row alineados
  al centro, y el flex-wrap para que
  los items salten a la siguiente fila */
.container
  display: flex
  flex-direction: row
  justify-content: center
  flex-wrap: wrap

  /* Clases para el funcionamiento del loading */
.ring
  height: $uib-size
  width: $uib-size
  vertical-align: middle
  transform-origin: center
  animation: rotate $uib-speed linear infinite
  margin: 10em

.ring circle
  fill: none
  stroke: $uib-color
  stroke-dasharray: 1, 200
  stroke-dashoffset: 0
  stroke-linecap: round
  animation: stretch calc($uib-speed * 0.75) ease-in-out infinite

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
