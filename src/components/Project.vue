<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Project",
  /* 
    Pasamos por parámetro al componente los 
    datos del proyecto que nos interesan
    */
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
    imagenProjecto: {
      type: String,
      required: true
    }
  },
  /* 
  Se crea un arreglo de imagenes de proyectos genéricas
  que se escogen aleatoriamente para mostrar en el componente,
  esto debido a todas las url de la API que son de imagenes llevan
  a un 404
  */
  data() {
    return {
      projectImages: [
        `amc.webp`,
        `zonaFranca.webp`,
        `tierraAlta.webp`,
        `clinicaSomer.webp`,
        `defaultProjectImage.png`
      ]
    };
  }
});

</script>

<template>
  <div class="card">
    <div class="card-header">
      <span class="tag">{{nombreProyecto}}</span>
      <!-- Se escoge aleatoriamente una imagen del arreglo, para mostrar -->
      <!-- De todas formas en el alt de la imagen, coloco la url de la imagen
           a pesar de que una buena practica sería colocar algo descriptivo de
           la imagen en este campo -->
      <img 
        :src="`/img/${projectImages[Math.floor(Math.random() * projectImages.length)]}`"
        :alt="imagenProjecto"
      >
      <div class="mini-box">
        <!-- Para los íconos hacemos uso de material icons -->
        <!-- La retabilidad al estar en decimales, se convierte a porcentaje con
             tomando solamente un decimal -->
        <span class="span-title-one">{{(Number(rentabilidadEstimada)*100).toFixed(1)}}% <i class="material-icons">trending_up</i></span>
        <span class="span-description">Rentabilidad</span>
      </div>
    </div>
    <div class="card-body">
      <div class="flex-row">
        <i class="material-icons">location_on</i>
        <div class="flex-col">
          <div class="span-title">{{localizacion}}</div>
          <div class="span-description">Localización</div>
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
          <!-- Del porcentaje de financiacion tomamos solo 2 decimales -->
          <div class="span-title">{{Number(porcentajeFinanciacion).toFixed(2)}}%</div>
          <div class="span-description">Financiación</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button type="button" class="participar-btn">Participar</button>
    </div>
  </div>
</template>

<style lang="sass">
/* Declaracion de variables generales */
$white-color: #fff
$shadow: rgba(0, 0, 0, 0.2)
$purple-color: #7d47d4
$purple-darker-color: #5e2f8a
$black-color: #000
/* Estilos generales de la carta */
.card 
  margin: 0.5em
  background-color: $white-color
  border-radius: 1.5em
  box-shadow: 0 2px 20px $shadow
  overflow: hidden
  width: 30em

.card:hover
  transform: scale(1.02)

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
  background-color: $purple-color
  border-radius: 50px
  font-size: 1.7em
  font-weight: bold
  margin: 0
  color: $white-color
  padding: 0.2em 0.9em
  cursor: pointer
  position: absolute // posicion absoluta para ubicarla sobre la imagen
  translate: 1em 1em
  box-shadow: 0 2px 40px $black-color

.mini-box
  display: flex
  flex-direction: column
  background-color: $white-color
  border-radius: 25px
  color: #000
  position: absolute // posicion absoluta para ubicarla sobre la imagen
  translate: 18em -8em
  margin: 1em
  padding: 1em
  box-shadow: 0 2px 40px $black-color

.span-title-one
  font-size: 1.5em
  font-weight: bold
  text-align: center

.span-title
  font-size: 1.5em
  font-weight: bold

.span-description
  color: $purple-color
  font-size: 1.2em
  font-weight: bold

.footer
  display: flex
  justify-content: center
  align-items: center
  background-color: $purple-color

.participar-btn
  background-color: $purple-color
  color: $white-color
  border: none
  border-radius: 25px
  padding: 0.5em 1em
  font-size: 1.5em
  font-weight: bold
  cursor: pointer
  margin: 1em 0

.participar-btn:hover
  background-color: $purple-darker-color
  transform: scale(1.05)

/* 
  Clases flex con el fin de ubicar 
  los datos detro del body de la carta 
  */
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
