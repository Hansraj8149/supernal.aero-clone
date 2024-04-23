'use client'
import React from 'react'
import '../app/globals.css'
import { navLinks, secondaryLinks, socials } from '@/utils'

const Header = () => {
  return (
    <header className='h-screen w-[100%] overflow-hidden bg-white'>
      <div className='aw-container mt-10 mb-10'>
        <div className="w-[100%] flex items-center justify-center mb-5">
        <img src="/images/logo.png" className="w-[400px] h-[100px] border border-black" alt='blue point logo' />
        </div>
          <div className="w-[100%] h-[100vh-112px] flex items-center pt-[48px] gap-[24px]  ">
            <ul className="w-[100%] list-none pl-[16px] mr-[32px] border-black border-l-[2px] relative">
              {headerLinks.map((headerLink) => (
                <li key={headerLink.id} className="h-[92px] flex items-center aw-nav-item ">
                  <a href={headerLink.href} className="text-[32px] lg:text-[64px] aw-nav-link">{headerLink.label}</a>
                  <div className="aw-nav-item-image">
                    <img src={headerLink.imgSrc} alt={headerLink.label} className='w-[100%] h-[100%] object-cover object-center' />
                  </div>
                </li>
              ))}
            </ul>

            <div className="w-[100%] max-w-[390px] font-normal flex flex-col items-end justify-end">
              <ul className="mt-[24px] p-0 list-none">
                {navLinks.map((navLink) => (
                  <li key={navLink.id} className="w-[100%] flex flex-col items-end justify-end hover:underline">
                    <a href={navLink.href} className="flex items-center text-black text-[24px] lg:text-[32px] h-[36px] transition duration-200 ease-in-out mb-[16px]">{navLink.label}</a>
                  </li>
                ))}
              </ul>
              <div>
                <div className="flex flex-col mt-[24px] items-end justify-end gap-2">
                  {secondaryLinks.map((secondaryLinks) => (
                    <a key={secondaryLinks.id} href={secondaryLinks.href} className="flex  text-[10px] lg:text-[14px] leading-4 text-black">{secondaryLinks.label}</a>
                  ))}
                </div>
                <div className="flex items-end justify-end gap-[24px] mt-[24px]">
                  {socials.map((social) => (
                    <a key={social.id} href={social.href} className="text-black transition duration-200 text-[16px] lg:text-[24px] hover:text-[#60bfff] hover:no-underline">{social.component}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

interface HeaderLinkProps {
  id: number,
  label: string,
  imgSrc: string,
  href: string
}

const headerLinks: HeaderLinkProps[] = [
  {
    id: 1,
    label: 'Our approach',
    href: '#',
    imgSrc: "/images/NewsroomImg1.jpg"
  },
  {
    id: 2,
    label: 'Our solutions',
    href: '#',
    imgSrc: "/images/img2.webp"
  },
  {
    id: 3,
    label: 'List with us',
    href: '#',
    imgSrc: "/images/img3.webp"
  },
  {
    id: 4,
    label: 'About us',
    href: '#',
    imgSrc: "/images/img4.webp"
  },
]

export default Header
