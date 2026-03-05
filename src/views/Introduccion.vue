<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7(data-aos="fade-right")
        p La evolución de los sistemas productivos rurales en las últimas décadas ha estado orientada por modelos centrados en el incremento de la productividad, la eficiencia y la competitividad en los mercados. Si bien estos enfoques permitieron ampliar significativamente la producción agrícola y pecuaria, también generaron externalidades ambientales y sociales, como la contaminación de suelos y fuentes hídricas, la dependencia de agroquímicos, la degradación de ecosistemas y el aumento de costos ambientales no internalizados.  
        p Estas situaciones evidenciaron la necesidad de replantear el paradigma convencional hacia esquemas más integrales, resilientes y sostenibles, especialmente en un contexto marcado por la crisis climática, la presión sobre los recursos naturales y mayores exigencias de sostenibilidad por parte de los mercados.

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0
        .bg3.p-4
          p.mb-0 En este escenario, la producción limpia y la reconversión productiva sostenible se consolidan como estrategias claves para transformar el sector rural, al priorizar la prevención de la contaminación, la eficiencia en el uso de insumos, la innovación tecnológica y la incorporación de criterios ambientales en la gestión productiva.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.svg', alt='')
      .col-lg-4
        img.w-45x.mb-3(src='@/assets/curso/temas/intro/3.svg', alt='')
        p El estudio de estos enfoques, junto con la planificación sostenible, la evaluación de impactos y la implementación de tecnologías limpias, fortalece en el aprendiz competencias analíticas y propositivas para promover sistemas más eficientes, responsables y coherentes con los principios del desarrollo rural sostenible y los objetivos organizacionales.   


</template>

<script>
export default {
  name: 'Introduccion',
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
