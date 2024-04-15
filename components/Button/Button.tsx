import React from 'react';
import './Button.css';
import { MoveRight } from 'lucide-react';


interface ButtonProps {
  text:string,
  color:string,
}
export const Button = ({text, color}:ButtonProps) => {
  return (
    <button className={`hover-button relative overflow-hidden py-5 px-16  md:py-6 md:px-20 lg:py-7 lg:px-20 rounded-lg text-sm md:text-md lg:text-lg  bg-[#aff005] text-black ${color==='black'?'hover:bg-black hover:text-white':'hover:bg-white hover:text-black'} `}>
      <span className="text-up">{text}</span>
      <span className="text-down">{text}</span>
    </button>
  );
};



export const TransparentButton = ({text}:any) => {
  return(

  <button className="hover-button flex items-start relative overflow-hidden py-5 px-12  md:py-6 md:px-14 lg:py-7 lg:px-16 rounded-lg text-sm md:text-md lg:text-lg  text-black ">
      <span className="text-up gap-2">{text} <MoveRight className='w-3 md:w-4 lg:w-5'/></span>
      <span className="text-down gap-2">{text}<MoveRight className='w-5'/></span>
    </button>
  )
  
}
