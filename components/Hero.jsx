import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

// Icons
import {
RiBriefcase4Fill,
RiTeamFill,
RiTodoFill,
RiArrowDownSLine
}from 'react-icons/ri'

// components
import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* Text */}
          <div className='flex max-w-[600px] flex-col justify-center max-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Lic. Tecnologías de la Información</div>
            <h1 className='h1 mb-4'>Hola, me llamo  Gabriel Resendiz</h1>
            <p className='subtitle max-w-[490px] max-auto xl:mx-0'>
               Comprometido con la excelencia en mi trabajo, buscando siempre entregar soluciones de alta calidad y mantenerme en constante aprendizaje para mejorar mis habilidades y contribuir de manera efectiva en cualquier proyecto.
              </p>
                {/* buttons */}
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-7'>
                  <Link href='/contact'>
                    <Button className='gap-x-2'>Contáctame<Send /></Button>
                  </Link>
                  <a href="/CV/CV.pdf" download>
                      <Button variant="secondary" className="gap-x-2">
                        Descargar CV <Download size={18} />
                      </Button>
                    </a>
                </div>
                {/* socials */}
                <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
              </div>
            {/* image */}
            <div className='hidden xl:flex relative'>
               {/* badge 1 */}
               <Badge 
               containerStyles='absolute top-[24%] -left-[5rem]'
               icon={<RiBriefcase4Fill />} 
               endCountNum={1} 
               badageText='Años de Experiencia'
               />
              <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
              <DevImg 
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer_prueba.png'
              />  
            </div>
          </div>
          {/* icon */}
          <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary'/>
          </div>
        </div>
      </section>
  )
}

export default Hero