const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Se define por defecto el puerto 3000 para el correcto funcionamiento de la aplicación
  devServer: {
    port: 3000
  }
})
