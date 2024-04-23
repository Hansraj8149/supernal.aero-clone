'use client'
import React from 'react'
import '../app/globals.css'
import { navLinks,secondaryLinks,socials } from '@/utils'

const Header = () => {
  
  return (
    <header className='h-screen overflow-hidden bg-white'>
        <div className='aw-container mt-20 mb-10'>
    <div className="w-[80px]"><img src="/images/logo.svg" className="w-[400px] h-full" alt='blue point logo'/></div>
    
  
        <div className="aw-container">
            <div className="w-[100%] flex h-[100vh] items-center pb-[48px] gap-[24px]">
                <ul className="w-[100%] list-none pl-[16px] border-l-[2px] border border-black relative">
                    {headerLinks.map((headerLink)=> (

                        <li key={headerLink.id} className="h-[92px] flex items-center">
                        <a href={headerLink.href} className="sm:text-[32px] text-[64px] leading-none px-[8px] pt-[40px] pb-[10px] mx-[4px] my-0 flex text-black relative overflow-hidden z-9 hover:no-underline">{headerLink.label}</a>
                        <div className="absolute right-0 top-[50%] w-[66.66%] h-[125%] transform translate-y z-0 opacity-0 transition-opacity duration-500"> <img src={headerLink.imgSrc} alt={headerLink.label}/> </div>
                    </li>
                    ))}
                  
                </ul>

                <div className="w-[100%] max-w-[390PX] flex-shrink-0">
                    <ul className="mx-[24px] my-0 p-0 list-none">
                        {navLinks.map((navLink)=> (

                        <li key={navLink.id} className="w-[100%]">
                            <a href={navLink.href} className="flex items-center text-black text-[32px] h-[36px] transition duration-200 ease-in-out mt-[16px]">{navLink.label}</a>
                        </li>
                        ))}
                      
                    </ul>

                    <div>
                        <div className="flex flex-col mt-[24px]">
                            {secondaryLinks.map((secondaryLinks)=>(

                            <a key={secondaryLinks.id} href={secondaryLinks.href} className="flex text-[14px] leading-4">{secondaryLinks.label}</a>
                            ))}
                     
                        </div>

                        <div className="flex items-center gap-[24px] mt-[24px]">
                            {socials.map((social)=> (

                            <a key={social.id} href={social.href} className="text-black transition duration-200 text-[24px] hover:text-[#60bfff] hover:no-underline">{social.component}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
   
</header>
  )
}

interface HeaderLinkProps {
    id:number,
    label:string,
    imgSrc:string,
    href:string
}

const headerLinks:HeaderLinkProps[] = [
    {
        id:1,
        label:'Our approach',
        href:'#',
        imgSrc:"/images/img1.webp"
    },
    {
        id:2,
        label:'Our solutions',
        href:'#',
        imgSrc:"/images/img2.webp"
    },
    {
        id:3,
        label:'List with us',
        href:'#',
        imgSrc:"/images/img3.webp"
    },
    {
        id:4,
        label:'About us',
        href:'#',
        imgSrc:"/images/img4.webp"
    },
]

export default Header


