import React from 'react'
import { MoveRight, Facebook, Youtube,Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <section className='h-full mt-10 space-y-10 bg-black'>

        <div className='flex flex-col lg:flex-row md:flex-row gap-4 justify-center lg:justify-between items-center text-white container  '>
       

            <div className='flex items-center  gap-4'>
                <img src='images/logo.svg' className=' h-full   lg:w-72 object-contain ' alt='logo image'/>
                

            </div>
            <div className='flex items-center gap-20 justify-between'>

            <div className='text-lg lg:text-2xl flex flex-col gap-4 hover:cursor-pointer'>
                <p className='hover:text-[#60bfff]'>News & Events</p>
                <p className='flex hover:text-[#60bfff] '>Careers <MoveRight/></p>
                <p className='hover:text-[#60bfff]'>Contact</p>
                <p className='hover:text-[#60bfff]'>About Us</p>

            </div>

            <div className='text-sm lg:text-md flex flex-col gap-4 hover:cursor-pointer'>
                <p className='hover:decoration-clone'>Tearms of use</p>
                <p className='flex'>Do not sell my personla information </p>
                <p>@2024 Supernal, LLC</p>
                 <div className='flex gap-2'> <Facebook/> <Youtube/><Linkedin/></div>

            </div>
            </div>



        </div>
        <img className='w-screen object-center h-full' src='images/mesh-wide.svg'/>
      
    </section>
  )
}

export default Footer
