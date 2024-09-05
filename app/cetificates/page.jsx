'use client'
import React, {useState} from "react"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import CertificateCard from "@/components/CertificateCard"

const CertificateData = [
    //Front - End 
    {
        image: '/certificates/front-end/front-end.png',
        category: 'front-end',
        name:'Certificado Front-End',
        description: 'Curso integral que abarcó desde Flexbox y layouts responsivos hasta JavaScript avanzado. Aprendí a posicionar elementos, manejar la arquitectura CSS, y manipular el DOM con JavaScript. También adquirí habilidades en validación de formularios, orientación a objetos, herencia, interfaces y CRUD con JavaScript asíncrono.',
        link:'https://app.aluracursos.com/degree/certificate/cd8b9ac5-bd20-4135-b21b-3d92c659c9bf',
    },
    {
        image: '/certificates/front-end/html-css.png',
        category: 'front-end',
        name:'HTML Y CSS',
        description: 'Curso completo sobre HTML5 y CSS3, desde la creación de una primera página web hasta el dominio de Flexbox y layouts responsivos. Aprendí sobre formularios, tablas, y posicionamiento avanzado, además de abordar la arquitectura CSS para optimizar el desarrollo.',
        link:'https://app.aluracursos.com/degree/certificate/4097ad8b-30c6-4f61-b366-b20809d2ca47',
    },
    {
        image: '/certificates/front-end/React-js.png',
        category: 'front-end',
        name:'React JS',
        description: ' Curso sobre ReactJS que cubrió el desarrollo con JavaScript, el funcionamiento de los componentes, la navegación con React Router, y el uso de Styled Components. Aprendí a trabajar con Function Components, Hooks, contextos y buenas prácticas en React.',
        link:'/',
    },
    {
        image: '/certificates/front-end/JS_crud.png',
        category: 'front-end',
        name:'Certificado JS Crud',
        description: 'Curso sobre comunicación asíncrona que incluyó el uso de Fetch API, creación y eliminación de clientes, edición de datos y manejo de async/await',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/js-web-crud-javascript-asincrono/certificate',
    },
    {
        image: '/certificates/front-end/JS_dom.png',
        category: 'front-end',
        name:'Certificado JS Dom',
        description: 'Curso sobre el DOM que abarcó el manejo de formularios, y la gestión de tareas en una lista: agregar, concluir y eliminar tareas.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/js-web-manipulacion-dom-javascript/certificate',
    },
    {
        image: '/certificates/front-end/principiante-en-programacion.png',
        category: 'front-end',
        name:'Certificado Principiante en programación',
        description: 'Curso introductorio de JavaScript que incluyó condicionales, concatenación, loops y buenas prácticas en programación, junto con un desafío final.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/logica-programacion-sumergete-programacion-javascript/certificate',
    },
    {
      image: '/certificates/front-end/HTML_P1.png',
      category: 'front-end',
      name:'Certificado HTML5 y CSS3 parte 1',
      description: 'Curso sobre diseño web que abarcó la marcación de texto, separación de contenido, trabajo con CSS, estilización de imágenes, manejo de listas y divisiones, y finalización de la página',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/html5-css3-primera-pagina-web/certificate',
  },
  {
      image: '/certificates/front-end/HTML_P2.png',
      category: 'front-end',
      name:'Certificado HTML5 y CSS3 parte 2',
      description: 'Curso sobre diseño web que incluyó la creación de nuevas páginas, navegación entre ellas, posicionamiento de elementos, gestión de listas de productos, manejo de bordes, captura de eventos con CSS y finalización de la página de productos.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/html5-css3-posicionamiento-listas-navegacion/certificate',
  },
  {
      image: '/certificates/front-end/HTML_P3.png',
      category: 'front-end',
      name:'Certificado HTML5 y CSS3 parte 3',
      description: 'Curso sobre diseño web que cubrió la creación de nuevas páginas, el inicio y mejora de formularios, uso de diferentes tipos de campos, mejora de la semántica, CSS avanzado y estructura de tablas.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/html5-css3-formularios-tablas/certificate',
  },
  {
    image: '/certificates/front-end/HTML_P4.png',
    category: 'front-end',
    name:'Certificado HTML5 y CSS3 parte 4',
    description: 'Curso sobre diseño web que incluyó la adaptación de la página inicial, integración de contenido externo, mejora del CSS, selección de elementos, uso de opacidad y sombra, y diseño responsivo.',
    link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/html5-css3-avanzando-css/certificate',
  },
  {
    image: '/certificates/front-end/CSS_Arquitectura.png',
    category: 'front-end',
    name:'Certificado Arquitectura CSS',
    description: 'Curso de diseño web que abarcó el layout base y la estilización de la cabecera, banner, sección "sobre", recetas, "quienes somos", y el pie de página, incluyendo la responsividad',
    link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/arquitectura-css-descomplicando-problemas/certificate',
  },
  {
    image: '/certificates/front-end/CSS_flexbox.png',
    category: 'front-end',
    name:'Certificado CSS Flexbox',
    description: 'curso sobre Flexbox que incluyó la introducción a Flexbox y la creación del encabezado, estilización del footer y control de elementos, diseño con Grid y limitaciones de Flexbox, ajustes para mobile, y desafíos adicionales sobre Flexbox.',
    link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/flexbox-posicione-elementos-pantalla/certificate',
  },
  {
  image: '/certificates/front-end/CSS_grid.png',
  category: 'front-end',
  name:'Certificado CSS Grid',
  description: 'Curso de diseño web que abarcó la definición del diseño base, el diseño de secciones destacadas y populares, la aplicación de estilos al encabezado, menú y pie de página, y la optimización para que el sitio sea receptivo.',
  link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/html5-css3-avanzando-css/certificate',
  },
  {
    image: '/certificates/front-end/CSS_layoutsresponsivos.png',
    category: 'front-end',
    name:'Certificado Layouts Responsivos',
    description: 'Curso sobre diseño web que incluyó herramientas, unidades e imágenes, diseño para dispositivos móviles y uso de variables CSS, adaptación a las particularidades de las pantallas, semántica HTML, y evolución del diseño de mobile a desktop.',
    link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/layouts-responsivos-layouts-mobile/certificate',
    },

  //Java
    {
      image: '/certificates/java/java_8.png',
      category: 'java',
      name:'Certificado Java 8',
      description: 'curso sobre Java 8 que abarcó métodos por defecto, uso de lambdas, reducción de código con referencias de método, y manejo avanzado de colecciones con Streams, Collectors y APIs.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-8-nuevos-recursos/certificate',
    },
    {
      image: '/certificates/java/java_collections.png',
      category: 'java',
      name:'Certificado Java Dominando las Collections',
      description: 'Curso sobre colecciones en Java que incluyó trabajo con ArrayList, listas de objetos, relaciones entre listas, uso de la interfaz Set, métodos equals y hashCode, otros tipos de Set e iteradores, y el manejo de Maps.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-dominando-collections/certificate',
    },
    {
    image: '/certificates/java/java_util.png',
    category: 'java',
    name:'Certificado Java y Java.util',
    description: 'Curso sobre estructuras de datos en Java que abarcó arrays, almacenamiento de referencias, ArrayList y generics, métodos equals y manejo de listas, Vector e interfaz Collection, clases wrapper, ordenación de listas, y uso de clases anónimas y lambdas.',
    link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-util-coleciones-wrappers-lambda-expressions/certificate',
    },
    {
      image: '/certificates/java/java_streams.png',
      category: 'java',
      name:'Certificado Java y Java.io',
      description: 'Curso sobre manejo de archivos en Java que incluyó lectura y escritura con Java.io, uso de FileWriter y PrintStream, manejo de java.util.Scanner, encoding y charsets, y serialización de objetos.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-java-io-streams-reader-writers/certificate',
    },
    {
      image: '/certificates/java/java_poo.png',
      category: 'java',
      name:'Certificado Java OO',
      description: 'Curso de Java sobre orientación a objetos que abordó el problema del paradigma procedimental, introducción a la orientación a objetos, definición de comportamientos, composición de objetos, encapsulamiento y visibilidad, así como constructores y miembros estáticos.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-parte2-introduccion-orientada-objetos/certificate',
    },
    {
      image: '/certificates/java/java_polirmosfimo.png',
      category: 'java',
      name:'Certificado Java Polimorfismo',
      description: 'Curso de Java sobre herencia que cubrió la introducción a la herencia, uso de super y reescritura de métodos, polimorfismo, herencia con constructores, clases y métodos abstractos, interfaces, y práctica con herencia e interfaces.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-parte-3-entendiendo-herencia-interfaces/certificate',
      },
      {
        image: '/certificates/java/java_streams.png',
        category: 'java',
        name:'Certificado Java y Java.lang',
        description: 'Curso de Java sobre organización de clases que cubrió la organización con paquetes, los modificadores de acceso, distribución de código, el paquete java.lang y la clase Object.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-lang-clase-object-string/certificate',
      },
      {
        image: '/certificates/java/java_exepciones.png',
        category: 'java',
        name:'Certificado Java Excepciones',
        description: 'Curso sobre manejo de excepciones en Java que abarcó la pila de ejecución, tratamiento y lanzamiento de excepciones, diferencias entre excepciones checked y unchecked, aplicación de excepciones, y el uso de finally y try with resources.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-excepciones/certificate',
      },
      {
        image: '/certificates/java/java_db.png',
        category: 'java',
        name:'Certificado Java Y JDBC',
        description: 'Curso de Java sobre JDBC que incluyó la introducción a JDBC, ejecución de comandos SQL, mejoras en el proyecto, escalabilidad con pool de conexiones, creación de la capa de persistencia con DAO y la prevención de queries N + 1.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-jdbc-trabajando-base-datos/certificate',
        },
         //Python
      {
        image: '/certificates/python/p_datasc.png',
        category: 'python',
        name:'Certificado Python Introducción al Lenguaje',
        description: 'Curso de Python que abarcó variables, funciones y conceptos de lenguaje de alto nivel, uso de parámetros, condicionales y conversión de datos, manejo de listas, bucles y tipos booleanos, así como el sistema de importación de librerías',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-8-nuevos-recursos/certificate',
      },
      {
        image: '/certificates/python/p_fun_libre.png',
        category: 'python',
        name:'Certificado Python para Data Science',
        description: 'Curso sobre Python y análisis de datos que incluyó listas estáticas con tuplas, mapeo de datos con diccionarios, organización del código mediante funciones y paquetes, y el uso de la biblioteca Pandas para análisis de datos.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/python-data-science-funciones-librerias-pandas-basico/certificate',
      },
      {
      image: '/certificates/python/p_trata_analisis.png',
      category: 'python',
      name:'Certificado Python Pandas',
      description: 'Curso sobre análisis de datos que incluyó la importación de datos, manejo de series e índices, filtrado de datos, análisis de frecuencias de inmuebles, tratamiento de datos faltantes, creación de nuevas variables y estadística descriptiva.',
      link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-util-coleciones-wrappers-lambda-expressions/certificate',
      },
      //Cybersecurity
      {
        image: '/certificates/cybersecurity/cybersecurity_1.png',
        category: 'Cybersecurity',
        name:'Certificado Fundamentos de la ciberseguridad',
        description: 'Curso de ciberseguridad que cubrió las habilidades básicas para ser analista, el impacto de los ataques en operaciones comerciales, la ética en seguridad, y las herramientas comunes utilizadas en el análisis de ciberseguridad',
        link:'https://www.coursera.org/account/accomplishments/certificate/YSMSLVS6HW7N',
      },
      {
        image: '/certificates/cybersecurity/cybersecurity_2.png',
        category: 'Cybersecurity',
        name:'Certificado Gestiona los riesgos de seguridad',
        description: 'Curso de ciberseguridad que incluyó la identificación de amenazas, riesgos y vulnerabilidades para operaciones comerciales, el uso de marcos y controles de seguridad en organizaciones, la definición y uso de herramientas SIEM para analizar riesgos y vulnerabilidades, y la aplicación de estrategias para responder a amenazas.',
        link:'https://www.coursera.org/account/accomplishments/certificate/615CMZ7FM7M9',
      },
      {
      image: '/certificates/cybersecurity/cybersecurity_3.png',
      category: 'Cybersecurity',
      name:'Certificado Redes y seguridad de redes',
      description: ' Curso sobre redes que abarcó la definición de tipos de redes y sus componentes, el envío y recepción de datos a través de una red, la protección contra tácticas de intrusión, y técnicas de fortalecimiento del sistema.',
      link:'https://www.coursera.org/account/accomplishments/certificate/WSW5HHXZVMBZ',
      },
      //Idiomas
      {
        image: '/certificates/idiomas/certificado_ingles.png',
        category: 'Idiomas',
        name:'Certificado Inglés',
        description: 'Certificado que obtuvo al finalizar el diplomado de inglés.',
        link:'https://1drv.ms/b/c/a0cdcc0bef698df4/EXPlsZHngI1HvfshGW5c8CwBJiX8UKuyZc5rNLsYOGVH9A?e=6whQg3',
      },
      {
        image: '/certificates/idiomas/diplomado_ingles.png',
        category: 'Idiomas',
        name:'Diplomado Inglés',
        description: 'Diplomado de inglés que incluyó los Steps 1 a 5, abarcando niveles progresivos de aprendizaje y habilidades en el idioma.',
        link:'https://onedrive.live.com/?cid=A0CDCC0BEF698DF4&id=A0CDCC0BEF698DF4%21s3206a16ec5274c90aa468eb252b86752&parId=A0CDCC0BEF698DF4%21205&o=OneUp',
      },
      {
      image: '',
      category: 'Idiomas',
      name:'Proximamente',
      description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis libero reiciendis non quia molestias dolorum, nisi repellat vitae adipisci facilis obcaecati ullam illum eveniet. Laudantium ipsam veritatis cupiditate numquam debitis.', 
      link:'#',
      },
];

//remove category duplicates
const uniqueCategories = ['All certificates', ...new Set(CertificateData.map((item) => item.category))]

const Certificates = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All certificates');

  const filteredProjects = CertificateData.filter(project => {
    // if category is 'all projects' return All certificates, else fulter by category
    return category === 'All certificates'
    ? project
    : project.category === category
  });



  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Certificates
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return <TabsTrigger
              onClick={() => setCategory(category)}
              value={category} 
              key={index} 
              className='capitalize w-[162px] md:w-auto'
              >
                {category}
                </TabsTrigger>
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((certificate, index) => {
            return <TabsContent value = {category} key={index}>
              <CertificateCard certificate={certificate}/>
            </TabsContent>
          })}

          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Certificates


