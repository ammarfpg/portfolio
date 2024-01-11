import { quotes } from "../assets";
import GetStarted from "./GetStarted";

const FeedbackCard = ({ content, name, title, urllink }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <p className="font-poppins font-normal text-[12px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <GetStarted urllink={urllink} />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
