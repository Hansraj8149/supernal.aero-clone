'use client'
import React from 'react'
import TextDescButton from './TextDescButton'
import '../app/globals.css'
import {easeInOut, motion} from 'framer-motion'
const HeatFleet = () => {
  return (
    <section className='bg-black h-[60vh] md:h-[80vh] lg:h-[100vh] relative overflow-hidden my-20'>
      <div className='absolute  w-[100%]    z-0'>
      <video
        autoPlay
        muted
        loop
      className='aw-banner-video'
      >
        <source src="/media/supernalNetwork.mp4" type="video/mp4" />
      </video>
</div>
      <div className=' aw-container grid grid-cols-2 absolute z-10 my-24 left-0 '>


        <TextDescButton
          title='The Heat Fleet'
          span='Marketplace'
          description='The pioneering marketing and sales system for will-call liquid heating fuel delivery.'
          buttonName='Visit HeatFleet.com'
          color='white'
        />

        <motion.div
        initial={{opacity:0,y:300}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.9, delay:0.5, ease:easeInOut}}
         className=' absolute top-0 left-2/4 flex items-end justify-end'>

        <img src='images/MobileImg.webp' className='h-3/4 w-3/4  rounded-3xl' alt='mobile image'/>
        </motion.div>
        </div>

      <div className=" z-8 absolute inset-0 bg-black opacity-40"></div>

    </section>
  )
}

export default HeatFleet
