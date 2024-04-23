import React, { ReactElement } from 'react'
import { MoveRight, Facebook, Youtube,Linkedin } from 'lucide-react'
import { url } from 'inspector'

const Footer = () => {
  return (
    <section className='h-full overflow-hidden bg-black'>
        <div className='aw-container mt-20 mb-10'>
            <div className='px-[80px] grid grid-cols-12 gap-[24px]'>
                <div className="col-span-4">

                <img src='images/logo.svg' className='w-[100%]' alt='logo image'/>

                </div>

                <ul className="col-start-7 col-span-3 mx-[24px] p-0 list-none">
                    {footerNavLinks.map((footerLink) => (
                        <li key={footerLink.id} className='w-[100%] '>

                        <a  href={footerLink.href} className='flex items-center text-white text-[24px] h-[36px] leading-none transition duration-300 ease-in-out mb-[16px] hover:text-[#60bfff] hover:no-underline'>{footerLink.label}</a>
                        </li>

                    ))}
                </ul>
                <div className="col-start-10 col-span-3 ">
                    <div className="flex flex-col gap-[24px]">
                        {footerSecondaryLinks.map((secondaryLinks)=> (
                            <a key={secondaryLinks.id} href={secondaryLinks.href} className='flex text-[14px] leading-4 text-white hover:underline '>{secondaryLinks.label}</a>
                        ))}
                      
                    </div>
                    <div className="flex items-center gap-[24px] mt-[24px]">
                        {footerSocials.map((socials)=> (
                            <a key={socials.id} href={socials.href} className='text-white transition duration-200 text-[32px] hover:text-[#60bfff] no-underline'>{socials.component}</a>
                        ))}
                    </div>
                </div>
            </div>

      </div>
            <div className="h-[200px] w-[100%] overflow-hidden bg-cover bg-top " style={{backgroundImage:`url("/images/footerBg.svg")`}}></div>
    </section>
  )
}

export default Footer

interface LinkProps {
    id:number,
    href:string,
    label:string,
}
interface  footerSocialsProps {
    id:number,
    href:string,
    component:ReactElement
}

const footerNavLinks:LinkProps[] = [
    {
        id:1,
        href:'',
        label:`News & Events`
    },
    {
        id:2,
        href:'',
        label:'Careers'
    },
    {
        id:3,
        href:'',
        label:'Contact'
    },
    {
        id:1,
        href:'',
        label:'About us'
    },
   
]

const footerSecondaryLinks: LinkProps[] =[
    {
        id:1,
        href:"#",
        label:"Privacy"
    },
    {
        id:2,
        href:"#",
        label:"Term of use"
    },
    {
        id:3,
        href:"#",
        label:"Do not sell my personal information"
    },
    {
        id:4,
        href:"#",
        label:'\u00A9 2024 BluePoint website, LLC'
    },
]

const footerSocials:footerSocialsProps[]=[
    {
        id:1,
        href:"#",
        component:<Facebook/>
    },
    {
        id:2,
        href:"#",
        component:<Youtube/>
    },
    {
        id:3,
        href:"#",
        component:<Linkedin/>
    },
  
]