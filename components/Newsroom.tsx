'use client'
import React from "react";
import NewsroomCard from "./NewsroomCard";
import {easeInOut, motion} from 'framer-motion'
import {Button} from "./Button/Button";

const Newsroom = () => {
  return (
    <section className="w-full h-full bg-white   py-20  md:py-15 lg:py-20">
      <motion.div 
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1,y:0}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5, delay:0.5, ease:easeInOut}}
      className="flex container flex-col gap-10 ">
        <div className="flex items-start justify-between">
          <h1 className="text-black  text-4xl m lg:text-6xl ">Newsroom</h1>
          <Button text='See all news' color='black'/>
         

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 items-center justify-center">
          {newses.map((news) => {
            return (
              <NewsroomCard
                title={news.title}
                date={news.date}
                imgSrc={news.imgSrc}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Newsroom;

interface NewsroomCardProps {
  imgSrc: string;
  title: string;
  date: string;
}
const newses: NewsroomCardProps[] = [
  {
    title: "Supernal Appoints David McBride Chief Technology Officer",
    date: " March 25, 2024",
    imgSrc: "images/NewsroomImg2.webp",
  },
  {
    title: "Supernal Appoints David McBride Chief Technology Officer",
    date: " March 25, 2024",
    imgSrc: "images/NewsroomImg2.webp",
  },
  {
    title: "Supernal Appoints David McBride Chief Technology Officer",
    date: " March 25, 2024",
    imgSrc: "images/NewsroomImg2.webp",
  },
  {
    title: "Supernal Appoints David McBride Chief Technology Officer",
    date: " March 25, 2024",
    imgSrc: "images/NewsroomImg2.webp",
  },
];
