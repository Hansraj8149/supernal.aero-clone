import React from 'react'
import {easeInOut, motion} from 'framer-motion'
const Cards = ({card}: {card:CardType}) => {
  return (
   
        <motion.div
        initial = {{opacity:0, y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.1, ease:easeInOut}}
        
        key={card.id}
        className="h-auto lg:h-[500px] lg:w-[900px] overflow-hidden"
      >
         
          <div className="flex lg:flex-row flex-col lg:gap-4  lg:w-[900px] w-[300px]">
            <img src={card.url} className="lg:w-[450px]"/>
            <div className="text-white flex flex-col items-start justify-center gap-4 lg:w-[450px]">
                <h1 className="lg:text-[32px] text-[24px]">{card.title}</h1>
                <p className='lg:text-[18px] text-[15px]'>{card.description}</p>
            </div>

       
         
        </div>

      </motion.div>

    
  )
}

export default Cards


type CardType = {
    url: string;
    title: string;
    description:string;
    id: number;
  };
  
  const cards: CardType[] = [
    {
      url: "/images/img1.webp",
      title: "AAM is progress for humanity",
      description:"Hyundai Motor Group was built around the belief that humanity evolves with mobility. Every day, we strive to achieve our vision of “Progress for Humanity” by addressing global problems with locally integrated mobility solutions. Supernal is dedicated to realizing the promise of AAM - an emerging technology that can make a positive impact across the world.",
      id: 1,
    },
    {
      url: "/images/img2.webp",
      title: "Seamless transportation",
      description:"Supernal is a critical part of this vision. With time, AAM will help deliver more seamless travel with the introduction of another everyday transportation choice that supports existing options.",
      id: 2,
    },
    {
      url: "/images/img3.webp",
      title: "Sustainable technology",
      description:"Our vehicle is fully electric, and the supporting infrastructure will use cleaner and more efficient sources of energy than current methods of air transportation. We believe these advancements in sustainable technology will eventually yield wider adoption across the aviation industry.",
      id: 3,
    },
    {
      url: "/images/img4.webp",
      title: "Economic growth",
      description:"One important output of AAM will be job creation. The industry and surrounding value chain will create thousands of opportunities for a range of skills and technical competencies.",
      id: 4,
    },
    {
      url: "/images/img5.webp",
      title: "Connected communities",
      description:"Electric air vehicles will not replace today’s modes of transportation. Rather, they will integrate with and augment existing options to fill gaps and add capacity to strained transit networks.",
      id: 5,
    },
  ];