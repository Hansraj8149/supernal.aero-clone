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
                className={`flex items-start h-full  border-${color} border-l-2 pl-2 md:pl-8 lg:pl-8`}
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5,ease:easeInOut }}
              >
                <div className={`flex flex-col items-start space-y-5 text-${color} `}>
                  <h3 className=" text-[30px] md:text-[72px] lg:text-[80px] leading-none mt-24px ">
                    {title} <br/>
                    <span className="text-[#60bfff]"> {span}</span>
                  </h3>
                  <p className=" text-[14px] md:text-[18px] lg:text-[18px] leading-normal mt-24px"> 
                 {description}
                  </p>
                  <Button text={buttonName} color={color}/>
                </div>
              </motion.div>
  )
}

export default TextDescButton
