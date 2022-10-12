<script>
import { defineComponent } from "vue";

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
      <span class="tag">{{nombreProyecto}}</span>
      <img :src="[
          projectImages[index] !== undefined
            ? `/img/${projectImages[index]}`
            : `/img/defaultProjectImage.png`
        ]" 
        alt="imagen proyecto"
      >
      <div class="mini-box">
        <span class="span-title">{{(Number(rentabilidadEstimada)*100).toFixed(1)}}% <i class="material-icons">trending_up</i></span>
        <span class="span-description">Rentabilidad</span>
      </div>
    </div>
    <div class="card-body">
      <div class="flex-row">
        <i class="material-icons">location_on</i>
        <div class="flex-col">
          <div class="span-title">{{localizacion}}</div>
          <div class="span-description">Localizacion</div>
        </div>
      </div>
      <div class="flex-row">
        <i class="material-icons">alarm_on</i>
        <div class="flex-col">
          <div class="span-title">{{fechaInicioRentabilidad}}</div>
          <div class="span-description">Fecha Inicio Rentabilidad</div>
        </div>
      </div>
      <div class="flex-row">
        <i class="material-icons">monetization_on</i>
        <div class="flex-col">
          <div class="span-title">{{Number(porcentajeFinanciacion).toFixed(2)}}%</div>
          <div class="span-description">Financiacion</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button type="button" class="participar-btn">Participar</button>
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
  width: 30em

.card-header img
  width: 100%
  height: 18em
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
  font-weight: bold
  margin: 0
  color: #fff
  padding: 0.2em 0.9em
  cursor: pointer
  position: absolute
  translate: 1em 1em
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.2)

.mini-box
  display: flex
  flex-direction: column
  background-color: #fff
  border-radius: 25px
  color: #000
  position: absolute
  translate: 20em -8em
  margin: 1em
  padding: 1em
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.2)

.span-title
  font-size: 1.5em
  font-weight: bold

.span-description
  color: #7d47d4
  font-weight: bold

.footer
  display: flex
  justify-content: center
  align-items: center
  background-color: #7d47d4

.participar-btn
  background-color: #7d47d4
  color: #fff
  border: none
  border-radius: 25px
  padding: 0.5em 1em
  font-size: 1.5em
  font-weight: bold
  cursor: pointer
  margin: 1em 0

.participar-btn:hover
  background-color: #5e2f8a
  transform: scale(1.05)

.flex-row
  display: flex
  flex-direction: row

.flex-col
  display: flex
  flex-direction: column
  align-content: space-between
  justify-content: space-around

.flex-row i
  margin-right: 0.5em
  font-size: 3em

</style>
