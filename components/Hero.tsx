'use client'
import React from "react";
import { easeInOut, motion } from "framer-motion";
import {Button} from "./Button/Button";

export const Hero = () => {
  return (
    <section className="w-full h-[220vh] md:h-[270vh] lg:h-[220vh] relative">
      <div className="relative h-full">
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/media/supernalHero.mp4" type="video/mp4" />
        </video>
        <div className="absolute z-10 inset-0 flex flex-col text-white container tracking-tight leading-none">
          <div className="flex flex-col items-center mb-80 md:mb-36 lg:mb-32 w-full">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20"
            />
            <span className="text-[15px] md:text-[20px] lg:text-[20px]">
              supernal
            </span>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mb-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeInOut }}
          >
            <div className="flex items-start col-span-1 md:col-span-2 lg:col-span-1 ">
              <p className="text-[65px] md:text-[88px] lg:text-9xl tracking-wide leading-none">
                A{" "}
                <span className="text-[#aff005]">mobility revolution</span> is
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
                <p className="text-4xl md:text-7xl lg:text-8xl  ">
                  Building tomorrow.<br />
                  <span className="text-[#aff005]">From the ground up.</span>
                </p>
                <p className="text-2xl md:text-3xl">
                  Our mission is to make Advanced Air Mobility (AAM) an additional
                  safe and reliable option for everyday transportation needs. We’re
                  currently developing an electric vertical take-off and landing
                  (eVTOL) vehicle and a scalable, electrified, clean-energy
                  ecosystem that will integrate seamlessly with existing transit
                  infrastructure.
                </p>
                <Button text='Get to know us' color='white'/>
              </div>
            </motion.div>
            <div className="col-span-2 "></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;
