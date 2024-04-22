'use client'
import React, { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button/Button";

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const videoOpacity = useTransform(scrollYProgress, [1, 1], [1, 1]);

  return (
    <section className="w-full h-full">
      <div>
        <div className="relative h-[230vh] md:h-[250vh] lg:h-[220vh] 
">
          <div
            style={{
              position: "sticky",
              top: 0,
              height: '100vh',
              overflow: "hidden",
              zIndex: 0,
            }}
            ref={targetRef}
          >
            <motion.video
              autoPlay
              muted
              loop
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: videoScale,
                opacity: videoOpacity,
              }}
            >
              <source src="/media/bluepointHero.webm" type="video/webm"></source>
            </motion.video>
          </div>
        <div className="absolute z-10 inset-0 flex flex-col text-white container tracking-tight leading-none">
          <div className="flex flex-col items-center mb-96 md:mb-72 lg:mb-44 w-full">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-full w-40 md:w-48 mt-5  lg:w-56"
            />
          
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mb-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeInOut }}
          >
            <div className="flex items-start col-span-1 md:col-span-2 lg:col-span-1 ">
              <p className="text-[65px] md:text-[75px] font-normal lg:text-9xl tracking-wide leading-none">
                An{" "}
                <span className="text-[#60bfff]">energy revolution</span> is
                here.
              </p>
            </div>
            <div className=""></div>
          </motion.div>
          <div className="grid grid-cols-6">
            <motion.div
              className="flex items-start gap-6 col-span-6 lg:col-span-4 md:col-span-4 "
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              <div className="w-1 bg-white h-full"></div>
              <div className="flex flex-col items-start space-y-8">
                <p className="text-4xl md:text-7xl lg:text-7xl  ">
                  Connecting providers<br />
                  <span className="text-[#60bfff]">and homeowners.</span>
                </p>
                <p className="text-2xl md:text-3xl">
                Our mission is to streamline communication between fuel marketers and
                homeowners, unlockig real efficiencies, boosting provider profitability
                and simultaneously reduing home energy bills.
                </p>
                <Button text='Get to know us' color='white'/>
              </div>
            </motion.div>
            <div className="col-span-3 "></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      </div>
    </section>
  );
};

export default Hero;