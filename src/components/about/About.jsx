import React from "react";
import "./about.css";
import mypic from "../../img/mypic.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={mypic} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">I am a Fullstack web developer</p>
        <p className="a-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nemo eum dolorem illum impedit eius, maiores, explicabo ducimus velit
          ex molestiae suscipit dicta voluptate consequatur iure rerum
          asperiores deserunt dolores!
        </p>
      </div>
    </div>
  );
};

export default About;
