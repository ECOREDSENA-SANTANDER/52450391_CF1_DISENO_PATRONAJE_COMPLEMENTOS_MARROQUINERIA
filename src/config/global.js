export default {
  global: {
    Name: 'Explorando el mundo de la marroquinería',
    Description:
      'Para incursionar en el diseño de marroquinería, es fundamental comprender los conceptos básicos que dan inicio al proceso creativo y permiten desarrollar productos alineados con las tendencias actuales. La innovación juega un papel clave en este proceso, ya que consiste en aplicar la creatividad mediante nuevas ideas y conceptos, otorgando valor agregado a los artículos, ya sea de manera tangible o intangible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Apropiación de conceptos básicos de marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              ' Materiales e insumos utilizados en marroquinería, clases y características',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Materiales para la elaboración de moldes, tipos, características',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Inspiración para el diseño',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Desarrollo y evaluación del producto o prototipo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trazado de modelos para diseños en marroquinería',
        desarrolloContenidos: true,
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_52450391_DU.zip',
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
  complementario: [
    {
      tema: 'Inspiración para el diseño',
      referencia:
        'Emely Rivera. (2020, 25 mayo). Sistema isométrico [Vídeo]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gK4CC6D9I4c',
    },
    {
      tema: 'Apropiación de conceptos básicos de marroquinería.',
      referencia:
        'PALE INGENIERIA DEL CUERO. (2020, 3 abril). Dibujo isométrico Bolso pinza 90° [Vídeo]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uAz2wPNICBI',
    },
    {
      tema: 'Desarrollo y evaluación del producto o prototipo',
      referencia:
        'Emely Rivera. (2021, 2 junio). Sesión 4 El bolso y sus partes -formas de bolsos tipo pinza. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6gcoD2MWe3Y',
    },
  ],
  glosario: [
    {
      termino: 'Cremallera',
      significado:
        'mecanismo de cierre compuesto por dos filas de dientes que se enganchan mediante un deslizador, usado en productos de marroquinería.',
    },
    {
      termino: 'Curtido',
      significado:
        'proceso químico o vegetal que estabiliza la piel animal para su uso en la fabricación de productos de cuero.',
    },
    {
      termino: 'Diseño',
      significado:
        'herramienta estratégica que permite la creación y desarrollo de productos funcionales y estéticos en la marroquinería.',
    },
    {
      termino: 'Encaje',
      significado:
        'técnica utilizada en el trazado de modelos para definir la estructura y proporciones de un producto.',
    },
    {
      termino: 'Forro',
      significado:
        'material interno empleado en productos de marroquinería para mejorar la resistencia, durabilidad y estética.',
    },
    {
      termino: 'Guata',
      significado:
        'material acolchado usado en marroquinería para proporcionar volumen, suavidad y aislamiento térmico.',
    },
    {
      termino: 'Herrajes',
      significado:
        'accesorios metálicos como hebillas, remaches y mosquetones utilizados para dar funcionalidad y estética a los productos.',
    },
    {
      termino: 'Insumo',
      significado:
        'material o componente procesado que interviene en la fabricación de productos, como hilos, adhesivos y forros.',
    },
    {
      termino: 'Marroquinería',
      significado:
        'arte y técnica de transformar el cuero en productos funcionales y estéticos como bolsos, billeteras y correas.',
    },
    {
      termino: '<i>Mood board</i>',
      significado:
        'herramienta visual que organiza imágenes, colores y texturas para representar conceptualmente una colección de diseño.',
    },
    {
      termino: 'Pigmento',
      significado:
        'sustancia que aporta color a los materiales sin penetrar en su superficie, disponible en diferentes acabados.',
    },
    {
      termino: 'Reata',
      significado:
        'tejido resistente utilizado en la confección de correas, cinturones y asas para bolsos y maletines.',
    },
    {
      termino: 'Salpa',
      significado:
        'material elaborado con fibras de cuero recuperado, utilizado para reforzar y dar estructura a productos de marroquinería.',
    },
    {
      termino: 'Tafeta',
      significado:
        'tejido sintético o de acetato utilizado en forros internos de marroquinería por su suavidad y resistencia.',
    },
    {
      termino: 'Tendencia',
      significado:
        'influencia derivada de cambios en la moda, el arte o el estilo de vida, que guía el desarrollo de nuevas colecciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'José María Ibáñez Gimeno. (2000). Gestión de diseño en la empresa, Editorial McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá y Cundinamarca. (2006). Balance tecnológico cadena productiva marroquinera en Bogotá.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nohora Amparo Nieto Cárdenas',
          cargo: 'Gestora desarrollo de programas',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital ',
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
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
