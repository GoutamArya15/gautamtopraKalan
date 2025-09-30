import React from "react";
import "../assets/IntroSection.css";

import img from "../assets/Gemini_Generated_Image_1esd141esd141esd.png";

const IntroSection = () => {
  return (
    <>
      <section className="intro-section d-flex align-items-center justify-content-between">
        {/* Left Text */}
        <div className="intro-text">
          <h1 className="intro-subtitle">HELLO. I'M</h1>
          <h1 className="intro-name">GAUTAM ARYA</h1>
          <p className="intro-pronouns">
            <span className="brackets">&lt;</span> He/Him{" "}
            <span className="brackets">/&gt;</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="" id="image">
          <div className="image-wrapper">
            <img src={img} alt="profile" className="intro-img" />
          </div>
        </div>
      </section>

      <div class="intro-image text-center" id="responsive_image">
        <div class="image-wrapper">
          <img alt="profile" class="intro-img" src="/src/assets/Gemini_Generated_Image_1esd141esd141esd.png" /></div>
      </div>


    </>

  );
};

export default IntroSection;
