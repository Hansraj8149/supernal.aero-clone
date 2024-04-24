'use client'
import React, { useState, useEffect } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import TextDescButton from "./TextDescButton";
import '../app/globals.css'
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

  useEffect(() => {
    if (scrollDirection === 'down') {
      controls.start({ width: "100vw" }); 
    } else {
      controls.start({ width: "90vw" });
    }
  }, [scrollDirection, controls]);

  return (
    <div className=" overflow-hidden bg-white flex items-center justify-center  ">
      <motion.div
        className="w-full h-[80vh] md:h-[90vh] lg:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url('images/SA2.jpg')` }}
        initial={{ width: "90vw" }} 
        animate={controls}
        transition={{duration:0.8, delay:0.1, ease:easeInOut}}
        
      >


        <div className="aw-container mt-40 grid grid-cols-6">
       <div className="col-span-4">

       <TextDescButton title="Realtime data." span="Real Profit gains." description="Blue point provides oil makreters with up to the inute regional and national heating oil trends, so that marketers can make informed pricing decisions, Fast." buttonName="Learn more" color="white"/>
       </div>
       <div className="col-span-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollableImage;
