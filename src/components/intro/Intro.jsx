import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Ahmad Adejumo</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Backend Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop websites and website applications for customers
            of all sizes using variety of web technologies
          </div>
        </div>
      </div>
      <div className="i-left">Right</div>
    </div>
  );
};

export default Intro;
