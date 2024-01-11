import styles from "../style";
import { GitHub } from "../assets";

const GetStarted = ({ urllink }) => (
  <a href={urllink} target="_blank" rel="noopener noreferrer">
    <div
      className={`${styles.flexCenter} w-[70px] h-[60px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-button-gradient w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <img
            src={GitHub}
            alt="arrow-up"
            className="w-[25px] h-[25px] object-contain"
          />
        </div>
      </div>
    </div>
  </a>
);

export default GetStarted;
