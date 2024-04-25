'use client'
import React, { useState, useEffect } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import '../app/globals.css'
import { Button } from "./Button/Button";


// pages/index.js
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./LineChart"),
  {
    ssr: false,
  }
);




const Graph = () => {
  return (
    <section className=" overflow-hidden bg-white h-full   relative z-0 lg:pt-0">
     
     <DynamicComponent />




        <div className="aw-container absolute  top-0 lg:top-28  left-5  grid grid-cols-6">
       <div className="col-span-4">
       <motion.div
                className="flex items-start h-full  border-black border-l-2 pl-2 md:pl-8 lg:pl-8"
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5,ease:easeInOut }}
              >
                <div className="flex flex-col items-start space-y-5 text-black">
                  <h3 className=" text-[30px] md:text-[66px] lg:text-[80px] leading-none mt-24px ">
                  Realtime data. <br/>
                    <span className="text-[#60bfff]"> Real Profit gains.</span>
                  </h3>
                  <p className=" text-[14px] md:text-[16px] lg:text-[18px] leading-normal mt-24px"> 
                  Blue point provides oil makreters with up to the inute regional and national heating oil trends, so that marketers can make informed pricing decisions, Fast.
                  </p>
                  <Button text='Learn more' color='black'/>
                </div>
              </motion.div>
       </div>
       <div className="col-span-2"></div>
        </div>
    </section>
  );
};

export default Graph;
