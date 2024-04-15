import React from "react";
import TextDescButton from "./TextDescButton";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="mt-30  bg-white h-full">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 container">
        <div className="mt-20 flex  w-[100%] md:w-[50%] lg:w-[50%]  h-full">

        <TextDescButton
          title="Revolution.
It’s a team effort."
          description="We know we can’t do this alone. It takes collaboration and commitment to realize an idea this bold."
          buttonName="Learn more"
          color="black"
          
        />
        </div>

        <div className=" flex mt-10 items-center justify-center md:w-[50%] lg:w-[50%]">
          <TeamCard
            title="Powered by Hyundai Motor Group"
            description="As part of HMG, Supernal has the resources and expertise to develop AAM the right way. We are taking a thoughtful and responsible approach to developing the market and ensuring it effectively integrates into communities with minimal disruption."
            buttonText="Learn more"
            imgSrc="images/TeamImg1.webp"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 container">
      <div className=" mt-10 lg:-mt-24 md:-mt-16 flex items-center justify-center w-full">
          <TeamCard
            title="Our partners"
            description="We’re continually forging relationships with policymakers, municipalities, infrastructure partners, and many other companies and organizations to lay the groundwork for a new era of flight."
            buttonText="Learn More"
            imgSrc="images/TeamImg2.webp"
          />
        </div>
        <div className="">

        </div>

       
      </div>
    </section>
  );
};

export default Team;
