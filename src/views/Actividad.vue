<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono='far fa-question-circle', titulo='Actividad didáctica')
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #Actividad_Cuestionario
    <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Producción limpia y reconversión sostenible en el sector rural',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conocimientos previos, percepciones y nivel de comprensión de los aprendices sobre producción limpia, reconversión sostenible y sostenibilidad en el sector rural, con el fin de orientar el desarrollo del componente formativo y fortalecer los procesos de aprendizaje.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: 'La producción limpia se caracteriza principalmente por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el uso de insumos químicos para mejorar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prevenir la contaminación desde el origen del proceso productivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la mano de obra por maquinaria pesada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la expansión de la frontera agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 2,
          texto: 'La reconversión sostenible en el sector rural busca:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abandonar completamente la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformar sistemas productivos tradicionales hacia modelos sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la productividad para proteger el ambiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementar monocultivos tecnificados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 3,
          texto:
            '¿Qué implica la reconversión productiva en la agricultura y ganadería?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener los mismos sistemas de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar hacia modelos productivos sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el uso de pesticidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la biodiversidad en el área productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 4,
          texto:
            'La sostenibilidad en el sector rural integra las dimensiones:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambiental y tecnológica únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Económica y productiva solamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambiental, social y económica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Política y comercial exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 5,
          texto: 'La reconversión productiva puede incluir:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustitución de cultivos convencionales por sistemas agroecológicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación de toda actividad pecuaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incremento de agroquímicos para competir en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso indiscriminado del recurso hídrico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 6,
          texto:
            'Un ejemplo de práctica de producción limpia en agricultura es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar fertilizantes sin análisis de suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Quemar residuos agrícolas después de la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el uso de pesticidas de amplio espectro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementar sistemas de riego eficientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 7,
          texto: 'La eficiencia en el uso de recursos significa:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producir más utilizando menos insumos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Utilizar todos los recursos disponibles sin restricción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la producción anual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir recursos naturales por artificiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 8,
          texto: 'Un impacto ambiental negativo en el sector rural puede ser:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conservación de bosques protectores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diversificación de cultivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contaminación de fuentes hídricas por agroquímicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rotación de cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 9,
          texto: 'Las tecnologías limpias se caracterizan por:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar mayores emisiones contaminantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir residuos y optimizar procesos productivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el consumo energético.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir completamente la mano de obra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 10,
          texto: 'La producción limpia contribuye a:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar costos ambientales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir competitividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la imagen y sostenibilidad de la empresa rural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la planificación productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 11,
          texto: 'La producción limpia se considera una estrategia:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Correctiva, aplicada después del daño ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Preventiva, enfocada en evitar la generación de impactos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reactiva, basada en sanciones ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temporal, aplicada solo en épocas de crisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 12,
          texto: 'Un beneficio económico de la producción limpia es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento del desperdicio de materias primas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumento en el consumo de energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de costos mediante uso eficiente de insumos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminución de la competitividad en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 13,
          texto: 'La reconversión sostenible implica principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cambios estructurales planificados en el sistema productivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Suspensión definitiva de actividades rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustitución total de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación del componente ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 14,
          texto: 'Una práctica que favorece la sostenibilidad del suelo es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monocultivo permanente sin rotación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso excesivo de fertilizantes sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rotación y diversificación de cultivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Quema constante de residuos agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 15,
          texto:
            'La gestión ambiental en unidades productivas rurales permite:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar la normatividad ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planificar acciones para prevenir y mitigar impactos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la explotación de recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la calidad del producto final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 16,
          texto:
            'Un indicador de eficiencia hídrica en producción agrícola es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el riego sin control técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de sistemas de riego tecnificado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desperdicio de agua en canales abiertos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicación de riego en horas de alta evaporación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 17,
          texto: 'La reconversión productiva fortalece la resiliencia cuando:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Depende de un solo cultivo comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diversifica actividades y reduce riesgos productivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementa el uso de insumos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce la planificación técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 18,
          texto: 'Una tecnología limpia en el sector pecuario puede ser:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manejo inadecuado de estiércol.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vertimiento directo de residuos a fuentes hídricas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementación de biodigestores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento de emisiones sin control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 19,
          texto: 'La planificación sostenible en el sector rural busca:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar ganancias sin considerar impactos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integrar criterios ambientales, sociales y económicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente la producción a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la innovación tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
        {
          id: 20,
          texto:
            'La adopción de prácticas sostenibles mejora la competitividad porque:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Responde a exigencias ambientales del mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementa sanciones legales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limita el acceso a nuevos mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la producción limpia y reconversión sostenible rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la producción limpia y reconversión sostenible rural.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la producción limpia y reconversión sostenible rural.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
