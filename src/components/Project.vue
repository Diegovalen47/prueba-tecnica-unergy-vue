<script>
export default {
  name: 'Project',
  props: {
    nombreProyecto: {
      type: String,
      required: true
    },
    imagenProyecto: {
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
  }
}
</script>

<template>
  <h1>{{nombreProyecto}}</h1>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
