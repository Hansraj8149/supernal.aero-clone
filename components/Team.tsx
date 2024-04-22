import React from "react";
import TextDescButton from "./TextDescButton";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="mt-30  bg-white h-full">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 container">
        <div className="mt-20 flex  w-[100%] md:w-[50%] lg:w-[50%]  h-full">

        <TextDescButton
          title="Efficiency."
          span="Putting the puzzle pieces together."
          description="By providing simple, intutive tools to both fuel marketers and homeowners, bluePoint's SAAS solutions are revolutionizing the home energy industry."
          buttonName="Learn more"
          color="black"
          
        />
        </div>

        <div className=" flex mt-10 items-center justify-center md:w-[50%] lg:w-[50%]">
          <TeamCard
            title="Omni-channel account management"
            description="By offering providers the choice of account management by website or app or text message. BluePoint eliminates a key pain point for energy marketers."
            buttonText="Learn more"
            imgSrc="images/TeamImg1.webp"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 container">
      <div className=" mt-10 lg:-mt-24 md:-mt-16 flex items-center justify-center w-full">
          <TeamCard
            title="By Now Pay Later"
            description={`Integration of PayPal's blue-chip, interest free "Pay in 4" installment program helps homeowners manage home finances with zero administrative burden and zero risk of customer default for the provider. `}
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
