'use client'
import React, { useState, useEffect } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import TextDescButton from "./TextDescButton";

const ScrollableImage = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollDirection(scrollTop > scrollY ? 'down' : 'up');
      setScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Change animation state based on scroll direction
  useEffect(() => {
    if (scrollDirection === 'down') {
      controls.start({ width: "100vw" }); // Expand image
    } else {
      controls.start({ width: "90vw" }); // Shrink image
    }
  }, [scrollDirection, controls]);

  return (
    <div className=" h-screen overflow-hidden bg-white flex items-center justify-center lg:pt-10">
      <motion.div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('images/SA2.jpg')` }}
        initial={{ width: "90vw" }} // Initial height of the image
        animate={controls}
        transition={{duration:0.8, delay:0.1, ease:easeInOut}}
        
      >
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}


        <div className="container mt-40 grid grid-cols-6">
       <div className="col-span-4">

       <TextDescButton title="Meet the" span="S-A2." description="Supernal is developing a five-seat, battery-powered electric vehicle take-off and landing (eVTOL) vehicle for commercial intra-city passenger journeys starting in 2028." buttonName="Learn more" color="white"/>
       </div>
       <div className="col-span-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollableImage;
