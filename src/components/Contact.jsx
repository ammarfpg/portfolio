import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../style";

const contactConfig = {
  YOUR_EMAIL: "ammarzaqwan2@gmail.com",
  YOUR_FONE: "017 655 7749",
  description:
    " I would like to thank you for visiting my page and also for considering me as one of your candidate",
};

const Contact = () => {
  return (
    <Container id="contact">
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="font-poppins font-bold text-[24px] leading-[23.4px]">
            Contact Me
          </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="font-poppins font-bold text-[18px] ">
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
