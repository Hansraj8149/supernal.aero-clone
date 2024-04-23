import React, { ReactElement } from 'react'
import { navLinks, secondaryLinks,socials } from '@/utils'


const Footer = () => {
  return (
    <footer className='h-full overflow-hidden bg-black'>
    <div className='aw-container mt-28 mb-10'>
            <div className='flex flex-col items-center justify-center md:grid md:grid-cols-10 lg:grid lg:grid-cols-10 gap-[60px] md:gap-[24px]  lg:gap-[24px]'>
                <div className="col-span-10 md:col-span-5 lg:col-span-5 items-center">

                <img src='images/logo.svg' className=' w-[100%] md:w-[70%] lg:w-[70%]' alt='logo image'/>

                </div>
                <div className='col-span-5 grid grid-cols-2 gap-20 items-start'>


                <ul className=" col-span-1 mx-[24px] p-0 list-none">
                {navLinks.map((footerLink) => (

                        <li key={footerLink.id} className='w-[100%] '>

                        <a  href={footerLink.href} className='flex items-center text-white text-[24px] h-[36px] leading-none transition duration-300 ease-in-out mb-[16px] hover:text-[#60bfff] hover:no-underline'>{footerLink.label}</a>
                        </li>

                    ))}
                </ul>
                <div className=" col-span-1 ">
                <div className="flex flex-col gap-[24px]">
                        {secondaryLinks.map((secondaryLinks)=> (
                            <a key={secondaryLinks.id} href={secondaryLinks.href} className='flex text-[14px] leading-4 text-white hover:underline '>{secondaryLinks.label}</a>
                        ))}
                      
                    </div>
                    <div className="flex items-center gap-[24px] mt-[24px]">
                    {socials.map((socials)=> (

                            <a key={socials.id} href={socials.href} className='text-white transition duration-200 text-[32px] hover:text-[#60bfff] no-underline'>{socials.component}</a>
                        ))}
                    </div>
                </div>
            </div>
            </div>


      </div>
            <div className="h-[200px] w-[100%] overflow-hidden bg-cover bg-top " style={{backgroundImage:`url("/images/footerBg.svg")`}}></div>
            </footer>
  )
}

export default Footer

