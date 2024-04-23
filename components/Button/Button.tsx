import React from 'react';
import './Button.css';
import { MoveRight } from 'lucide-react';


interface ButtonProps {
  text:string,
  color:string,
}
export const Button = ({ text, color }: ButtonProps) => {
  return (
    <button className={`hover-button font-medium relative overflow-hidden h-[42px]  lg:h-[56px] min-w-[140px] lg:min-w-[180px] text-[14px]  lg:text-[18px] text-center px-[12px] py-[24px] cursor-pointer inline-flex justify-center items-center bg-[#60bfff] text-black ${color === 'black' ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'} `} >
      <span className="text-up inline-flex">{text}</span>
      <span className="text-down inline-flex">{text}</span>
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
