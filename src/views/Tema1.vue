<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Producción agropecuaria y medio ambiente 

    
    .row.bgc-2.align-items-center.p-2.p-md-3.p-lg-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center.align-items-center
            .col-12
              .bg-color-primario.br-top-r.mb-4
                .row.justify-content-center.align-items-center
                  .col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t1/1.png', alt='')
                  .col-lg-7
                    .p-4.px-lg-5
                      img.w-95x.mb-3(src='@/assets/curso/temas/t1/2.svg', alt='')
                      p La producción agropecuaria constituye una de las actividades más importantes para el desarrollo económico, social y alimentario de la población en Colombia; sin embargo, su interacción directa con los recursos naturales hace que tenga una influencia significativa sobre el medio ambiente.  
                      p.mb-0 El manejo inadecuado de los sistemas agrícolas y pecuarios puede generar deterioro ambiental, mientras que la aplicación de prácticas sostenibles permite equilibrar la producción con la conservación de los ecosistemas. 

              p.mb-4 Así mismo, comprender la relación entre producción agropecuaria y medio ambiente es fundamental para promover modelos productivos responsables que garanticen la sostenibilidad, la seguridad alimentaria y el bienestar de las comunidades rurales. 

              .row.justify-content-center.mb-4
                .col-lg-4.col-md-6.mb-3.mb-lg-0
                  .tag-shape.tag-shape_1-1.h-100.p-4.px-lg-5.d-flex.align-items-center
                    p.mb-0 Concepto de medio ambiente y problemática ambiental global.
                .col-lg-4.col-md-6.mb-3.mb-lg-0.px-lg-0
                  .tag-shape.tag-shape_1-2.h-100.p-4.px-lg-5.d-flex.align-items-center
                    p.mb-0 El medio ambiente se entiende como el conjunto de elementos naturales, sociales y culturales que rodean a los seres vivos e influyen en su desarrollo y bienestar.
                .col-lg-4.col-md-6.mb-3.mb-lg-0
                  .tag-shape.tag-shape_1-3.h-100.p-4.px-lg-5.d-flex.align-items-center
                    p.mb-0 Incluyen componentes como el suelo, el agua, el aire, la flora, la fauna y las interacciones que se establecen entre ellos y las actividades realizadas por el ser humano.

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-5 El medio ambiente atraviesa una crisis global causada principalmente por el crecimiento de la población, el uso excesivo de los recursos naturales y sistemas productivos que no consideran sus impactos ecológicos. Como resultado, se presentan problemas como: 
        .bg4.mb-4          
          .row.justify-content-center
            .col-lg-4.d-none.d-lg-block
              img.mt-n15(src='@/assets/curso/temas/t1/3.png', alt='')
            .col-lg-8
              .p-4
                ul.lista-ul--color.fa-lista.mb-0
                  li
                    i.fas.fa-spa
                    span.mb-0 El cambio climático. 
                  li
                    i.fas.fa-spa
                    span.mb-0 La deforestación. 
                  li 
                    i.fas.fa-spa
                    span.mb-0 La pérdida de biodiversidad. 
                  li 
                    i.fas.fa-spa
                    span.mb-0 La contaminación del agua. 
                  li
                    i.fas.fa-spa
                    span.mb-0 La contaminación del suelo. 
                  li.mb-0
                    i.fas.fa-spa
                    span.mb-0 El deterioro de los ecosistemas. 
        p Estas situaciones afectan directamente la producción agropecuaria, ya que disminuyen la calidad y disponibilidad del suelo, el agua y otros recursos esenciales para garantizar una actividad productiva sostenible y segura. 
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/4.png', alt='')

    p.mb-4 Para complementar esta información se recomienda al aprendiz revisar el siguiente video: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Impacto de la actividad agrícola y pecuaria sobre los recursos naturales 

    .row.justify-content-center.mb-5
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t1/5.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La producción agropecuaria puede generar impactos ambientales negativos cuando no se implementan buenas prácticas de manejo. Sin embargo, al adoptar principios de producción limpia y gestión ambiental, es posible reducir dichos impactos y fortalecer la sostenibilidad de los sistemas productivos, promoviendo un uso racional de los recursos naturales. 

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1. 
      span Impactos ambientales de la actividad agropecuaria y prácticas sostenibles de mitigación
    .tabla-a.color-acento-contenido
      table
        thead
          tr
            th Actividad
            th Impactos negativos
            th Causas principales
            th Prácticas sostenibles (impactos positivos)
            th Contribución ambiental
        tbody.t2
          tr
            td.bg3.fw-bold(rowspan='5') Agricultura
            td Erosión del suelo.
            td Manejo inadecuado del suelo.
            td Rotación de cultivos.
            td Conservación de la fertilidad del suelo.
          tr
            td Compactación del suelo.
            td Uso intensivo de maquinaria.
            td Manejo sostenible del suelo.
            td Mejora de la estructura y productividad del suelo.
          tr
            td Contaminación del agua.
            td Uso excesivo de fertilizantes y plaguicidas.
            td Manejo eficiente del agua.
            td Protección del recurso hídrico.
          tr
            td Deforestación.
            td Expansión de la frontera agrícola.
            td Conservación de áreas naturales.
            td Protección de ecosistemas.
          tr
            td Disminución de la biodiversidad.
            td Simplificación de sistemas productivos.
            td Diversificación de cultivos.
            td Conservación de la biodiversidad.
          tr
            td.bg3.fw-bold(rowspan='3') Ganadería
            td Degradación del suelo.
            td Sobrepastoreo.
            td Sistemas silvopastoriles.
            td Recuperación de suelos y cobertura vegetal.
          tr
            td Pérdida de cobertura vegetal.
            td Manejo inadecuado del pastoreo.
            td Rotación de potreros.
            td Regeneración de la vegetación.
          tr
            td Contaminación del agua y aire.
            td Gestión inadecuada de residuos orgánicos.
            td Manejo adecuado de residuos.
            td Mejora de la calidad del agua y del aire.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Producción limpia y reconversión productiva 

    p Estas surgen como respuesta a los impactos ambientales, sociales y económicos generados por los modelos agropecuarios convencionales, teniendo en cuenta que, estos enfoques promueven la adopción de prácticas que permitan producir alimentos de manera eficiente, reduciendo el uso de insumos contaminantes, optimizando los recursos naturales y garantizando la sostenibilidad de los sistemas productivos rurales. 

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 La implementación de la producción limpia implica un cambio de visión en la forma de manejar los sistemas agrícolas y ganaderos, pasando de modelos extractivos a modelos preventivos y sostenibles, en los cuales la conservación del suelo, el agua y la biodiversidad se integran al proceso productivo.


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Principios de la producción limpia en el sector agropecuario 
    
    p La producción limpia en el sector agropecuario se fundamenta en un conjunto de principios orientados a prevenir la contaminación y a mejorar la eficiencia productiva.  
    p Prevención de la contaminación: la producción limpia parte del principio de actuar antes de que el impacto ocurra, en lugar de corregir daños posteriormente, se debe tener en cuenta lo siguiente: 

    .row.justify-content-center.no-pointer.mb-4(data-aos="fade")
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5.mb-4
              img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')
            p.mb-0.text-center Diseñar sistemas productivos que minimicen la generación de residuos orgánicos e inorgánicos. 
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5.mb-4
              img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')
            p.mb-0.text-center Reducir emisiones de gases de efecto invernadero como metano (producido en la ganadería) y óxido nitroso (asociado al uso inadecuado de fertilizantes). 
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5.mb-4
              img(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')
            p.mb-0.text-center Implementar planes de manejo de estiércol y residuos agrícolas para evitar contaminación de suelos y fuentes hídricas. 
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5.mb-4
              img(src='@/assets/curso/temas/t1/tarj1-4.svg', alt='')
            p.mb-0.text-center Aplicar Buenas Prácticas Agrícolas (BPA) y Buenas Prácticas Ganaderas (BPG).  

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p.mb-0 La prevención no solo contribuye a la protección del medio ambiente, sino que también reduce los costos asociados al manejo y tratamiento de residuos, a las sanciones ambientales y a la pérdida de productividad del suelo. 

    .subt-cuad.mb-4
      h4.mb-0.p-3.ps-5 Uso eficiente de los recursos naturales 

    .row.bgc-3.align-items-center.p-2.p-md-4.pb-lg-0.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/7.png', alt='')
            .col-lg-8
              p Este principio busca maximizar la productividad utilizando menos recursos, garantizando su disponibilidad para futuras generaciones y para ello es posible lo siguiente: 
              SlyderF(columnas="col-lg-4 col-md-6" data-aos="fade")
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-1.svg' alt='')
                  p.text-center.mb-5 Uso eficiente del suelo.
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-2.svg' alt='')
                  p.text-center.mb-5 Rotación y diversificación de cultivos.
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-3.svg' alt='')
                  p.text-center.mb-5 Conservación de cobertura vegetal. 
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-4.svg' alt='')
                  p.text-center.mb-5 Agricultura de conservación y labranza mínima.   
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-5.svg' alt='')
                  p.text-center.mb-5 Control de erosión mediante barreras vivas y terrazas.
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-6.svg' alt='')
                  p.text-center.mb-5 Uso eficiente del agua.  
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-7.svg' alt='')
                  p.text-center.mb-5 Sistemas de riego tecnificado (goteo, microaspersión).
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-8.svg' alt='')
                  p.text-center.mb-5 Captación y almacenamiento de aguas lluvias.  
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-9.svg' alt='')
                  p.text-center.mb-5 Protección de nacimientos y rondas hídricas.  
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-10.svg' alt='')
                  p.text-center.mb-5 Monitoreo del consumo hídrico en explotaciones pecuarias.  
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-11.svg' alt='')
                  p.text-center.mb-5 Uso eficiente de la energía.   
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-12.svg' alt='')
                  p.text-center.mb-5 Incorporación de energías renovables (solar, biodigestores). 
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-13.svg' alt='')
                  p.text-center.mb-5 Mecanización eficiente.   
                .tarjeta.bgi-1.p-4
                  .row.justify-content-center.mb-4
                    .col-5.col-md-6.col-lg-7
                      img(src='@/assets/curso/temas/t1/tarj2-14.svg' alt='')
                  p.text-center.mb-5 Reducción del uso innecesario de combustibles fósiles.   

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p.mb-0 El manejo racional de recursos reduce costos operativos y mejora la resiliencia frente al cambio climático. 


    .subt-cuad.mb-4
      h4.mb-0.p-3.ps-5 Optimización de insumos 

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p La producción limpia promueve el uso estratégico y responsable de insumos químicos y biológicos, priorizando alternativas sostenibles. 
        ul.lista-ul--color.lista-ul--separador.fa-lista.mb-4
          li
            i.fas.fa-spa
            span.mb-0 Aplicación de fertilización basada en análisis de suelo. 
          li
            i.fas.fa-spa
            span.mb-0 Uso de biofertilizantes y compost. 
          li
            i.fas.fa-spa
            span.mb-0 Manejo integrado de plagas (MIP), combinando controles biológicos, culturales y mecánicos. 
          li
            i.fas.fa-spa
            span.mb-0 Reducción del uso de antibióticos en la producción animal mediante mejoras en bioseguridad y nutrición. 
        .bg4.p-4
          .row.justify-content-center
            .col-lg-2.col-md-2.col-3
              img(src='@/assets/curso/temas/t1/9.svg', alt='')
            .col-lg-10.col-md-10.col-9
              p.mb-0 La optimización disminuye riesgos para la salud humana, evita la contaminación de suelos y aguas, y mejora la calidad e inocuidad de los productos agropecuarios. 
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/8.png', alt='')


    .subt-cuad.mb-4
      h4.mb-0.p-3.ps-5 Mejora continua 

    .row.justify-content-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/9.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p Este principio implica un proceso sistemático de evaluación, innovación y adaptación tecnológica. 
        ul.lista-ul--color.color-primario.fa-lista.mb-4
          li
            i.fas.fa-check
            span.mb-0 Monitoreo constante de indicadores productivos y ambientales. 
          li
            i.fas.fa-check
            span.mb-0 Implementación de sistemas de gestión ambiental. 
          li
            i.fas.fa-check
            span.mb-0 Capacitación permanente de productores y trabajadores. 
          li
            i.fas.fa-check
            span.mb-0 Incorporación de tecnologías digitales (agricultura de precisión). 
        .bg1.p-4
          p.mb-0 La mejora continua fortalece la competitividad del sector agropecuario, permitiendo responder a exigencias del mercado nacional e internacional. 


    .subt-cuad.mb-4
      h4.mb-0.p-3.ps-5 Responsabilidad ambiental, social y económica     

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p La producción limpia reconoce que la sostenibilidad no es solo ambiental, sino también social y económica. 
        ul.lista-ul--color.color-primario.fa-lista.mb-4
          li
            i.fas.fa-check
            span.mb-0 Promueve condiciones laborales dignas y seguras. 
          li
            i.fas.fa-check
            span.mb-0 Protege la salud de productores y consumidores. 
          li
            i.fas.fa-check
            span.mb-0 Fomenta el desarrollo rural sostenible. 
          li
            i.fas.fa-check
            span.mb-0 Impulsa la participación comunitaria en decisiones productivas. 
          li
            i.fas.fa-check
            span.mb-0 Conserva la biodiversidad y los ecosistemas estratégicos. 
        .bg1.p-4
          p.mb-0 Este enfoque integral contribuye a la seguridad alimentaria, la reducción de la pobreza rural y la conservación del patrimonio natural.  
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/10.png', alt='')

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 La producción limpia en el sector agropecuario no es únicamente un conjunto de técnicas, sino un modelo de gestión sostenible que integra eficiencia productiva, protección ambiental y bienestar social. Su aplicación permite aumentar la rentabilidad, reducir impactos negativos y fortalecer la sostenibilidad a largo plazo del sistema agroalimentario. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Alternativas de producción más limpia (agricultura orgánica) 

    .row.justify-content-center.mb-4
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/t1/12.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La agricultura orgánica es una de las principales alternativas de producción más limpia, ya que se basa en el respeto por los ciclos naturales y en la conservación de la biodiversidad. Con ello, el sistema productivo evita el uso de agroquímicos sintéticos y organismos genéticamente modificados, priorizando el manejo ecológico del suelo y de los cultivos. 

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/13.png', alt='')
      .col-lg-5
        p Características de la agricultura orgánica: 
        ul.lista-ul--color.color-primario.fa-lista.mb-4
          li
            i.fas.fa-check
            span.mb-0 Uso de abonos orgánicos como compost, estiércol y biofertilizantes. 
          li
            i.fas.fa-check
            span.mb-0 Control biológico de plagas y enfermedades. 
          li
            i.fas.fa-check
            span.mb-0 Rotación y asociación de cultivos. 
          li
            i.fas.fa-check
            span.mb-0 Conservación de la fertilidad del suelo y la vida microbiana. 
          li
            i.fas.fa-check
            span.mb-0 Producción de alimentos saludables y de alta calidad. 
        p La agricultura orgánica contribuye a la reducción de la contaminación del suelo y del agua, mejora la resiliencia de los agroecosistemas y fortalece la economía campesina al generar valor agregado y acceso a mercados diferenciados. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/14.svg', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Reconversión agrícola y ganadera 

    p.mb-4 La reconversión agrícola y ganadera constituye una estrategia clave para transitar hacia sistemas productivos más sostenibles y resilientes. Su propósito es mejorar la eficiencia productiva, reduciendo los impactos ambientales y promoviendo el uso responsable de los recursos naturales. 

    .tarjeta--container.row.mb-4(data-aos="fade")
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-7.col-lg-4
            img(src='@/assets/curso/temas/t1/tarj3-1.png', alt='')
        h4.text-center.text-white Reconversión productiva 
        p.text-white.mb-0 Hace referencia al proceso mediante el cual los sistemas agrícolas y ganaderos tradicionales se transforman para adoptar prácticas más sostenibles y eficientes. En la agricultura, la reconversión implica la transición de monocultivos intensivos hacia sistemas diversificados, el uso de tecnologías apropiadas y la implementación de buenas prácticas agrícolas.  
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-md-7.col-lg-4
            img(src='@/assets/curso/temas/t1/tarj3-2.png', alt='')
        h4.text-center Reconversión ganadera 
        p.mb-0 Busca reducir los impactos negativos asociados al sobrepastoreo, la compactación del suelo y la deforestación. Esto se logra mediante la adopción de modelos como la ganadería sostenible, el manejo racional de praderas, la rotación de potreros y la incorporación de árboles y arbustos forrajeros. 

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p.mb-0 La reconversión productiva permite mejorar la productividad, reducir costos, proteger los recursos naturales y aumentar la resiliencia frente al cambio climático. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Modelos productivos sostenibles 

    p.mb-4 Los modelos productivos sostenibles integran diferentes componentes del sistema productivo con el fin de optimizar el uso del suelo y los recursos naturales. 

    .bgi-2.tarjeta.p-4.mb-4
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            h4.text-white Policultivos 
            p.text-white Consisten en la siembra simultánea de varias especies vegetales en un mismo espacio. Este modelo reduce la incidencia de plagas y enfermedades, mejora la fertilidad del suelo y diversifica la producción, disminuyendo los riesgos económicos. 
          .col-lg-5.col-11
            img(src='@/assets/curso/temas/t1/slider1-1.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            h4.text-white Sistemas silvopastoriles 
            p.text-white Integran árboles, pasturas y ganado en un mismo sistema. Los árboles proporcionan sombra, alimento y protección del suelo, mejoran la biodiversidad y contribuyen a la captura de carbono, mientras que el ganado aprovecha de manera eficiente los recursos forrajeros. 
          .col-lg-5.col-11
            img(src='@/assets/curso/temas/t1/slider1-2.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5.col-11
            h4.text-white Sistemas agroforestales 
            p.text-white Combinan cultivos agrícolas con especies forestales, favoreciendo la conservación del suelo, la regulación hídrica y la diversificación productiva. Estos sistemas fortalecen la sostenibilidad ambiental y económica de las fincas. 
          .col-lg-5.col-11
            img(src='@/assets/curso/temas/t1/slider1-3.png', alt='')    
     
    p La implementación de estos modelos productivos sostenibles representa una estrategia clave para avanzar hacia una producción agropecuaria limpia, resiliente y respetuosa. 


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
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
