import React from 'react'
import {  TransparentButton } from './Button/Button'


interface NewsroomCardProps {
    imgSrc:string,
    title: string,
    date:string,

}
const NewsroomCard = ({title, imgSrc,date,}:NewsroomCardProps) => {
  return (
    <div className='flex flex-col items-start h-full gap-2  text-black'>
        
        <img src={imgSrc} alt={title} className='h-full object-contain'/>
        <div className='flex items-start text-center text-xs lg:text-sm gap-2'>

        <span >PRESS RELEASE</span> | <span className='text-gray-400'>{date}</span>
        </div>
        <span className='text-bold text-lg md:text-xl lg:text-2xl '>{title}</span>
      <TransparentButton text='Learn More'/>
    </div>

  )
}

export default NewsroomCard
