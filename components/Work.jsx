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
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image: '/work/petShop.png',
        category: 'JS',
        name:'PetShop',
        description: 'Validacion e Formulario',
        link:'https://gabrielresendizmx.github.io/Proyectos%20para%20portafolio/Pet-Shop/registro.html',
        github:'https://github.com/GabrielResendizMx',
    },
    {
        image: '/work/necShop.png',
        category: 'JS',
        name:'E-Comerse',
        description: 'E-Shop con carrito de compras',
        link:'https://gabrielresendizmx.github.io/Proyectos%20para%20portafolio/E-comers/index.html',
        github:'https://github.com/GabrielResendizMx',
    },
    {
        image: '/work/calculadora.png',
        category: 'JS',
        name:'Calculadora',
        description: 'Calculadora con librerias de animación',
        link:'https://gabrielresendizmx.github.io/Proyectos%20para%20portafolio/Calculadora/index.html',
        github:'https://github.com/GabrielResendizMx',
    },
    {
        image: '/work/2.png',
        category: 'React',
        name:'App control de gastos 4',
        description: 'App para controlar tus gastos',
        link:'https://tranquil-faloodeh-56717c.netlify.app/',
        github:'https://github.com/GabrielResendizMx',
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

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Proyectos</h2>
                <p className='subtitle mb-8'>Algunos proyectos personales en lo que he trabajado.</p>
                <Link  href='/projects'><Button>Ver todos</Button></Link>
            </div>

             {/* slider */}
             <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView: 2
                    }
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                    {/* show only the firs 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project, index) => {
                        return <SwiperSlide key={index}>
                            <ProjectCard project={project}/>
                        </SwiperSlide>
                    })}
                </Swiper>
             </div>
        </div>
    </section>
  )
}

export default Work