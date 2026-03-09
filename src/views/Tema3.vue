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
            .col-lg-5.col-md-9
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
            .col-lg-5.col-md-9
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
            .col-lg-5.col-md-9
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
            .col-lg-5.col-md-9
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
            .col-lg-5.col-md-9
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
            .col-lg-5.col-md-9
              img(src='@/assets/curso/temas/t3/acord1-6.png', alt='')  


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Componentes y modelos de un sistema 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/3.png', alt='') 
      .col-lg-9(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-6.d-none.d-lg-block.pe-lg-0
            img(src='@/assets/curso/temas/t3/4.svg', alt='')
          .col-lg-6.ps-lg-0
            .bg4.p-4.h-100.d-flex.align-items-center
              p.mb-0 Son los elementos estructurales y funcionales que, al interactuar entre sí, permiten que el sistema cumpla un propósito determinado, además, están organizados de manera que transforman recursos naturales y humanos en bienes y servicios, como alimentos, fibras o energía. Identificar y analizar cada componente facilita comprender cómo circulan la materia, la energía y la información dentro del sistema, y cómo estos flujos influyen en su sostenibilidad, eficiencia y resiliencia. 
        p En el enfoque sistémico, ningún componente funciona de manera aislada; todos mantienen relaciones de interdependencia. A continuación, se amplían los principales componentes de un sistema aplicado al contexto agropecuario. 

    TabsB.color-acento-botones.mb-5(data-aos="fade-down")
      .py-4.py-md-5(titulo="Entradas (inputs)" :icono="require('@/assets/curso/temas/t3/tabs1-ico1.svg')")
        .row.justify-content-center
          .col-8.col-md-5.col-lg-3.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/tabs1-1.png', alt='')
          .col-11.col-lg-8
            p Las entradas son todos los recursos que ingresan al sistema para que pueda funcionar. Constituyen el punto de partida del proceso productivo y pueden ser de origen natural, humano o tecnológico. 
            p.mb-4 En un agroecosistema, las entradas incluyen: 
            .row.justify-content-center.mb-4
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Semillas o material vegetal. 
                  li
                    i.fas.fa-check
                    span.mb-0 Agua (lluvia o riego). 
                  li
                    i.fas.fa-check
                    span.mb-0 Energía solar. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Mano de obra.
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Fertilizantes (orgánicos o sintéticos). 
                  li
                    i.fas.fa-check
                    span.mb-0 Maquinaria e infraestructura. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Información y conocimientos técnicos. 
            p Las entradas pueden clasificarse en internas y externas. Las internas provienen del mismo sistema (por ejemplo, semillas criollas guardadas de cosechas anteriores o abono producido en la finca), mientras que las externas se adquieren fuera del sistema (agroquímicos, concentrados, combustibles). Desde la perspectiva de la sostenibilidad, se busca reducir la dependencia de insumos externos y fortalecer la autonomía productiva. 
      .py-4.py-md-5(titulo="Procesos" :icono="require('@/assets/curso/temas/t3/tabs1-ico2.svg')")
        .row.justify-content-center
          .col-8.col-md-5.col-lg-3.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/tabs1-2.png', alt='')
          .col-11.col-lg-8
            p Los procesos son las transformaciones internas que ocurren dentro del sistema. En esta fase, las entradas se convierten en productos mediante interacciones biológicas, físicas, químicas y sociales. 
            p.mb-4 En el agroecosistema, los procesos incluyen: 
            .row.justify-content-center.mb-4
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Germinación y crecimiento vegetal. 
                  li
                    i.fas.fa-check
                    span.mb-0 Fotosíntesis. 
                  li
                    i.fas.fa-check
                    span.mb-0 Ciclos de nutrientes. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Reproducción y engorde animal. 
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Manejo y control de plagas. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Transformación de materias primas (por ejemplo, procesamiento de leche o granos). 
            p Los procesos pueden ser naturales (como el ciclo del nitrógeno) o inducidos por la acción humana (labranza, fertilización, riego). La eficiencia de estos procesos determina en gran medida la productividad y sostenibilidad del sistema. Un manejo adecuado favorece procesos biológicos equilibrados, mientras que un manejo inadecuado puede generar desequilibrios ecológicos. 
      .py-4.py-md-5(titulo="Salidas (outputs)" :icono="require('@/assets/curso/temas/t3/tabs1-ico3.svg')")
        .row.justify-content-center
          .col-8.col-md-5.col-lg-3.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/tabs1-3.png', alt='')
          .col-11.col-lg-8
            p Las salidas son los resultados obtenidos después de que las entradas han sido transformadas por los procesos internos. Representan el cumplimiento del objetivo del sistema. 
            p.mb-4 En un sistema agropecuario, las salidas pueden ser: 
            .row.justify-content-center.mb-4
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Productos agrícolas (granos, frutas, hortalizas). 
                  li
                    i.fas.fa-check
                    span.mb-0 Productos pecuarios (leche, carne, huevos). 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Subproductos (estiércol, residuos vegetales).
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Energía (biogás). 
                  li
                    i.fas.fa-check
                    span.mb-0 Beneficios económicos. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Impactos ambientales (positivos o negativos). 
            p Es importante considerar que no todas las salidas son necesariamente deseables. Por ejemplo, la contaminación del agua o la emisión de gases de efecto invernadero también son salidas del sistema. Por ello, la sostenibilidad implica maximizar las salidas beneficiosas y minimizar las perjudiciales. 
      .py-4.py-md-5(titulo="Retroalimentación " :icono="require('@/assets/curso/temas/t3/tabs1-ico4.svg')")
        .row.justify-content-center
          .col-8.col-md-5.col-lg-3.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/tabs1-4.png', alt='')
          .col-11.col-lg-8
            p La retroalimentación es el mecanismo mediante el cual el sistema regula su funcionamiento a partir de la información que generan sus propias salidas. Permite corregir errores, ajustar procesos y mantener el equilibrio interno. 
            p.mb-4 Existen dos tipos principales: 
            ul.lista-ul--color.color-primario.fa-lista
              li
                i.fas.fa-check
                span.mb-0 Retroalimentación positiva: amplifica cambios y puede acelerar procesos (por ejemplo, la acumulación excesiva de plagas si no hay control biológico). 
              li
                i.fas.fa-check
                span.mb-0 Retroalimentación negativa: estabiliza el sistema y mantiene el equilibrio (por ejemplo, la presencia de depredadores naturales que regulan poblaciones de insectos). 
            p La observación constante del productor, los registros de producción y el monitoreo ambiental forman parte de la retroalimentación, ya que permiten tomar decisiones oportunas para mejorar el desempeño del sistema. 
      .py-4.py-md-5(titulo="Entorno" :icono="require('@/assets/curso/temas/t3/tabs1-ico5.svg')")
        .row.justify-content-center
          .col-8.col-md-5.col-lg-3.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/tabs1-5.png', alt='')
          .col-11.col-lg-8
            p El entorno es el contexto externo que rodea al sistema y que influye en su funcionamiento, aunque no forme parte directa de él. Incluye factores naturales, sociales, económicos y políticos. 
            p.mb-4 En el caso de una finca, el entorno puede estar conformado por: 
            .row.justify-content-center.mb-4
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Clima y condiciones meteorológicas. 
                  li
                    i.fas.fa-check
                    span.mb-0 Suelo y relieve. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Mercados y precios. 
              .col-lg-6
                ul.lista-ul--color.color-primario.fa-lista.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Normativas y políticas públicas. 
                  li
                    i.fas.fa-check
                    span.mb-0 Cultura y organización comunitaria. 
                  li.mb-0
                    i.fas.fa-check
                    span.mb-0 Infraestructura regional. 
            p El sistema no puede controlar totalmente su entorno, pero sí puede adaptarse a él. Por ejemplo, frente a variaciones climáticas, el productor puede diversificar cultivos o implementar prácticas de conservación de agua. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Características de los sistemas 

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-2.col-md-2.col-3
        img(src='@/assets/curso/temas/t3/5.png', alt='')
      .col-lg-10.col-md-10.col-9
        p Las características de los sistemas permiten comprender su funcionamiento, su organización interna y la manera en que responden a las variaciones del entorno, estos atributos resultan esenciales para analizar su comportamiento dinámico, su nivel de estabilidad y su capacidad de sostener la productividad a lo largo del tiempo. 
        p.mb-0 Desde una perspectiva integral, el enfoque sistémico no examina los elementos de forma aislada; por el contrario, analiza las interrelaciones, interacciones y procesos que, en conjunto, determinan el desempeño global del sistema. 

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 3.
      span Características de los sistemas aplicadas al contexto agroecológico
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Característica
            th Definición sistémica
            th Aplicación en el agroecosistema
            th Implicación para la gestión agroecológica
        tbody.t2
          tr
            td.fw-bold.bg3 Interdependencia
            td Los componentes del sistema están conectados y dependen mutuamente para funcionar.
            td El suelo, agua, plantas, animales y ser humano interactúan constantemente; un cambio en uno afecta a los demás.
            td Las decisiones productivas deben evaluarse de manera integral, considerando efectos ecológicos, productivos y económicos.
          tr
            td.fw-bold.bg3 Totalidad
            td El sistema es más que la suma de sus partes; las propiedades emergen de la interacción.
            td La integración agricultura-ganadería permite reciclaje de nutrientes y sinergias que no se logran por separado.
            td Se promueven diseños productivos integrados que potencien relaciones positivas entre componentes.
          tr
            td.fw-bold.bg3 Homeostasis
            td Capacidad del sistema para autorregularse y mantener equilibrio frente a cambios externos.
            td Control biológico de plagas y mantenimiento natural de la fertilidad del suelo mediante procesos biológicos.
            td Mayor diversidad biológica aumenta la estabilidad y reduce la dependencia de insumos externos.
          tr
            td.fw-bold.bg3 Equifinalidad
            td Un sistema puede alcanzar el mismo objetivo a través de diferentes estrategias.
            td La fertilidad del suelo puede mejorarse mediante compostaje, abonos verdes o rotación de cultivos.
            td Se fomenta la flexibilidad y la adaptación de soluciones según el contexto territorial y cultural.
          tr
            td.fw-bold.bg3 Adaptabilidad
            td Capacidad del sistema para ajustarse a cambios del entorno sin perder funcionalidad.
            td Diversificación de cultivos ante sequías, uso de variedades resistentes o nuevos canales de comercialización.
            td Incrementa la resiliencia y la sostenibilidad frente a crisis climáticas, económicas o sociales.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Modelos sistémicos aplicados a la agroecología

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0
        img.mb-3.w-80x(src='@/assets/curso/temas/t3/6.svg', alt='')
        p El enfoque sistémico en la agroecología parte de la idea de que la “finca” o “unidad productiva” no es solo un espacio de producción, sino un sistema complejo donde interactúan componentes ecológicos, sociales y económicos. Analizarla desde esta perspectiva permite diseñar agroecosistemas más equilibrados, resilientes y sostenibles, reduciendo impactos negativos y fortaleciendo la autonomía del productor.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/7.svg', alt='')
      .col-lg-4
        .bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 Los modelos sistémicos aplicados a la agroecología sirven como herramientas conceptuales para comprender el funcionamiento del sistema productivo y orientar su planificación. A continuación, se amplían algunos de los modelos más relevantes. 

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 4.
      span Modelos agroecológicos y sus aportes a la sostenibilidad
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr
            th Modelo
            th Enfoque principal
            th Estrategias / componentes
            th Beneficios / aportes a la sostenibilidad
        tbody.t2
          tr
            td.fw-bold.bg3 Agroecológico diversificado
            td Integración interconectada de cultivos, animales y árboles en un mismo sistema productivo.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Asociaciones y rotaciones de cultivos.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Sistemas silvopastoriles (árboles + pasturas + ganado).
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Huertas mixtas.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Policultivos tradicionales.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mayor biodiversidad.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reducción natural de plagas.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mejor aprovechamiento del suelo.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Distribución equilibrada del trabajo.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Diversificación de ingresos.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mayor resiliencia climática y económica.
          tr
            td.fw-bold.bg3 Flujo de nutrientes
            td Reciclaje interno de la materia orgánica para cerrar ciclos productivos y reducir insumos externos.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Compostaje de residuos vegetales.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Uso de estiércol como abono.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Cultivos de cobertura.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Fomento de la actividad biológica del suelo.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mejora de la fertilidad natural.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reducción de fertilizantes sintéticos.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Menor contaminación ambiental.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mayor autonomía y estabilidad del sistema.
          tr
            td.fw-bold.bg3 Energético
            td Análisis del agroecosistema desde el flujo y eficiencia en el uso de la energía.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Optimización de captación solar.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reducción de combustibles fósiles.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Implementación de energías renovables (biogás, solar).
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Disminución de mecanización innecesaria.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mayor eficiencia energética.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reducción de costos productivos.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Mitigación del impacto ambiental.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Balance positivo entre energía invertida y obtenida.
          tr
            td.fw-bold.bg3 Socioecológico
            td Integración de factores ambientales, sociales, culturales y económicos.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Participación comunitaria.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Equidad de género.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Acceso a recursos productivos.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Reconocimiento de saberes locales.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Redes de comercialización.
            td 
              ul.lista-ul--color.color-primario.fa-lista.mb-0
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Fortalecimiento del tejido social.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Justicia económica.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Bienestar comunitario.
                li.mb-0
                  i.fas.fa-check
                  span.mb-0 Sostenibilidad integral (ambiental + social).

    .row.justify-content-center
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p.mb-0 Un agroecosistema puede ser ambientalmente eficiente, pero si no garantiza condiciones dignas para la familia productora o no fortalece el tejido social, no puede considerarse plenamente sostenible. 


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
