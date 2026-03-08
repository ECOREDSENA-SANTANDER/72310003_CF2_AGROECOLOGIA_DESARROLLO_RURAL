<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sostenibilidad y desarrollo sostenible 

    p La sostenibilidad y el desarrollo sostenible orientan la planificación de sistemas productivos que equilibren crecimiento económico, bienestar social y protección ambiental.  

    .bloque-texto-g.bloque-texto-g--inverso.bg3.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 La sostenibilidad se refiere a la capacidad de satisfacer las necesidades presentes sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas. 

    p Este concepto fue ampliamente difundido por el Informe Brundtland presentado por la Comisión Mundial sobre el Medio Ambiente y el Desarrollo en 1987. 

    p.mb-5 La sostenibilidad implica equilibrio entre dimensiones ecológicas, sociales, económicas y culturales. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Dimensiones de la sostenibilidad 

    p Las dimensiones de la sostenibilidad permiten analizar el desarrollo desde una visión integral que articula aspectos ambientales, sociales y económicos. Su comprensión es clave para diseñar estrategias productivas equilibradas y responsables en el contexto rural. 

    .row.justify-content-center.mb-4
      .col-md-6.col-lg-3.col-10.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.mh-350.arriba.bg4(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5.text-center
              h5 Dimensión ambiental
              p Protección de recursos naturales y biodiversidad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj1-1.png')})`}")
      .col-md-6.col-lg-3.col-10.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.mh-350.arriba.bg4
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5.text-center
              h5 Dimensión social
              p Equidad, inclusión y bienestar comunitario. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj1-2.png')})`}")
      .col-md-6.col-lg-3.col-10.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.mh-350.arriba.bg4
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5.text-center
              h5 Dimensión económica
              p Viabilidad productiva y estabilidad financiera.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj1-3.png')})`}")
      .col-md-6.col-lg-3.col-10.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.mh-350.arriba.bg4
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5.text-center
              h5 Dimensión cultural
              p Respeto por tradiciones y saberes locales.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj1-4.png')})`}")


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Desarrollo sostenible en el contexto rural 

    .row.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        p En el ámbito rural, el desarrollo sostenible implica: 
        ul.lista-ul--color.color-primario.fa-lista.mb-4
          li
            i.fas.fa-check
            span.mb-0 Producción agropecuaria responsable. 
          li
            i.fas.fa-check
            span.mb-0 Conservación de ecosistemas estratégicos. 
          li
            i.fas.fa-check
            span.mb-0 Fortalecimiento de la economía campesina. 
          li
            i.fas.fa-check
            span.mb-0 Reducción de pobreza rural. 
        p El desarrollo rural sostenible requiere planificación territorial participativa y enfoque sistémico. 
      .col-lg-7.col-md-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/2.png', alt='')


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Objetivos de Desarrollo Sostenible (ODS) y sector agropecuario 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-5(data-aos="fade-left")
        p En el año 2015, la Organización de las Naciones Unidas (ONU) adoptó la Agenda 2030 para el desarrollo sostenible, estableciendo 17 Objetivos de Desarrollo Sostenible (ODS) orientados a erradicar la pobreza, proteger el planeta y garantizar prosperidad para todos.  
        p El sector agropecuario desempeña un papel estratégico en el cumplimiento de los ODS establecidos por la ONU, ya que su actividad incide directamente en la reducción de la pobreza, la seguridad alimentaria, la gestión ambiental y la acción climática. Su impacto puede ser positivo o negativo dependiendo del modelo productivo que se implemente; por ello, la transición hacia enfoques agroecológicos resulta clave. 

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg2")
          .row(titulo="ODS 1")
            .col-11
              p Fin de la pobreza, la agricultura campesina y familiar constituye una fuente principal de ingresos para millones de hogares rurales.  
              p Cuando se fortalecen cadenas cortas de comercialización, acceso a tierra, asistencia técnica y asociatividad, se mejora la estabilidad económica, se reducen brechas territoriales y se dinamizan economías locales.  
              p.mb-0 El desarrollo rural sostenible permite que el campo no sea sinónimo de exclusión, sino de oportunidades productivas. 
          .row(titulo="ODS 2")
            .col-11
              p Hambre cero, el sector agropecuario es fundamental para garantizar la disponibilidad, el acceso y la calidad de los alimentos.  
              p.mb-0 La diversificación de cultivos, el rescate de semillas nativas y los sistemas agroecológicos contribuyen a dietas más nutritivas y culturalmente apropiadas. No se trata solo de producir más, sino de producir mejor, fortaleciendo la soberanía y la seguridad alimentaria. 
          .row(titulo="ODS 6")
            .col-11
              p Agua limpia y saneamiento, las prácticas agrícolas sostenibles promueven el uso eficiente del recurso hídrico mediante riego tecnificado, cosecha de agua lluvia y protección de nacimientos.  
              p.mb-0 Además, la reducción de agroquímicos evita la contaminación de fuentes superficiales y subterráneas, protegiendo ecosistemas estratégicos y comunidades rurales. 
          .row(titulo="ODS 12")
            .col-11
              p.mb-0 Producción y consumo responsables, la agroecología impulsa sistemas productivos que minimizan residuos, aprovechan insumos locales y fomentan mercados de proximidad. Esto reduce la huella ambiental, fortalece circuitos cortos de comercialización y promueve consumidores más conscientes del origen y el impacto de los alimentos. 
          .row(titulo="ODS 13")
            .col-11
              p.mb-0 Acción por el clima, el sector agropecuario puede convertirse en aliado de la mitigación y adaptación climática. Sistemas agroforestales, conservación de suelos y diversificación productiva aumentan la captura de carbono y la resiliencia frente a sequías, inundaciones o variabilidad climática. 
          .row(titulo="ODS 15")
            .col-11
              p.mb-0 Vida de ecosistemas terrestres se vincula directamente con la gestión del suelo, los bosques y la biodiversidad. Modelos agroecológicos conservan polinizadores, microorganismos del suelo y especies nativas, evitando procesos de degradación y deforestación. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/4.png', alt='')

    .row.justify-content-center
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p.mb-0 El sector agropecuario no solo produce alimentos, sino que tiene una responsabilidad estructural en el desarrollo sostenible. Cuando se orienta bajo principios agroecológicos y de gobernanza territorial, se convierte en un eje articulador entre desarrollo económico, equidad social y conservación ambiental. 


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Indicadores de sostenibilidad rural   

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg3.tarjeta.p-4.h-100
          p.mb-0 Los indicadores constituyen herramientas fundamentales para evaluar, monitorear y mejorar el desempeño de los sistemas productivos desde una perspectiva integral de sostenibilidad. En el ámbito agropecuario, su importancia radica en que permiten analizar de manera objetiva si las prácticas implementadas contribuyen al equilibrio entre productividad, conservación ambiental, bienestar social y viabilidad económica. En este sentido, los indicadores se convierten en instrumentos clave para la toma de decisiones, la planificación estratégica y la formulación de políticas públicas orientadas hacia modelos de desarrollo sostenible. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/5.png', alt='')
      .col-lg-4
        img.w-95x.mb-3(src='@/assets/curso/temas/t2/6.svg', alt='')
        p La sostenibilidad, entendida desde el enfoque del desarrollo propuesto por la Organización de las Naciones Unidas (ONU), implica satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas. En coherencia con este principio, los sistemas agropecuarios deben evaluarse no solo por su productividad inmediata, sino por su capacidad de mantenerse en el tiempo sin degradar los recursos naturales, sin generar exclusión social y sin poner en riesgo su estabilidad financiera.  

    p Los indicadores de sostenibilidad suelen clasificarse en cuatro grandes dimensiones:  

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tag-shape.tag-shape_2-1.h-100.p-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4
              img(src='@/assets/curso/temas/t2/tarj2-1.svg', alt='')
            .col-lg-8.col-md-8.col-8
              h4.mb-0 Ambiental
      .col-lg-3.col-md-6.mb-3.mb-lg-0.px-lg-0
        .tag-shape.tag-shape_2-2.h-100.p-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4
              img(src='@/assets/curso/temas/t2/tarj2-2.svg', alt='')
            .col-lg-8.col-md-8.col-8
              h4.mb-0 Social
      .col-lg-3.col-md-6.mb-3.mb-lg-0.px-lg-0
        .tag-shape.tag-shape_2-3.h-100.p-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4
              img(src='@/assets/curso/temas/t2/tarj2-3.svg', alt='')
            .col-lg-8.col-md-8.col-8
              h4.mb-0 Económica
      .col-lg-3.col-md-6.mb-3.mb-lg-0.px-lg-0
        .tag-shape2.tag-shape2_2-4.h-100.p-4.px-5
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-4.col-4
              img(src='@/assets/curso/temas/t2/tarj2-4.svg', alt='')
            .col-lg-8.col-md-8.col-8
              h4.mb-0 Cultural

    p.mb-4 Estas dimensiones están interrelacionadas y deben analizarse de forma sistémica, reconociendo que un sistema verdaderamente sostenible es aquel que logra un equilibrio entre ellas. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg2" data-aos="fade")
      .row.justify-content-center(titulo="Indicadores ambientales")
        .col-11
          p Los indicadores ambientales permiten evaluar de manera objetiva si un sistema productivo conserva o deteriora los recursos naturales. A través de ellos se mide el impacto de las prácticas agrícolas y pecuarias sobre el suelo, el agua, la biodiversidad y los ecosistemas. 
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-spa
              span.mb-0 #[b Nivel de materia orgánica en el suelo:] refleja la salud y fertilidad del suelo. Un buen nivel mejora la retención de agua, la disponibilidad de nutrientes y la resistencia a la erosión. Su disminución indica prácticas inadecuadas como monocultivo intensivo o uso excesivo de agroquímicos. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Diversidad de cultivos:] mide el grado de variedad en la producción. Sistemas diversificados son más estables, reducen plagas, mejoran el suelo y aumentan la resiliencia frente a cambios climáticos. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Uso eficiente del agua:] evalúa la relación entre el agua utilizada y la producción obtenida. El uso racional protege las fuentes hídricas, reduce costos y evita conflictos por el recurso. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Reducción de agroquímicos:] indica el nivel de dependencia de insumos químicos. Disminuir su uso reduce la contaminación y favorece sistemas más saludables y sostenibles. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Conservación de áreas naturales:] valora la protección de bosques, fuentes de agua y corredores biológicos dentro del sistema productivo. Mantener estas áreas garantiza equilibrio ecológico y sostenibilidad a largo plazo. 
      .row.justify-content-center(titulo="Indicadores sociales")
        .col-11
          p Los indicadores sociales permiten evaluar cómo el sistema productivo impacta a la comunidad y a las personas que participan en él. La sostenibilidad implica no solo cuidar el ambiente, sino también garantizar bienestar, equidad y desarrollo social. 
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-spa
              span.mb-0 #[b Participación comunitaria:] mide el grado en que la comunidad interviene en las decisiones productivas. La organización y el trabajo asociativo fortalecen la cooperación, la distribución justa de beneficios y el aprendizaje colectivo. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Equidad de género:] evalúa la igualdad de oportunidades entre hombres y mujeres en el acceso a recursos, capacitación y toma de decisiones. Promover la inclusión de mujeres y jóvenes fortalece la cohesión social y la continuidad productiva. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Condiciones laborales dignas:] considera aspectos como salario justo, seguridad social y ambientes de trabajo seguros. Garantizar estos derechos mejora la calidad de vida y reduce la pobreza rural. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Seguridad alimentaria familiar:] mide si la familia productora tiene acceso estable a alimentos suficientes y nutritivos. Un sistema sostenible prioriza el autoconsumo y fortalece la soberanía alimentaria. 
      .row.justify-content-center(titulo="Indicadores económicos")
        .col-11
          p Los indicadores económicos permiten evaluar si el sistema productivo es viable y puede mantenerse en el tiempo. La sostenibilidad requiere estabilidad financiera que respalde las prácticas ambientales y sociales. 
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-spa
              span.mb-0 #[b Rentabilidad sostenible:] evalúa la generación de ingresos estables sin deteriorar los recursos naturales. No se enfoca solo en ganancias inmediatas, sino en mantener la productividad a largo plazo sin generar dependencia excesiva de insumos externos.
            li
              i.fas.fa-spa
              span.mb-0 #[b Diversificación de ingresos:] mide la variedad de fuentes económicas dentro del sistema productivo. Incorporar distintos cultivos, transformación de productos o actividades complementarias reduce riesgos y aumenta la estabilidad financiera. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Acceso a mercados locales:] valora la posibilidad de comercializar directamente en mercados cercanos. Esto mejora los ingresos del productor, reduce intermediarios y fortalece la economía regional. 
      .row.justify-content-center(titulo="Indicadores culturales")
        .col-11
          p Los indicadores culturales permiten evaluar cómo el sistema productivo preserva los saberes, valores e identidad de la comunidad. La sostenibilidad también implica proteger el patrimonio cultural y fortalecer el arraigo territorial. 
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-spa
              span.mb-0 #[b Uso de saberes tradicionales:] mide la integración de conocimientos ancestrales en las prácticas productivas, fortaleciendo la identidad y la adaptación al territorio. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Conservación de semillas nativas:] evalúa la protección de la diversidad genética local y la reducción de la dependencia externa. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Identidad y arraigo territorial:] valora el sentido de pertenencia y la permanencia de las familias en el campo. 
            li
              i.fas.fa-spa
              span.mb-0 #[b Transmisión intergeneracional:] mide cómo los conocimientos productivos y culturales se comparten entre generaciones, garantizando continuidad y sostenibilidad. 
      

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Integración de las dimensiones 

    .row.justify-content-center.align-items-center.mb-5.mb-lg-4
      .col-lg-7.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-5(data-aos="fade-left")
        p Los indicadores ambientales, sociales, económicos y culturales no deben analizarse de manera aislada, ya que se debe tener claro que un sistema puede tener buenos resultados económicos, pero presentar deterioro ambiental, o puede ser ambientalmente responsable pero económicamente inviable.
        .bg4.p-4
          p.mb-0 La sostenibilidad implica equilibrio; la evaluación periódica mediante indicadores permite identificar debilidades, establecer metas y diseñar planes de mejora continua; además, facilita la comparación entre sistemas productivos y el seguimiento de procesos de transición hacia modelos agroecológicos.  

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 2.
      span Indicadores de sostenibilidad y su contribución a la planificación territorial y al desarrollo rural sostenible
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Indicadores
            th ¿Qué evalúan?
            th Utilidad para la política pública
            th Impacto en la ruralidad
        tbody.t2
          tr
            td.bg3.fw-bold Ambientales
            td Conservación del suelo, agua y biodiversidad.
            td Diseño de programas de conservación, incentivos ambientales y cumplimiento de metas y ODS.
            td Mayor resiliencia climática y protección de recursos naturales.
          tr
            td.bg3.fw-bold Sociales
            td Bienestar, equidad y participación comunitaria.
            td Políticas de inclusión, fortalecimiento organizativo y desarrollo rural.
            td Mejora de la calidad de vida y cohesión social.
          tr
            td.bg3.fw-bold Económicos
            td Rentabilidad y estabilidad financiera.
            td Programas de apoyo productivo, acceso a mercados y financiamiento.
            td Sistemas productivos viables y sostenibles en el tiempo.
          tr
            td.bg3.fw-bold Culturales
            td Preservación de saberes tradicionales, identidad territorial y semillas nativas.
            td Programas de fortalecimiento del patrimonio cultural, apoyo a economías locales y protección del conocimiento ancestral.
            td Mayor arraigo territorial, continuidad generacional y fortalecimiento del tejido social.





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
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
