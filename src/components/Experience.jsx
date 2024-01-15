import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index, associated }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[17px] leading-[24px]">
        {content}
      </p>
      <div className="flex flex-row mt-4">
        <div className="flex flex-wrap">
          {associated.map((individualSkill, index) => (
            <div key={index} className="mr-2">
              <div className="font-poppins font-semibold text-[16px]  leading-[32px] text-gradient">
                {individualSkill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h3 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Working Experience
        </h3>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
