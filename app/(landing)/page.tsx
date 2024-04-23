import Approach from '@/components/Approach'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
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
<Navbar/>
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
