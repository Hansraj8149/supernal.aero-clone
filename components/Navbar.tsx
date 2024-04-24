'use client'
import React, { useState, useEffect } from 'react';
import Header from './Header';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburgerBlack, setIsHamburgerBlack] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const companySection = document.getElementById("companySection");
      if (companySection) {
        const sectionTop = companySection.getBoundingClientRect().top;
        setIsHamburgerBlack(sectionTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky z-20 top-0 cursor-pointer bg-white">
      {/* Hamburger Menu */}
      <button
        className={`absolute top-0 right-0 md:right-8 lg:right-8 w-16 h-16 border-none flex flex-col space-y-4 md:space-y-7 lg:space-y-7 outline-none bg-transparent items-center justify-center `}
        onClick={toggleMenu}
      >
        <span className={` ${isOpen ? 'rotate-45 translate-y-[7.5px] md:translate-y-[12px] lg:translate-y-[12px] !bg-black' : 'rotate-0'} ${isHamburgerBlack && !isOpen ? 'bg-black' : 'bg-white'} absolute w-6 h-[1.5px] md:w-12 md:h-[2px] lg:w-12 lg:h-[2px] transition-all `}></span>
        <span className={` ${isOpen  ? '-rotate-45 !bg-black ' : 'rotate-0'} ${isHamburgerBlack && !isOpen ? 'bg-black' : 'bg-white'} absolute w-6 h-[1.5px] md:w-12 md:h-[2px] lg:w-12 lg:h-[2px] transition-all  mt-2`}></span>
      </button>
      {/* Header */}
      {isOpen && <Header />}
    </nav>
  );
};

export default Navbar;
