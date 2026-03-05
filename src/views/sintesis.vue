<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La producción limpia y la reconversión sostenible constituyen estrategias clave para transformar los sistemas agropecuarios tradicionales en modelos más eficientes, responsables y competitivos. Su implementación integra prevención de la contaminación, uso eficiente de recursos y gestión ambiental, reduciendo impactos sobre suelo, agua y biodiversidad, mientras fortalece las capacidades técnicas y organizativas del sector rural. Este enfoque incorpora criterios ambientales, sociales y económicos en la planificación productiva, promueve la resiliencia frente al cambio climático y las exigencias del mercado, y se apoya en indicadores que permiten evaluar eficiencia, viabilidad y sostenibilidad. En conjunto, impulsa el desarrollo rural sostenible, la competitividad y una cultura de responsabilidad ambiental orientada a la mejora continua. 
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Producción limpia y reconversión sostenible en el sector rural” organiza el contenido en cuatro ejes principales: primero, producción agropecuaria y medio ambiente, que aborda conceptos principales, la problemática ambiental global y el impacto de la actividad agrícola y pecuaria sobre los recursos naturales, la producción limpia y reconversión productiva, incluyendo los principios de la producción limpia en el sector agropecuario, las alternativas de producción más limpia como la agricultura orgánica, la reconversión agrícola y ganadera, y los modelos productivos sostenibles como policultivos, sistemas silvopastoriles y agroforestales; el segundo, sostenibilidad y desarrollo sostenible, que comprende el concepto de sostenibilidad, el desarrollo sostenible en el contexto rural, los Objetivos de Desarrollo Sostenible (ODS) y su relación con el sector agropecuario, así como los indicadores de sostenibilidad rural; el tercer eje, teoría general de sistemas, que integra definiciones, clases de sistemas, componentes, características, modelos sistémicos aplicados a la agroecología y el agroecosistema como sistema complejo; y finalmente, aportes de las comunidades indígenas en el manejo de la biodiversidad, que contempla la cosmovisión indígena y territorio, los sistemas tradicionales de producción, la conservación de semillas nativas, el manejo ancestral del agua y del suelo, la gobernanza territorial y biodiversidad, y el diálogo de saberes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
