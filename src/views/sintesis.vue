<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El diseño y patronaje de complementos en marroquinería es un proceso creativo y técnico que permite transformar el cuero y otros materiales en productos funcionales y estéticos. Esta disciplina abarca diversas etapas, desde el diseño y modelado de patrones hasta la selección de materiales e insumos adecuados para la confección. Además, el uso de herramientas visuales, como el mood board, facilita la organización de inspiración, texturas y colores, lo que permite potenciar la creatividad y la innovación en la elaboración de complementos de marroquinería, siguiendo las tendencias del mercado.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El esquema aborda el diseño y patronaje en marroquinería, destacando cuatro áreas clave: diseño y modelado, desarrollo de productos en cuero, herramientas visuales como el mood board e innovación y tendencias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
