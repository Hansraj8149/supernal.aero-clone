import React from 'react'
import TextDescButton from './TextDescButton'

const Network = () => {
  return (
    <div className='h-screen w-full mt-5 relative'>
      <video
        autoPlay
        muted
        loop
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Added inline styles for video
      >
        <source src="/media/supernalNetwork.mp4" type="video/mp4" />
      </video>

      <div className=' container absolute top-0 left-0 lg:left-20 md:left-10 z-10 py-24 '>
        <div className=' h-full'>

        <TextDescButton
          title='The Heat Fleet'
          span='Marketplace'
          description='The pioneering marketing and sales system for will-call liquid heating fuel delivery.'
          buttonName='Visit HeatFleet.com'
          color='white'
        />
        </div>
      </div>

      <div className=" z-8 absolute inset-0 bg-black opacity-30"></div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> Overlay */}
    </div>
  )
}

export default Network
