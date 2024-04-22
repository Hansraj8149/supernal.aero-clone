'use client'
import React from 'react'
import {easeInOut, motion} from 'framer-motion'
import { Button } from './Button/Button'

interface TextDescButtonProps {
    title:string,
    description:string,
    buttonName:string,
    span?:string,
    color:string,
}
const TextDescButton = ({title, description,buttonName,span,color}:TextDescButtonProps) => {
  return (
    <motion.div
                className={`flex items-start h-full  tracking-tight leading-tight border-${color} border-l-2 px-3`}
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5,ease:easeInOut }}
              >
                <div className={`flex flex-col items-start space-y-4 text-${color} `}>
                  <p className=" text-4xl md:text-6xl lg:text-7xl ">
                    {title} <br/>
                    <span className="text-[#60bfff]"> {span}</span>
                  </p>
                  <p className="text-[18px] ">
                 {description}
                  </p>
                  <Button text={buttonName} color={color}/>
                </div>
              </motion.div>
  )
}

export default TextDescButton
