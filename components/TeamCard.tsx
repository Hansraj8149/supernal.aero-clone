'use client'
import React from 'react'
import { MoveRight } from 'lucide-react'
import {easeInOut, motion} from 'framer-motion'
import { TransparentButton } from './Button/Button'

interface TeamCardProps {
    title:string,
    description:string,
    imgSrc:string,
    buttonText:string,
}
const TeamCard = ({title,description,imgSrc, buttonText}:TeamCardProps) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}} 
    whileInView={{opacity:1, y:0}}
    transition={{delay:0.5, duration:0.5, ease:easeInOut}}
    className='flex gap-2 flex-col items-start '>
        <img src={imgSrc} className='w-full'/>
        <p className='text-3xl font-bold'>{title}</p>
        <p className='text-md'>{description}</p>
        <TransparentButton  text={buttonText}/>

      
    </motion.div>
  )
}

export default TeamCard
