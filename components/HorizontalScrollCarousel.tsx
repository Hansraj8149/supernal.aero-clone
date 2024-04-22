"use client";
import { motion, useTransform, useScroll, easeInOut } from "framer-motion";
import { useRef } from "react";
import Cards from "./FeaturesCard";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-73%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] w-full">
      <div className="sticky container  top-20 flex  items-center overflow-hidden">

        
        
        <motion.div style={{ x }}  className="flex gap-4">
        <motion.div
       initial={{ opacity: 0, y:100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: 0, duration: 0.5,ease:easeInOut }}
         className="text-white flex justify-center items-center lg:w-[550px] w-[300px] ">
          <div className="w-[3px] mr-5 bg-white lg:h-[300px] h-[200px]"></div>

          <p className="tracking-tight leading-none lg:text-[72px]  text-[35px]">
            <span className="text-[#60bfff]">Why</span>
            <br /> Advanced Air Mobility?
          </p>
          <img src="images/logo.png" className="lg:h-20 lg:w-20 h-10 w-10 rotate-90" />
          <img src="images/logo.png" className="lg:h-20 lg:w-20 h-10 w-10 rotate-90" />
        </motion.div>
        
          {cards.map((card) => {
            return <Cards card={card} key={card.id}  />;
          })}
        </motion.div>
        </div>

    </section>
  );
};

type CardType = {
  url: string;
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/img1.webp",
    title: "AAM is progress for humanity",
    description:
      "Hyundai Motor Group was built around the belief that humanity evolves with mobility. Every day, we strive to achieve our vision of “Progress for Humanity” by addressing global problems with locally integrated mobility solutions. Supernal is dedicated to realizing the promise of AAM - an emerging technology that can make a positive impact across the world.",
    id: 1,
  },
  {
    url: "/images/img2.webp",
    title: "Seamless transportation",
    description:
      "Supernal is a critical part of this vision. With time, AAM will help deliver more seamless travel with the introduction of another everyday transportation choice that supports existing options.",
    id: 2,
  },
  {
    url: "/images/img3.webp",
    title: "Sustainable technology",
    description:
      "Our vehicle is fully electric, and the supporting infrastructure will use cleaner and more efficient sources of energy than current methods of air transportation. We believe these advancements in sustainable technology will eventually yield wider adoption across the aviation industry.",
    id: 3,
  },
  {
    url: "/images/img4.webp",
    title: "Economic growth",
    description:
      "One important output of AAM will be job creation. The industry and surrounding value chain will create thousands of opportunities for a range of skills and technical competencies.",
    id: 4,
  },
  {
    url: "/images/img5.webp",
    title: "Connected communities",
    description:
      "Electric air vehicles will not replace today’s modes of transportation. Rather, they will integrate with and augment existing options to fill gaps and add capacity to strained transit networks.",
    id: 5,
  },
];
