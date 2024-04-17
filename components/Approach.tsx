'use client'
import React, { useEffect, useState } from 'react';
import { easeInOut, motion, useAnimation } from 'framer-motion';
import TextDescButton from './TextDescButton';

const Approach = () => {
  const [activeItem, setActiveItem] = useState('safe');
  const circle1Controls = useAnimation();
  const circle2Controls = useAnimation();

  const circlePositions:any = {
    safe: { circle1: { x: 'calc(50% - 50%)', y: 'calc(50% - 50%)' }, circle2: { x: 'calc(50% - 50%)', y: 'calc(50% - 50%)' } },
    quiet: { circle1: { x: 'calc(50% - 84%)', y: 'calc(50% - 50%)' }, circle2: { x: 'calc(50% - 201%)', y: 'calc(50% - 50%)' } },
    accessible: { circle1: { x: 'calc(50% - 17%)', y: 'calc(50% - 50%)' }, circle2: { x: 'calc(50% - 120%)', y: 'calc(50% - 50%)' } },
    customerCentric: { circle1: { x: 'calc(50% - 50%)', y: 'calc(50% - 20%)' }, circle2: { x: 'calc(50% - 50%)', y: 'calc(50% - 200%)' } },
  };

  const handleHover = async (item:any) => {
    await Promise.all([
      circle1Controls.start({
        x: circlePositions[item].circle1.x,
        y: circlePositions[item].circle1.y,
        transition: { duration: 0.5 }
      }),
      circle2Controls.start({
        x: circlePositions[item].circle2.x,
        y: circlePositions[item].circle2.y,
        transition: { duration: 0.5 }
      })
    ]);
    setActiveItem(item);
  };

  return (
    <section className='my-20 container'>
      <TextDescButton
        title='A pragmatic approach'
        span='to building the extraordinary.'
        description='We’re patiently and responsibly building a comprehensive solution where passengers and citizens are at the center of every decision we make.'
        buttonName='Learn more'
        color='white'
      />
      <div className='flex flex-col lg:flex-row md:flex-row mt-10 gap-2  lg:items-center lg:justify-center '>
        <div className='flex items-center justify-between lg:justify-around  lg:w-[70%]'>
          <div className='flex flex-col '>
            <ul className='text-white text-lg md:text-2xl lg:text-4xl space-y-2 font-bold'>
              {['safe', 'quiet', 'accessible', 'customerCentric'].map((item) => (
                <motion.li
                  key={item}
                  className='flex items-center gap-2'
                  onMouseEnter={() => handleHover(item)}
                  style={{ color: activeItem === item ? '#fff' : '#6b7280' }}
                  initial={{ x: 0 }}
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.1, delay: 0.1, ease: easeInOut }}
                >
                  <motion.div
                    className='bg-[#aff005] rounded-full h-4 w-4'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={activeItem === item ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0, delay: 0 }}
                  ></motion.div>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className='relative rounded-full bg-[#aff005] flex items-center justify-center h-36 w-36  md:h-72 md:w-72 lg:h-80 lg:w-80 overflow-hidden'>
            <motion.div
              className='absolute rounded-full bg-neutral-500 h-20 w-20 md:h-44 md:w-44 lg:h-48 lg:w-48'
              animate={circle1Controls}
            ></motion.div>
            <motion.div
              className='absolute rounded-full bg-neutral-600 h-14 w-14 md:h-26 md:w-26 lg:h-20 lg:w-20'
              animate={circle2Controls}
            ></motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: easeInOut }}
          className='text-white text-lg lg:text-3xl lg:w-[20%] text-start'
        >
          <p className={activeItem === 'safe' ? '' : 'hidden'}>
            We must certify our vehicles to the highest commercial aviation safety standards.
          </p>
          <p className={activeItem === 'quiet' ? '' : 'hidden'}>
            From the ground and in the cabin, the noise level will be similar to the hum of chatter you hear in a restaurant.
          </p>
          <p className={activeItem === 'accessible' ? '' : 'hidden'}>
            As part of HMG, Supernal is leveraging world-class manufacturing.
          </p>
          <p className={activeItem === 'customerCentric' ? '' : 'hidden'}>
            Designed around passengers and operators, Supernal vehicles and vertiports will be appointed with a host of modern features.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Approach;
