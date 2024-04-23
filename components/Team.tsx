import React from "react";
import TextDescButton from "./TextDescButton";
import TeamCard from "./TeamCard";
import '../app/globals.css'

const Team = () => {
  return (
    <section className="py-20  bg-white h-full">
      <div className="aw-container">
        <div className="flex space-y-20 gap-[24px] borde">
          <div className="w-[100%] h-full mb-10  flex flex-col gap-20">
            <TextDescButton
          title="Efficiency."
          span="Putting the puzzle pieces together."
          description="By providing simple, intutive tools to both fuel marketers and homeowners, bluePoint's SAAS solutions are revolutionizing the home energy industry."
          buttonName="Learn more"
          color="black"
          
        />
        <TeamCard
            title="Omni-channel account management"
            description="By offering providers the choice of account management by website or app or text message. BluePoint eliminates a key pain point for energy marketers."
            buttonText="Learn more"
            imgSrc="images/TeamImg1.webp"
          />

        </div>
        <div className="w-[100%] ">
        <TeamCard
            title="By Now Pay Later"
            description={`Integration of PayPal's blue-chip, interest free "Pay in 4" installment program helps homeowners manage home finances with zero administrative burden and zero risk of customer default for the provider. `}
            buttonText="Learn More"
            imgSrc="images/TeamImg2.webp"
          />
        </div>
        </div>


       
      </div>
    </section>
  );
};

export default Team;
