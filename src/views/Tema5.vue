<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.fondo5.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Trazado de modelos para diseños en marroquinería

    p El proceso de trazado de modelos para la elaboración de bolsos, billeteras, accesorios para la cabeza y correas sigue una metodología estandarizada, basada en principios de construcción geométrica y proporcionalidad. Este enfoque permite definir con precisión las dimensiones y características esenciales de cada diseño, garantizando coherencia y funcionalidad en el desarrollo de productos de marroquinería.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
