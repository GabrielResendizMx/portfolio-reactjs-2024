
'use client';
import Link from "next/link";
import { Button } from "./ui/button";


//import swiper react components
import {Swiper, SwiperSlide} from "swiper/react";

// import swiper styles
import'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'

// components
import CertificateCard from "./CertificateCard";

const CertificateData = [
    {
        image: '/certificates/front-end/front-end.png',
        category: 'front-end',
        name:'Certificado Front-End',
        description: 'Desarrollador web con formación especializada en front-end, recientemente completé una capacitación impartida por Oracle + Alura.',
        link:'https://app.aluracursos.com/degree/certificate/cd8b9ac5-bd20-4135-b21b-3d92c659c9bf',
    },
    {
        image: '/certificates/more_certicates/jovenes-impcatan.png',
        category: 'Jovenes que Impactan',
        name:'Capacitación Jóvenes que Impactan',
        description: 'Programa a nivel estatal sobre elaboración de CV y preparación de entrevista, participación en actividades de desarrollo profesional como conferencias y sesiones de mentoría/coaching.',
        link:'https://1drv.ms/b/c/a0cdcc0bef698df4/EfSNae8LzM0ggKDOAAAAAAABcRDieOauEaDPxYH53QRfuA?e=HlOXue',
    },
    {
        image: '/certificates/java/java_8.png',
        category: 'java',
        name:'Certificado Java 8',
        description: 'Aprendi a explora colecciones con forEach en Java 8, reducir líneas de código con Lambdas, aplica filtros y mapeos con Streams, y dominar la nueva API de fechas. Iniciar en programación funcional con conceptos que optimizan tu código.',
        link:'https://app.aluracursos.com/user/gabriel-resendizmx/course/java-8-nuevos-recursos/certificate',
    },
    {
        image: '/certificates/ingles/diplomado_ingles.png',
        category: 'ingles',
        name:'Diplomado de Inglés',
        description: 'Tome un diplomado de inglés para el mejoramiento del lenguaje en el Instituto Vanguardia Académica ',
        link:'https://1drv.ms/b/c/a0cdcc0bef698df4/EW6hBjInxZBMqkaOslK4Z1IBQTOWD8ATzt-8nYVnfdVY3A?e=e7jdr2',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name:'App control de gastos 5',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur alias dolor, placeat sed delectus nulla in illo quisquam maxime officia eligendi quod velit quae quis tempora sunt',
        link:'/',
        github:'/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name:'App control de gastos 6',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur alias dolor, placeat sed delectus nulla in illo quisquam maxime officia eligendi quod velit quae quis tempora sunt',
        link:'/',
        github:'/',
    },
    
];

const Certificate = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Certificaciones</h2>
                <p className='subtitle mb-8'>Algunos de los certificados que he obtenido participando en diferentes programas educativos a lo largo de mi camino</p>
                <Link href='/cetificates'><Button>Ver todos</Button></Link>
            </div>

             {/* slider */}
             <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView: 2
                    }
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                    {/* show only the firs 4 projects for the slides */}
                    {CertificateData.slice(0, 4).map((certificate, index) => {
                        return <SwiperSlide key={index}>
                            <CertificateCard certificate={certificate}/>
                        </SwiperSlide>
                    })}
                </Swiper>
             </div>
        </div>
    </section>
  )
}

export default Certificate