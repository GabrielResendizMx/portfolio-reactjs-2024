import {GanttChartSquare, Blocks, Gem, Icon} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const serviceData = [
    {
        Icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        tittle: 'Web Desing',
        description:'Me especializo en crear experiencias digitales centradas en el usuario que no solo son estéticamente atractivas, sino también intuitivas y funcionales. Mi enfoque combina investigación de usuarios, diseño de interfaces y pruebas iterativas para garantizar que cada proyecto cumpla con las expectativas.'
    },
    {
        Icon: <Blocks size={72} strokeWidth={0.8}/>,
        tittle: 'Web Develoment',
        description:'Como desarrollador web, me dedico a transformar ideas en sitios web interactivos y funcionales.Me adapto a distintas tecnologías y me mantengo actualizado con las últimas tendencias para asegurar que cada proyecto esté a la vanguardia. Mi enfoque abarca desde la estructuración y diseño responsivo.'
    },
    {
        Icon: <Gem size={72} strokeWidth={0.8}/>,
        tittle: 'App Development',
        description:'Desarrollo aplicaciones móviles y web que combinan diseño intuitivo con un rendimiento sólido. Desde la planificación hasta la implementación, me aseguro de que cada aplicación esté optimizada para ofrecer una experiencia de usuario fluida y eficiente. Me adapto a diferentes tecnologías.'
    },
    
]


const Services = () => {
  return <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-12 text-center mx-auto'>Servicios</h2>

            {/* grid items*/}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {serviceData.map((item, index) =>{
                    return(
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] bg-white dark:bg-background flex justify-center items-center'>{item.Icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                               <CardTitle className='mb-4'>{item.tittle}</CardTitle>
                               <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
        
    </section>
}

export default Services