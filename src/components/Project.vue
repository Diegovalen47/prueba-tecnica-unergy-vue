<script>

export default {
  name: 'Project',
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
  }
}

</script>

<template>
  <div class="card">
    <div class="card-header">
      <img src="../assets/defaultProjectImage.png" alt="imagen proyecto">
    </div>
    <div class="card-body">
      <span class="tag tag-teal">{{nombreProyecto}}</span>
      <h4>
        {{fechaInicioRentabilidad}}
      </h4>
      <p>
        {{localizacion}}
      </p>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

.card 
  margin: 10px
  background-color: #fff
  border-radius: 10px
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2)
  overflow: hidden
  width: 340px

.card-header img
  width: 100%
  height: 200px
  object-fit: cover

.card-body
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  padding: 20px
  min-height: 250px

.tag
  background: #cccccc
  border-radius: 50px
  font-size: 12px
  margin: 0
  color: #fff
  padding: 2px 10px
  text-transform: uppercase
  cursor: pointer

.tag-teal
  background-color: #47bcd4

</style>
