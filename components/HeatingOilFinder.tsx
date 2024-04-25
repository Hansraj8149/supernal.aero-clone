'use client'
import React, { useEffect, useState } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';
import TextDescButton from './TextDescButton';
import '../app/globals.css'

const HeatingOilFinder = () => {

  return (
    <section className='my-20 aw-container'>
      <div className='flex flex-col gap-20'>

      <TextDescButton
        title='Heating Oil Finder'
        span='HVAC Directory'
        description='purpose-build directory to help homeowners discover full service providers.'
        buttonName='HeatingOilFinder.com'
        color='white'
      />
     <div className='h-full w-full flex items-end justify-end'>
      <img src='/images/WebsiteImg.webp' alt='website image' className='h-1/4 w-2/3'/>
     </div>
     </div>

    </section>
  );
}

export default HeatingOilFinder;
