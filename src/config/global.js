export default {
  global: {
    Name: 'Producción limpia y reconversión sostenible en el sector rural',
    Description:
      'El componente formativo orienta al aprendiz en la comprensión y aplicación de estrategias de producción limpia y reconversión sostenible en sistemas agrícolas y pecuarios, promoviendo prácticas responsables con el ambiente, la eficiencia en el uso de recursos y el fortalecimiento de la sostenibilidad rural.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Producción agropecuaria y medio ambiente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Impacto de la actividad agrícola y pecuaria sobre los recursos naturales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Producción limpia y reconversión productiva',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sostenibilidad y desarrollo sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Objetivos de Desarrollo Sostenible (ODS) y sector agropecuario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores de sostenibilidad rural',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Teoría general de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes y modelos de un sistema',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'El agroecosistema como sistema complejo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Aportes de las comunidades indígenas en el manejo de la biodiversidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conservación de semillas nativas',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /* complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],*/
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'Enfoque que integra principios ecológicos en la producción agrícola para lograr sistemas sostenibles.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de especies, genes y ecosistemas presentes en un territorio.',
    },
    {
      termino: 'Buenas Prácticas Agrícolas (BPA)',
      significado:
        'Conjunto de técnicas que garantizan producción segura, sostenible y de calidad.',
    },
    {
      termino: 'Calidad ambiental',
      significado:
        'Condición del entorno determinada por el equilibrio entre actividades humanas y recursos naturales.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Modelo de desarrollo que satisface necesidades actuales sin comprometer las futuras generaciones.',
    },
    {
      termino: 'Eficiencia productiva',
      significado:
        'Capacidad de obtener mayores resultados con menor uso de recursos.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'Conjunto de acciones para prevenir, mitigar y controlar impactos ambientales.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Alteración positiva o negativa que una actividad genera en el medio ambiente.',
    },
    {
      termino: 'Producción limpia',
      significado:
        'Estrategia preventiva que reduce residuos, emisiones y consumo de recursos en los procesos productivos.',
    },
    {
      termino: 'Reconversión productiva',
      significado:
        'Proceso de transformación de sistemas tradicionales hacia modelos sostenibles y competitivos.',
    },
    {
      termino: 'Recursos naturales',
      significado:
        'Bienes proporcionados por la naturaleza utilizados en la producción.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de un sistema productivo para adaptarse y recuperarse ante cambios o crisis.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Equilibrio entre dimensiones económica, social y ambiental en el tiempo.',
    },
    {
      termino: 'Sustentabilidad económica',
      significado:
        'Viabilidad financiera de un sistema productivo a largo plazo.',
    },
    {
      termino: 'Tecnologías limpias',
      significado:
        'Innovaciones que reducen la contaminación y optimizan el uso de recursos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabrera, E. (2024, 15 de octubre). Conozca la milenaria técnica de cultivo de maíz. Blog Cambiagro.',
      link:
        'https://blog.cambiagro.com/actualidad/milenaria-tecnica-de-cultivo-de-maiz/',
    },
    {
      referencia:
        'Conciencia.eco. (s. f.). La importancia de la responsabilidad social en la ecología.',
      link:
        'https://conciencia.eco/la-importancia-de-la-responsabilidad-social-en-la-ecologia/',
    },
    {
      referencia:
        'Comisión Mundial sobre el Medio Ambiente y el Desarrollo. (1987). Nuestro futuro común (Informe Brundtland). Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'Demanet Filippi, R. (2021). La producción agropecuaria y su impacto en el medio ambiente [PDF]. Praderas y Pasturas.',
      link:
        'https://praderasypasturas.com/documentos/103.-Catedras_Post_Grado/03.-Magister_en_Innovacion_y_Gestion_Agroalimentaria/2021/01.-Impacto_en_el_medio_ambiente_de_la_produccion_agropecuaria.pdf',
    },
    {
      referencia:
        'Desarrollo Sustentable. (s. f.). Diferencias entre sostenibilidad y desarrollo sostenible.',
      link:
        'https://desarrollo-sustentable.org/diferencias-entre-sostenibilidad-y-desarrollo-sostenible/',
    },
    {
      referencia:
        'Eurofins Environment Testing Spain. (2023, 17 de septiembre). ¿Qué es la sostenibilidad y el desarrollo sostenible?',
      link:
        'https://www.eurofins-environment.es/es/sostenibilidad-desarrollo-sostenible/',
    },
    {
      referencia:
        'Pacheco Saldarriaga J. A, & Castellar Fuentes L. C. (2019). Estrategias de producción más limpia y criterios ambientales en la planta de beneficio de ganado de COOLESAR en el municipio de Valledupar- Cesar. Universidad Popular Del Cesar.',
      link:
        'http://repositorio.unicesar.edu.co/server/api/core/bitstreams/f4d006f8-7b4f-4acf-9688-8653b6c40b67/content',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
