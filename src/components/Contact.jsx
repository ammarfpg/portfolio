import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => toast("Wow so easy !");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nnumsqs",
        "template_nlqzrsa",
        form.current,
        "L1nXwHkN6KpTJN_Uv"
      )
      .then(
        (result) => {
          <ToastContainer />;
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="footer-left">
        <p>
          Even though I am a fresh graduate with little experience, I can
          compete effectively in the software engineering sector. By
          highlighting my education, showcasing personal and academic projects,
          emphasizing relevant technical skills and certifications, and
          demonstrating soft skills such as problem-solving and teamwork, I
          present a strong foundation. Leveraging any internship or part-time
          job experience, networking, maintaining an online presence, and
          expressing enthusiasm and a willingness to learn during interviews
          further enhance my competitiveness. Customizing my resume for each
          application and staying committed to continuous learning round out a
          comprehensive strategy to stand out in the job market.
        </p>
        <br />
        <button className="hire-me" style={{ marginLeft: "20%" }}>
          <a href="mailto:ammarzaqwan2@gmail.com">Contact Me</a>
        </button>
      </div>
      <div className="footer-right">
        <h3>Huge Interest In </h3>
        <div className="interests">
          <p>Back End Development</p>
          <p>Front End Development</p>
          <p>C#</p>
          <p>JAVA</p>
          <p>React</p>
          <p>Flutter</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
