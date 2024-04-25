import HeatingOilFinder from '@/components/HeatingOilFinder'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Graph from '@/components/Graph'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import HeatFleet from '@/components/HeatFleet'
import Newsroom from '@/components/Newsroom'
import ScrollingText from '@/components/ScrollingText'
import Team from '@/components/Team'
import React from 'react'

import "../globals.css";

const LandingPage = () => {
  return (
    <>
    <div className='bg-black' >
<Navbar/>
      <Hero/>
      {/* <HorizontalScroll/> */}
      <Features/>
      <HeatFleet/>
      <HeatingOilFinder/>
      <Team/>

      <Graph/>
      <ScrollingText/>
      <Newsroom/>
    

    <Footer/>
    </div>
    </>
  )
}

export default LandingPage
