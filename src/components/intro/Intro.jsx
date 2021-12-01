import React from "react";
import "./intro.css";
import mypic from "../../img/mypic.png";

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
          <p className="i-desc">
            I design and develop websites and website applications for customers
            of all sizes using variety of web technologies
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={mypic} alt="mypic" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
