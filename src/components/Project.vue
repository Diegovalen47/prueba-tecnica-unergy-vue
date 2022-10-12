<script>
import { defineComponent } from "vue";
import imagenes from "../data";

export default defineComponent({
  name: "Project",
  props: {
    nombreProyecto: {
      type: String,
      required: true
    },
    porcentajeFinanciacion: {
      type: Number,
      required: true
    },
    rentabilidadEstimada: {
      type: Number,
      required: true
    },
    localizacion: {
      type: String,
      required: true
    },
    fechaInicioRentabilidad: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true  
    }
  },
  data() {
    return {
      projects: [],
      projectImages: [
        `amc.webp`,
        `zonaFranca.webp`,
        `tierraAlta.webp`,
        `clinicaSomer.webp`
      ]
    };
  }
});

</script>

<template>
  <div class="card">
    <div class="card-header">
      <img :src="[
          projectImages[index] !== undefined
            ? `/img/${projectImages[index]}`
            : `/img/defaultProjectImage.png`
        ]" 
        alt="imagen proyecto"
      >
    </div>
    <div class="card-body">
      <span class="tag">{{nombreProyecto}}</span>
      <i class="material-icons">location_on</i>
      <i class="material-icons">alarm_on</i>
      <i class="material-icons">monetization_on</i>
      <i class="material-icons">trending_up</i>
      <h4>
        Fecha Inicio rentabilidad {{fechaInicioRentabilidad}}
      </h4>
      <h4>
        Financiacion {{Number(porcentajeFinanciacion).toFixed(2)}}%
      </h4>
      <h4>
        Rentabilidad {{Number(rentabilidadEstimada).toFixed(3)*100}}%
      </h4>
      <h4>
        Localizacion {{localizacion}}
      </h4>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

.card 
  margin: 0.5em
  background-color: #fff
  border-radius: 1.5em
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2)
  overflow: hidden
  width: 20em

.card-header img
  width: 100%
  height: 12em
  object-fit: cover

.card-body
  display: flex
  flex-direction: column
  align-content: flex-start
  justify-content: space-between
  flex-wrap: wrap
  padding: 1.5em
  min-height: 16em

.tag
  background: #cccccc
  background-color: #7d47d4
  border-radius: 50px
  font-size: 1.3em
  margin: 0
  color: #fff
  padding: 0.2em 0.9em
  cursor: pointer
  position: absolute
  transform: translateY(-202px)
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.2)

</style>
