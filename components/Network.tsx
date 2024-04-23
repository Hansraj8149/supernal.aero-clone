import React from 'react'
import TextDescButton from './TextDescButton'
import '../app/globals.css'

const Network = () => {
  return (
    <section className='bg-black h-screen relative overflow-hidden my-20'>
      <div className='absolute  w-[100%] h-[100%] z-0'>
      <video
        autoPlay
        muted
        loop
      className='aw-banner-video'
      >
        <source src="/media/supernalNetwork.mp4" type="video/mp4" />
      </video>
</div>
      <div className=' aw-container absolute z-10 my-24 left-0 '>


        <TextDescButton
          title='The Heat Fleet'
          span='Marketplace'
          description='The pioneering marketing and sales system for will-call liquid heating fuel delivery.'
          buttonName='Visit HeatFleet.com'
          color='white'
        />

        </div>

      <div className=" z-8 absolute inset-0 bg-black opacity-40"></div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> Overlay */}
    </section>
  )
}

export default Network
