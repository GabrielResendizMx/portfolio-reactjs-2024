import Form from "@/components/Form"
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text & Ilustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* Text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
               Hola👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Listo para Trabajar juntos 💪</h1>
            <p className='subtitle max-w-[400px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam excepturi placeat asperiores earum atque! Asperiores repellat commodi perferendis nam voluptatem.
            </p>
          </div>
          {/* Ilustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* Info text y form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary'/>
              <div>gabriel.resendizDev@outlook.com</div>
            </div>
              {/* adress */}
              <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary'/>
              <div>Queretaro, Qro. MEX.</div>
            </div>
              {/* phone */}
              <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary'/>
              <div>+52 442 155 2939</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
