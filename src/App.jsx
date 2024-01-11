import React from "react";
import styles from "./style";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Business from "./components/Business";

const App = () => {
  return (
    <div className="bg-primary text-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
