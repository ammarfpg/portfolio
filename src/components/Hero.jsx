import styles from "../style";
import { Developer, discount, robot } from "../assets";
import { TypeAnimation } from "react-type-animation";
import GetResume from "./GetResume";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-gradient font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Fresh <br className="sm:block hidden" /> <span>Graduate</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetResume />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Software Engineer.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A fresh graduate of Bachelor of Software Engineering from UPM, I am a
          highly motivated person that has keen interest in software
          development. Currently enroll as a Full Stack Developer in my current
          job training under TalentLabs that will end on this January 2024 .
          Looking for job opportunity to contribute my skill while also expand
          the experience that I will be gained as a Junior Developer
        </p>
      </div>

      <div className={`flex-col flex ${styles.flexCenter}`}>
        <TypeAnimation
          className="font-poppins font-semibold text-[40px]"
          sequence={[
            "Hello , I am Ammar Zaqwan",
            1000,
            "Aspire to be a Junior Developer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <img src={Developer} className="w-[700px] h-[700px] relative x-[1]" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
