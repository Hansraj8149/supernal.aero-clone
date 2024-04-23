'use client'
import React, { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button/Button";
import '../app/globals.css'


export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const videoOpacity = useTransform(scrollYProgress, [1, 1], [1, 1]);

  return (
    <section className="h-[240vh]  relative w-[100%] m-0">
          <div
            style={{
              position: "sticky",
              top: 0,
              height: '100vh',
              overflow: "hidden",
              width:"100%",
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
                maxWidth:"100%",
                height: "100%",
                minHeight:"100vh",
                objectPosition:"center",
                objectFit: "cover",
                transform: videoScale,
                opacity: videoOpacity,
              }}
            >
              <source src="/media/bluepointHero.webm" type="video/webm"></source>
            </motion.video>
          </div>
        <div className=" aw-container absolute z-10 inset-0 flex flex-col text-white tracking-tight leading-none">
          <div className="flex flex-col items-center mb-44 lg:mb-44 w-full">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-full w-40 md:w-48 mt-5  lg:w-56"
            />
          
          </div>
          <motion.div
            className=" -mt-[32vh] flex items-end overflow-hidden min-h-[92vh]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeInOut }}
          >
              <h3 className="text-[64px] md:text-[88px] lg:text-[136px] font-normal w-[100%] md:w-[80%] lg:max-w-[1048px] leading-none ">
                An{" "}
                <span className="text-[#60bfff]">energy revolution</span> is
                here.
              </h3>
          </motion.div>
            <motion.div
              className="mt-[420px] max-w-[900px] pb-[152px] flex gap-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              <div className="w-1 bg-white h-full"></div>
              <div className="flex flex-col items-start space-y-8">
                <h3 className="text-[40px] md:text-[72px] lg:text-[88px] leading-none mt-24px  ">
                  Connecting providers<br />
                  <span className="text-[#60bfff]">and homeowners.</span>
                </h3>
                <p className="text-[28px] md:text-[32px] lg:text-[40px] leading-none my-[40px]">
                Our mission is to streamline communication between fuel marketers and
                homeowners, unlockig real efficiencies, boosting provider profitability
                and simultaneously reduing home energy bills.
                </p>
                <Button text='Get to know us' color='white'/>
              </div>
            </motion.div>
            <div className="col-span-3 "></div>
          </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
};

export default Hero;