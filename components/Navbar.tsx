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
        className="absolute top-4 right-4 w-16 h-16 border-none flex flex-col outline-none space-y-3 bg-transparent items-center justify-center "
        onClick={toggleMenu}
      >

        <div className={`bg-[#60bfff] w-12 h-[2px] transition-all ${isOpen ? 'rotate-45' : 'rotate-0'}`}></div>
        <div className={`bg-[#60bfff] w-12 h-[2px] transition-all ${isOpen ? '-rotate-45' : 'rotate-0'} mt-2`}></div>
      </button>
      {/* Header */}
      {isOpen && <Header />}
    </nav>
  );
};

export default Navbar;
