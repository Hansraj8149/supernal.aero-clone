import Approach from '@/components/Approach'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Network from '@/components/Network'
import Newsroom from '@/components/Newsroom'
import ScrollableImage from '@/components/S-A2'
import ScrollingText from '@/components/ScrollingText'
import Team from '@/components/Team'
import React from 'react'

const LandingPage = () => {
  return (
    <>
    <div className='bg-black' >

      <Hero/>
      {/* <HorizontalScroll/> */}
      <Features/>
      <Network/>
      <Approach/>
      <Team/>

      <ScrollableImage/>
      <ScrollingText/>
      <Newsroom/>
    

    <Footer/>
    </div>
    </>
  )
}

export default LandingPage
