'use client'
import React, { useState, useEffect } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import TextDescButton from "./TextDescButton";
import '../app/globals.css'
import LineChart from "./LineChart";

const Graph = () => {
  return (
    <section className=" overflow-hidden bg-white h-full relative z-0 lg:pt-0">
     
        <LineChart />



        <div className="aw-container absolute  top-0  lg:top-28  left-5  grid grid-cols-6">
       <div className="col-span-4">

       <TextDescButton title="Realtime data." span="Real Profit gains." description="Blue point provides oil makreters with up to the inute regional and national heating oil trends, so that marketers can make informed pricing decisions, Fast." buttonName="Learn more" color="black"/>
       </div>
       <div className="col-span-2"></div>
        </div>
    </section>
  );
};

export default Graph;
