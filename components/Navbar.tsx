'use client'
import React, { useState } from 'react';
import Header from './Header';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky z-20 top-0 cursor-pointer   bg-white">
      {/* Hamburger Menu */}
      <button
        className="absolute top-0 right-6 w-16 h-16 border-none flex flex-col space-y-7 outline-none  bg-transparent items-center justify-center "
        onClick={toggleMenu}
      >

        <div className={`bg-[#60bfff] absolute w-12 h-[2px] transition-all ${isOpen ? 'rotate-45 translate-y-[12px] bg-black' : 'rotate-0'}`}></div>
        <div className={`bg-[#60bfff] absolute w-12 h-[2px] transition-all ${isOpen ? '-rotate-45 bg-black ' : 'rotate-0'} mt-2`}></div>
      </button>
      {/* Header */}
      {isOpen && <Header />}
    </nav>
  );
};

export default Navbar;
