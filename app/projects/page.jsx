'use client'
import React, {useState} from "react"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
      image: '/work/calculadora.png',
      category: 'JS',
      name:'Calculadora',
      description: 'Calculadora con libreria de animacion',
      link:'https://gabrielresendizmx.github.io/Proyectos%20para%20portafolio/Calculadora/index.html',
      github:'https://github.com/GabrielResendizMx',
  },
  {
      image: '/work/necShop.png',
      category: 'JS',
      name:'E-Shop',
      description: 'Tienda online con carrito de compras',
      link:'https://gabrielresendizmx.github.io/Proyectos%20para%20portafolio/E-comers/index.html',
      github:'https://github.com/GabrielResendizMx',
  },
  {
      image: '/work/travel.png',
      category: 'JS',
      name:'Landin Page de Viajes',
      description: 'Pagina web',
      link:'https://travel-website-bygabrieldev.netlify.app/',
      github:'https://github.com/GabrielResendizMx/Travel-Website-JS',
  },
  {
      image: '/work/cripto.png',
      category: 'React JS',
      name:'Criptomonedas',
      description: 'Calcula el precio de las criptomonedas con el consumo de una API.',
      link:'https://cute-kashata-b3b322.netlify.app/',
      github:'https://github.com/GabrielResendizMx/criptos-react',
  },
  {
      image: '/work/TodoList.png',
      category: 'React JS',
      name:'Tareas',
      description: 'Se pueden agregar tareas, eliminar y marcar como terminadas.',
      link:'https://todolisappgabrieldev.netlify.app/',
      github:'https://github.com/GabrielResendizMx/ToDo_listApp',
  },
  {
      image: '/work/petShop.png',
      category: 'React JS',
      name:'Formulario PetShop',
      description: 'Validacion de formulario',
      link:'https://gabrielresendizmx.github.io/Proyectos%20para%20portafolio/Pet-Shop/registro.html',
      github:'https://github.com/GabrielResendizMx',
  },
  {
    image: '/work/controlgastos.png',
    category: 'React JS',
    name:'Control de gastos',
    description: 'Calcula el dinero que tienes actualmente y lleva un control, historial de los gatsos que ralizas en la semana o mes. ',
    link:'https://tranquil-faloodeh-56717c.netlify.app/',
    github:'https://github.com/GabrielResendizMx/control-gastos-react',
},
{
  image: '/work/controlCitas.png',
  category: 'React JS',
  name:'Control de Citas',
  description: 'Controla las Citas de pacientes en una veterninaria',
  link:'https://celadon-valkyrie-fc2a3f.netlify.app/',
  github:'https://github.com/GabrielResendizMx/control-citas-react',
},
  {
    image: '/work/2.png',
    category: 'FullStack',
    name:'Proximamente...',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur alias dolor, placeat sed delectus nulla in illo quisquam maxime officia eligendi quod velit quae quis tempora sunt',
    link:'/',
    github:'/',
},
{
    image: '/work/2.png',
    category: 'FullStack',
    name:'Proximamente...5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur alias dolor, placeat sed delectus nulla in illo quisquam maxime officia eligendi quod velit quae quis tempora sunt',
    link:'/',
    github:'/',
},
{
    image: '/work/2.png',
    category: 'FullStack',
    name:'Proximamente...',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur alias dolor, placeat sed delectus nulla in illo quisquam maxime officia eligendi quod velit quae quis tempora sunt',
    link:'/',
    github:'/',
},
  
];

//remove category duplicates
const uniqueCategories = ['All projects', ...new Set(projectData.map((item) => item.category))]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All projects');

  const filteredProjects = projectData.filter(project => {
    // if category is 'all projects' return all projects, else fulter by category
    return category === 'All projects'
    ? project
    : project.category === category
  });



  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My projects
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
            {filteredProjects.map((project, index) => {
            return <TabsContent value = {category} key={index}>
              <ProjectCard project={project}/>
            </TabsContent>
          })}

          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
