import { saveAs } from "file-saver";
import styles from "../style";
import ResumePDF from "../assets/Files/resume.pdf"; // Update the import name
import { Resume } from "../assets";

const GetResume = () => {
  const downloadResume = async () => {
    try {
      const response = await fetch(ResumePDF); // Update the reference to ResumePDF
      if (!response.ok) {
        throw new Error(
          `Failed to download the resume. Status: ${response.status}`
        );
      }

      const blob = await response.blob();
      saveAs(blob, "Ammar Zaqwan Resume.pdf");
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      onClick={downloadResume}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-button-gradient w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <h4 className="font-poppins font-bold text-[18px] leading-[23.4px]">
            <span>Get</span>
          </h4>
          <img
            src={Resume}
            className="w-[50px] h-[30px] object-contain"
            alt="Resume Icon"
          />
        </div>

        <h4 className="font-poppins font-bold text-[18px] leading-[23.4px]">
          <span>Resume</span>
        </h4>
      </div>
    </div>
  );
};

export default GetResume;
