<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4
    .titulo-principal.color-acento-contenido.sinespacio 
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    .row.fondo1.align-items-center.p-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left")
          .col-lg-5.fondo2.p-3.col-md-9.p-4
            p.izqtxt El diseño, entendido como una herramienta estratégica, fortalece la competitividad de una organización, su desarrollo implica un proceso estructurado que incluye análisis, planificación y ejecución, con el objetivo de responder eficazmente a las necesidades del usuario, equilibrando lo que busca el cliente con la propuesta de la empresa.
          .col-lg-3.col-md-6.col-10
            img(src='@/assets/curso/img01.png', alt='')
          .col-lg-4
            p Todo proceso de diseño parte de la identificación de una necesidad o problema. A partir de esta premisa, se analiza y procesa la información obtenida, especialmente en estudios de mercado, para guiar el desarrollo del proyecto.
            p Una pregunta clave en este punto es: ¿qué se va a hacer? La respuesta a este interrogante orienta la creación del producto bajo ciertos lineamientos estratégicos.

        
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")           
          .col-lg-12.col-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/0CxQZdA0Jko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: explorando el mundo de la marroquinería



          .py-4


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
