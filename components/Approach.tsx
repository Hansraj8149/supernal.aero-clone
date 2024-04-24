'use client'
import React, { useEffect, useState } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';
import TextDescButton from './TextDescButton';
import '../app/globals.css'

const Approach = () => {

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
     <div className='h-full w-full'>
      <img src='/images/WebsiteImg.png' alt='website image' className='h-full w-full'/>
     </div>
     </div>

    </section>
  );
}

export default Approach;
