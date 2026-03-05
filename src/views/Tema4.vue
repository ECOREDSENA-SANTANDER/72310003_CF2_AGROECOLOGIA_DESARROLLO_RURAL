<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Aportes de las comunidades indígenas en el manejo de la biodiversidad 

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/1.png', alt='')
      .col-lg-9
        p Los aportes de las comunidades indígenas se fundamentan en conocimientos ancestrales construidos a partir de una relación armónica con la naturaleza y han contribuido históricamente a la conservación de ecosistemas, junto con el uso sostenible de los recursos naturales. 
        .row.justify-content-center.align-items-end
          .col-lg-5.pe-lg-0.col-md-6.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t4/2.svg', alt='')
          .col-lg-7.ps-lg-0
            .bg4.p-4
              p.mb-0 Cosmovisión indígena y territorio: hace referencia a la forma integral en que los pueblos indígenas comprenden, interpretan y se relacionan con el mundo, donde el territorio no es solo un espacio físico o productivo, sino un ser vivo que integra dimensiones espirituales, culturales, sociales y ambientales. Desde esta perspectiva, la tierra no es un recurso explotable, sino un sujeto de respeto y cuidado, base de la identidad colectiva y de la continuidad cultural. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t4/4.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 En la cosmovisión indígena, el territorio está profundamente ligado a la memoria ancestral, a los lugares sagrados, a los ciclos naturales y a las prácticas tradicionales de producción. Elementos como el agua, el bosque, las montañas y los animales poseen un significado simbólico y espiritual que orienta las normas de uso y conservación. Esta relación promueve un manejo equilibrado de los ecosistemas, basado en principios como la reciprocidad, la armonía y la complementariedad entre los seres humanos y la naturaleza.
        p En países como Colombia, los pueblos indígenas conciben el territorio como espacio de vida y gobierno propio, donde se desarrollan planes de vida, prácticas productivas tradicionales y sistemas de gobernanza comunitaria. 

    p.mb-4 Además, la cosmovisión indígena influye directamente en los sistemas tradicionales de producción, el manejo ancestral del agua y del suelo, y la conservación de semillas nativas. El conocimiento ecológico tradicional, transmitido de generación en generación, se basa en la observación detallada de los ciclos climáticos, la biodiversidad y las dinámicas del territorio. 

    .bg5.mb-5
      .p-4
        p.mb-0 A continuación, se presenta un pódcast que amplía la temática sobre el impacto de las comunidades indígenas: 
      img(src='@/assets/curso/temas/t4/podcast.png', alt='')
      .p-4
        .bg-white.tarjeta.p-4
          TarjetaAudio.color-acento-botones(
            texto="Aportes de las comunidades indígenas de Colombia en la conservación y manejo sostenible de la biodiversidad."
            :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Sistemas tradicionales de producción 

    p En el contexto colombiano, pueblos indígenas han desarrollado sistemas como la “chagra” y el manejo integral del territorio, que permiten conservar la biodiversidad, mantener la fertilidad del suelo y fortalecer la seguridad alimentaria. 

    .row.bgc-1.align-items-center.p-2.p-md-3.p-lg-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center
            .col-lg-12
              .tarjeta.tarjeta--blanca.p-4
                PasosB.color-acento-botones
                  .row.justify-content-center.align-items-center(titulo="Chagras amazónicas")
                    .col-lg-5.col-11
                      p Las chagras amazónicas son sistemas tradicionales de producción agrícola practicados por pueblos indígenas de la Amazonía, especialmente en regiones como la Amazonía colombiana. 
                      p Consisten en parcelas de cultivo ubicadas dentro del bosque, donde se siembran múltiples especies de manera asociada, imitando la diversidad natural del ecosistema. No son monocultivos, sino sistemas diversificados y sostenibles. 
                    .col-lg-6.col-11
                      img(src='@/assets/curso/temas/t4/pasos1-1.png', alt='')
                  .row.justify-content-center.align-items-center(titulo="Milpas mesoamericanas")
                    .col-lg-5.col-11
                      p Las milpas mesoamericanas son sistemas agrícolas tradicionales de origen indígena practicados desde tiempos prehispánicos en regiones de Mesoamérica, especialmente en países como México y Guatemala.
                      p La palabra #[em milpa] proviene del #[em náhuatl milli] (parcela sembrada) y pan (sobre), y hace referencia a un sistema de policultivo, no a un solo cultivo.                        
                    .col-lg-6.col-11
                      img(src='@/assets/curso/temas/t4/pasos1-2.png', alt='')
                  .row.justify-content-center.align-items-center(titulo="Terrazas andinas")
                    .col-lg-5.col-11
                      p Las terrazas andinas son sistemas agrícolas tradicionales desarrollados por los pueblos indígenas de la cordillera de los Andes para cultivar en zonas montañosas con fuertes pendientes. 
                      p Consisten en la construcción de plataformas o escalones artificiales en las laderas de las montañas, sostenidos por muros de piedra, que permiten crear superficies planas aptas para el cultivo. Este sistema fue ampliamente perfeccionado por civilizaciones como el Imperio Inca en territorios actuales de Perú y Bolivia. 
                    .col-lg-6.col-11
                      img(src='@/assets/curso/temas/t4/pasos1-3.png', alt='')
                


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Conservación de semillas nativas 

    .row.justify-content-center.mb-4
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t4/5.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 Las comunidades indígenas preservan semillas criollas adaptadas a las condiciones climáticas y edáficas locales, lo que contribuye a mantener la diversidad genética, fortalecer la resiliencia de los cultivos y garantizar la soberanía alimentaria de los territorios. 
    
    p.mb-4 Manejo ancestral del agua y del suelo: corresponde al conjunto de conocimientos y prácticas tradicionales desarrolladas por comunidades indígenas y campesinas para conservar, proteger y utilizar de manera sostenible los recursos hídricos y el suelo, asegurando la producción de alimentos sin generar degradación ambiental. 

    .row.justify-content-center.mb-5
      .col-lg-4.pe-lg-0.mb-3.mb-lg-0(data-aos="fade-right")
        .bg1.h-100.p-4
          p Prácticas tradicionales más representativas: 
          ul.lista-ul--color.fa-lista.mb-0
            li.mb-1
              i.fas.fa-spa
              span.mb-0 Siembra en terrazas. 
            li.mb-1
              i.fas.fa-spa
              span.mb-0 Canales de drenaje natural. 
            li.mb-1
              i.fas.fa-spa
              span.mb-0 Rotación de cultivos. 
            li.mb-0
              i.fas.fa-spa
              span.mb-0 Uso de abonos orgánicos. 
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/6.png', alt='')
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        img.w-55x.mb-3(src='@/assets/curso/temas/t4/7.svg', alt='')
        p.mb-0 Estas técnicas permiten reducir la erosión, conservar la humedad, mejorar la fertilidad del suelo y mantener la estabilidad productiva del agroecosistema a largo plazo. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Gobernanza territorial y biodiversidad 

    p Procesos mediante los cuales comunidades, instituciones y autoridades gestionan el territorio y sus recursos naturales de manera participativa, sostenible y con enfoque de conservación. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/8.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p En sí, la gobernanza territorial son el conjunto de normas, acuerdos, prácticas y formas de organización que regulan el uso del suelo, el agua, los bosques y la biodiversidad dentro de un territorio donde se involucra: 
        ul.lista-ul--color.fa-lista
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Participación comunitaria en la toma de decisiones. 
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Reconocimiento de derechos territoriales. 
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Planificación del uso del suelo. 
          li
            i.fas.fa-spa
            span.mb-0 Resolución de conflictos socioambientales. 
        p En el caso de pueblos indígenas en Colombia, la gobernanza territorial se ejerce a través de figuras como los resguardos y planes de vida comunitarios. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-5
        p La relación de la gobernanza territorial con la biodiversidad es que una buena gobernanza contribuye a: 
        ul.lista-ul--color.fa-lista
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Conservar ecosistemas estratégicos (bosques, páramos, humedales). 
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Proteger especies nativas. 
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Promover sistemas productivos sostenibles. 
          li.mb-1
            i.fas.fa-spa
            span.mb-0 Garantizar el manejo adecuado del agua y el suelo. 
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/9.svg', alt='')
      .col-lg-4
        p Por ejemplo, territorios indígenas en la Amazonía han demostrado menores tasas de deforestación cuando existe control y organización comunitaria. 
        p La gobernanza territorial fortalece, la sostenibilidad ambiental, la autonomía de las comunidades, la seguridad y soberanía alimentaria y la resiliencia frente al cambio climático. 
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t4/10.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 En síntesis, la gobernanza territorial es clave para proteger la biodiversidad, ya que integra la gestión ambiental con la participación social y el respeto por el conocimiento ancestral. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Diálogo de saberes 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-md-2.col-3
        img(src='@/assets/curso/temas/t4/11.png', alt='')
      .col-lg-10.col-md-10.col-9
        p.mb-0 Es un proceso de intercambio horizontal, participativo y respetuoso entre diferentes formas de conocimiento, particularmente entre el saber científico y los saberes tradicionales, comunitarios o ancestrales. Parte del reconocimiento de que ningún conocimiento es superior a otro; por el contrario, cada uno aporta perspectivas complementarias para comprender la realidad y proponer soluciones a problemáticas sociales, productivas y ambientales. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Este enfoque se fundamenta en la escucha activa, el respeto por la identidad cultural y la valoración del contexto territorial. A través del diálogo de saberes se construyen aprendizajes colectivos, integrando la experiencia acumulada por campesinos e indígenas (basada en la práctica y la tradición) con los aportes técnicos, metodológicos y analíticos de la academia y las instituciones. 
        p El diálogo de saberes facilita la articulación de conocimientos sobre manejo tradicional de semillas, calendarios agrícolas, conservación de suelos y biodiversidad, con herramientas científicas como análisis fisicoquímicos del suelo, estudios de productividad o evaluaciones ambientales. 
        .bg3.p-4
          p.mb-2 Ejemplo colombiano: 
          p.mb-0.px-2 En la región de la Amazonía colombiana, comunidades indígenas han trabajado conjuntamente con universidades y entidades ambientales para fortalecer sistemas productivos sostenibles. Allí, el conocimiento ancestral sobre ciclos de lluvia, especies nativas y uso medicinal de plantas se integra con investigaciones técnicas sobre conservación de suelos y manejo forestal, generando estrategias productivas que protegen la biodiversidad y, al mismo tiempo, mejoran la seguridad alimentaria y los ingresos comunitarios. 
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/12.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-7.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/13.png', alt='')
      .col-lg-9(data-aos="fade-left")
        p Un enfoque integral es necesario para transformar los sistemas agropecuarios tradicionales hacia modelos sostenibles, articulando producción limpia, reconversión productiva, sostenibilidad rural y teoría general de sistemas. Se analiza la relación entre producción agropecuaria y medio ambiente, los impactos sobre los recursos naturales y las estrategias de mitigación mediante buenas prácticas, optimización de insumos y mejora continua. Integra las dimensiones ambiental, social, económica y cultural del desarrollo sostenible, vinculándolas con los Objetivos de Desarrollo Sostenible (ODS) y con indicadores que permiten evaluar la viabilidad y resiliencia de los sistemas rurales.
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t4/14.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 Desde el enfoque sistémico, se concibe el agroecosistema como un sistema complejo compuesto por entradas, procesos, salidas y retroalimentación, influido por su entorno y caracterizado por interdependencia, adaptabilidad y equifinalidad. Asimismo, se reconoce el aporte de los saberes ancestrales, la gobernanza territorial y el diálogo de saberes como elementos clave para la conservación de la biodiversidad y la sostenibilidad integral.  



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
