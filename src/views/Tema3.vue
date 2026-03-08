<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Teoría general de sistemas 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p Es un enfoque interdisciplinario que permite comprender la realidad como un conjunto de elementos interrelacionados que funcionan de manera organizada. Aplicada al ámbito agropecuario, facilita el análisis integral de los agroecosistemas, considerando la interacción entre componentes ecológicos, sociales y económicos para una planificación más sostenible y eficiente. 
        p La teoría general de sistemas fue propuesta por el biólogo austríaco Ludwig von Bertalanffy a mediados del siglo XX. Su objetivo fue explicar cómo diferentes elementos interactúan entre sí formando totalidades organizadas.
        .bg1.p-4
          p.mb-0 Un sistema se define como un conjunto de elementos interrelacionados que interactúan entre sí para alcanzar un objetivo común. 
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/1.png', alt='')

    p.mb-5 La teoría general de sistemas permite comprender la producción agropecuaria como un sistema complejo donde intervienen múltiples variables. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Clases de sistemas 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 La teoría general de sistemas plantea que un sistema es un conjunto de elementos interrelacionados que funcionan como un todo organizado; estos elementos pueden ser físicos, biológicos, sociales o económicos, y mantienen entre sí relaciones de interdependencia. Comprender las clases de sistemas permite analizar mejor la realidad, especialmente en el ámbito agropecuario, donde los procesos productivos se desarrollan dentro de estructuras complejas y cambiantes. 
        p Según su naturaleza y forma de interacción con el entorno, los sistemas pueden clasificarse en diferentes categorías. A continuación, se amplía cada una de ellas con ejemplos y aplicaciones al contexto rural y productivo. 

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg2" data-aos="fade")
      .row.justify-content-center(titulo="Sistemas abiertos")
        .col-11
          p Los sistemas abiertos son aquellos que intercambian materia, energía e información con el entorno que los rodea, por tanto, permite que el sistema se mantenga activo, evolucione y se adapte a las condiciones externas. 
          p Un ejemplo claro es el agroecosistema, en cual, el cultivo aprovecha la energía del sol, el agua (de la lluvia o del riego) y los nutrientes del suelo para crecer y producir alimentos. Durante su desarrollo, también genera oxígeno, vapor de agua y materia orgánica que regresan al ambiente y contribuyen a los ciclos naturales. 
          p Además, el cultivo no funciona de manera aislada, sino que interactúa permanentemente con insectos, microorganismos, aves y las personas que lo manejan; estas relaciones forman un sistema interconectado, donde cada elemento influye en el equilibrio y la productividad del conjunto. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Los sistemas abiertos presentan las siguientes características: 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Interacción permanente con el ambiente. 
                li
                  i.fas.fa-check
                  span.mb-0 Capacidad de adaptación y autorregulación. 
                li
                  i.fas.fa-check
                  span.mb-0 Influencia directa de factores externos como clima, mercado y políticas públicas. 
                li
                  i.fas.fa-check
                  span.mb-0 Necesidad de equilibrio para evitar el colapso. 
              p En agroecología, se considera que los sistemas productivos deben gestionarse como sistemas abiertos, reconociendo su dependencia del entorno natural y social. 
            .col-lg-5
              img(src='@/assets/curso/temas/t3/acord1-1.png', alt='')
      .row.justify-content-center(titulo="Sistemas cerrados")
        .col-11
          p Los sistemas cerrados son aquellos que no intercambian materia con el entorno, aunque sí pueden intercambiar energía. En la práctica, los sistemas completamente cerrados casi no existen en la naturaleza, ya que la mayoría mantiene algún tipo de interacción con su ambiente. 
          p Un ejemplo en producción, puede ser un invernadero muy controlado que puede acercarse a este modelo si limita el intercambio de materiales, aunque nunca será totalmente aislado del entorno. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Las características principales de los sistemas cerrados incluyen: 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Limitado intercambio con el exterior. 
                li
                  i.fas.fa-check
                  span.mb-0 Funcionamiento más predecible. 
                li
                  i.fas.fa-check
                  span.mb-0 Menor influencia de factores externos. 
                li
                  i.fas.fa-check
                  span.mb-0 Tendencia al desgaste interno si no se renueva energía. 
              p Pensar en sistemas cerrados ayuda a comprender la importancia del reciclaje interno de nutrientes, como el uso de residuos orgánicos dentro de la misma finca para reducir la dependencia externa. 
            .col-lg-5
              img(src='@/assets/curso/temas/t3/acord1-2.png', alt='')
      .row.justify-content-center(titulo="Sistemas naturales")
        .col-11
          p Los sistemas naturales son aquellos que existen sin intervención humana directa, se desarrollan de manera espontánea como resultado de procesos biológicos, físicos y químicos propios de la naturaleza. 
          pUn ejemplo es un bosque natural, donde interactúan árboles, arbustos, animales, microorganismos, suelo, agua y clima en equilibrio dinámico. Estos sistemas han evolucionado durante largos períodos y suelen presentar alta biodiversidad y capacidad de autorregulación. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Sus principales características son: 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Alta diversidad biológica. 
                li
                  i.fas.fa-check
                  span.mb-0 Equilibrios ecológicos complejos. 
                li
                  i.fas.fa-check
                  span.mb-0 Procesos autorregulados. 
                li
                  i.fas.fa-check
                  span.mb-0 Adaptación evolutiva al entorno. 
              p Los sistemas naturales sirven como modelo para la agroecología, ya que muchos principios productivos sostenibles se inspiran en el funcionamiento de los ecosistemas naturales, buscando imitar su eficiencia y estabilidad. 
            .col-lg-5
              img(src='@/assets/curso/temas/t3/acord1-3.png', alt='')
      .row.justify-content-center(titulo="Sistemas artificiales")
        .col-11
          p Los sistemas artificiales son creados, modificados o gestionados por el ser humano con un propósito específico. En el sector rural, una finca productiva es un sistema artificial, ya que ha sido organizada para producir alimentos o materias primas. 
          p Aunque son diseñados por las personas, estos sistemas siguen dependiendo de procesos naturales como el ciclo del agua, la fotosíntesis y la fertilidad del suelo. La diferencia radica en que existe una planificación intencional y una intervención constante. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Sus características incluyen: 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Objetivos definidos (productivos, económicos o sociales). 
                li
                  i.fas.fa-check
                  span.mb-0 Organización planificada. 
                li
                  i.fas.fa-check
                  span.mb-0 Uso de tecnologías e insumos. 
                li
                  i.fas.fa-check
                  span.mb-0 Dependencia de decisiones humanas. 
              p La sostenibilidad de los sistemas artificiales depende de qué tan armoniosamente integren los procesos naturales y minimicen impactos negativos. 
            .col-lg-5
              img(src='@/assets/curso/temas/t3/acord1-4.png', alt='')
      .row.justify-content-center(titulo="Sistemas dinámicos")
        .col-11
          p Los sistemas dinámicos son aquellos que presentan cambios constantes en el tiempo, estos cambios pueden ser estructurales, funcionales o de comportamiento. En ellos, las variables interactúan de manera compleja y pueden generar transformaciones continuas. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Un agroecosistema es dinámico porque: 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Cambia con las estaciones del año. 
                li
                  i.fas.fa-check
                  span.mb-0 Se ve afectado por variaciones climáticas. 
                li
                  i.fas.fa-check
                  span.mb-0 Evoluciona según prácticas de manejo. 
                li
                  i.fas.fa-check
                  span.mb-0 Responde a cambios del mercado. 
              p Los sistemas dinámicos pueden experimentar procesos de crecimiento, adaptación, crisis y recuperación. En el análisis agropecuario, reconocer el carácter dinámico permite anticipar riesgos y planificar estrategias de resiliencia. 
            .col-lg-5
              img(src='@/assets/curso/temas/t3/acord1-5.png', alt='')
      .row.justify-content-center(titulo="Sistemas estáticos")
        .col-11
          p Los sistemas estáticos presentan pocos cambios estructurales a lo largo del tiempo y aunque pueden existir pequeñas variaciones, su configuración general permanece estable. 
          p Un ejemplo podría ser una infraestructura física como un establo o un sistema de riego instalado, que mantiene su estructura básica durante largos periodos. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-7
              p Sus características son: 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Baja variabilidad. 
                li
                  i.fas.fa-check
                  span.mb-0 Mayor estabilidad estructural. 
                li
                  i.fas.fa-check
                  span.mb-0 Funcionamiento relativamente predecible. 
                li
                  i.fas.fa-check
                  span.mb-0 Cambios lentos o mínimos. 
              p En la realidad agropecuaria, la mayoría de los sistemas combinan elementos estáticos (infraestructura) con elementos dinámicos (procesos biológicos y sociales). 
            .col-lg-5
              img(src='@/assets/curso/temas/t3/acord1-6.png', alt='')  


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Componentes y modelos de un sistema 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Características de los sistemas 



    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Modelos sistémicos aplicados a la agroecología



    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 El agroecosistema como sistema complejo 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Un agroecosistema es un sistema ecológico transformado y gestionado por el ser humano con el propósito principal de producir alimentos, fibras, energía u otros bienes. A diferencia de un ecosistema natural, el agroecosistema está orientado por decisiones humanas, objetivos productivos y dinámicas económicas. Sin embargo, sigue dependiendo de procesos ecológicos fundamentales como la fotosíntesis, el ciclo del agua y la dinámica de nutrientes del suelo. 
        p.mb-4 Considerarlo como un sistema complejo implica reconocer que está compuesto por múltiples elementos interrelacionados que interactúan de forma dinámica, generando comportamientos que no pueden explicarse únicamente desde una sola dimensión. En él confluyen factores ecológicos, sociales, culturales y económicos que se influyen mutuamente. 
        .bg4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-3
              img(src='@/assets/curso/temas/t3/8.svg', alt='')
            .col-lg-10.col-md-10.col-9
              p.mb-0 La complejidad del agroecosistema radica en la diversidad de componentes que lo integran, las múltiples interacciones entre ellos, la influencia constante del entorno y su capacidad de adaptación frente a cambios. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/9.png', alt='')

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 5.
      span Componentes del agroecosistema y su aporte a la sostenibilidad integral
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Componente
            th ¿Qué incluye?
            th Funciones / características clave
            th Importancia para la sostenibilidad
        tbody.t2
          tr
            td.fw-bold.bg3 Biótico
            td Plantas, animales, microorganismos, fauna asociada.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li
                  i.fas.fa-check
                  span.mb-0 Producción de biomasa (fotosíntesis).
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Polinización.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Control biológico.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Descomposición orgánica.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reciclaje de nutrientes.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mayor biodiversidad. 
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mayor estabilidad y resiliencia. 
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reduce dependencia de insumos externos.
          tr
            td.fw-bold.bg3 Abiótico
            td Suelo, agua, clima, relieve, altitud.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Regula fertilidad.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Determina especies viables.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Influye en prácticas productivas.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Condiciona potencial productivo.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Conservación del suelo y agua garantiza productividad a largo plazo. 
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Adaptación frente a cambio climático.
          tr
            td.fw-bold.bg3 Social
            td Familia, comunidad, organizaciones rurales.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Saberes locales.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Organización del trabajo.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Cultura agrícola.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Equidad de género.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Redes de cooperación.
            td Fortalece tejido social, continuidad generacional y toma de decisiones sostenibles.
          tr
            td.fw-bold.bg3 Económico
            td Mercados, costos, ingresos, políticas públicas.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Rentabilidad.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Acceso a mercados.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Créditos.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Diversificación productiva.
            td Garantiza viabilidad financiera y permanencia del sistema en el tiempo.


</template>

<script>
export default {
  name: 'Tema3',
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
