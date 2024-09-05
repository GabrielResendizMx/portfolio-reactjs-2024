import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
    Phone,
    University
} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Gabriel Resendiz',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+52 442 155 2939',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'Gabriel.resendizDev@outlook.com',
    },
    {
        icon: <Calendar size={20} />,
        text: '17 Diciembre',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Licenciado en Tecnologias de la informacion',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Querétaro, Qro, MEX.',
    },

]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'INSTITUTO UNIVERSITARIO DEL CENTRO DE MEXICO', 
                qualification: 'Licenciatura en Tecnologías de la Información',
                years: '2020 - 2024',
            },
            {
                university: 'TecMilenio',
                qualification: 'Maestría en Gestió de Tecnologías de la Información',
                years: '2024 - Septiembre actualmente en curso',
            },
        ]
    },
    {
        title: 'meritos',
        data: [
            {
                company: 'Orcale + Alura', 
                qualification: 'Desarrollador Back-End',
                years: '2024 - Actualmente en curso',
            },
            {
                company: 'Inroads', 
                qualification: 'Cybersecurity',
                years: '2024 - Actualmente en curso',
            },
            {
                company: 'Orcale + Alura',
                qualification: 'Desarrollador Front-End',
                years: '2021 - 2022',
            },
            {
                company: 'Vanguardia Academica',
                qualification: 'Curso de Ingles B2+',
                years: '2023 - 2024 Finalizado',
            },
            {
                company: 'Fundación Pro Universitaria A.C',
                qualification: 'Programa Jóvenes que Impactan - 3 Generación',
                years: '2021 - 2022',
            },
        ]
    },
]


const skillData = [
    {
        title: 'skills',
        data: [
            {
                name:'HTML, XML',
            },
            {
                name:'CSS, Bostrap, Tailwind',
            },
            {
                name:'Fron-end Develoment',
            },
            {
                name:'JavaScript, React JS',
            },
            {
             name:'Back-end Develoment, Java, Phyton',
            },
            {
                name:'Cybersecurity',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath:'/about/vscode.svg',
            },
            {
                imgPath:'/about/figma.svg',
            },
            {
                imgPath:'/about/wordpress.svg',
            },
            {
                imgPath:'/about/notion.svg',
            },
        ],
    }
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  

  return (
    <section className='xl:h-[1150px] pb-12 xl:py-24'> 
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                About me
            </h2>
            
            <div className='flex flex-col xl:flex-row'>
            {/* Image*/}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
                </div>

                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='meritos'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>

                        {/* tabs content*/}
                        <div className='text-lg mt-12 xl:mt-8'>
                            {/* personal info*/}
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Servicio de calida</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                    Soy un apasionado del desarrollo de software, siempre en busca de nuevas tecnologías y metodologías que me permitan mejorar y estar a la vanguardia en el mercado. Mi compromiso con el trabajo y la responsabilidad me impulsan a entregar proyectos de alta calidad, cumpliendo con los plazos y superando las expectativas. Estoy convencido de que la clave para el éxito radica en mantenerse actualizado y adaptable a los constantes cambios en la industria tecnológica.
                                    </p>
                                     {/*icons*/}
                                     <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index) => {
                                            return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                     </div>
                                     {/*languages*/}
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary'>Lenguage Skill</div>
                                        <div className='border-b border-border'></div>
                                        <div>Español nativo, Inglés B+.</div>
                                    </div>
                                </div>
                            </TabsContent>
                              {/* Scholar info*/}
                            <TabsContent value='meritos'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>
                                        Mi asombroso recorrido
                                        </h3>
                                     {/* experience & education wrapper*/}
                                     <div className='grid md:grid-cols-2 gap-y-8'>
                                        <div>
                                             {/*  education*/}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28}/> 
                                                    <h4 className='h4 capitalize font-medium'>
                                                    {getData(qualificationData,'education').title}
                                                    </h4>
                                                </div>
                                                {/* List */}
                                                <div className='flex flex-col gap-y-8'>
                                                  {getData(qualificationData, 'education').data.map((
                                                    item, index) => {
                                                        const {university, qualification, years} = item;
                                                        return(
                                                            <div className='flex gap-x-8 group' key={index}>

                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                  )}
                                                </div>
                                            </div>
                                        </div>    

                                         {/*meritos*/} 
                                         <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase size={28}/> 
                                                    <h4 className='h4 capitalize font-medium'>
                                                    {getData(qualificationData,'meritos').title}
                                                    </h4>
                                                </div>
                                                {/* List */}
                                                <div className='flex flex-col gap-y-8'>
                                                  {getData(qualificationData, 'meritos').data.map((
                                                    item, index) => {
                                                        const {company, qualification, years} = item;
                                                        return(
                                                            <div className='flex gap-x-8 group' key={index}>

                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                  )}
                                                </div>
                                            </div>   
                                    </div>
                                </div>
                            </TabsContent>
                            {/* Skills*/}
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>Herramientas que utilizo Everyday</h3>
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* skill list*/}
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) =>{
                                                const {name} = item;
                                                return( 
                                                <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}
                                                >
                                                    <div className='font-medium'>{name}</div>
                                                </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    
                                     {/* Tools*/}
                                     <div>
                                        <h4 className='h4 text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* Tools list*/}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(skillData, 'tools').data.map((item, index) =>{
                                                const {imgPath} = item
                                                return(
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt="" priority/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                     </div>
                                </div>
                            
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About