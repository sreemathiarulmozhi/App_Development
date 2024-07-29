import React, { useState } from "react";
import Ques from "./Questions";
import "./Service.css";
import Accordion from "./Accordian";

const Service = (props) => {
  const [data] = useState(Ques); // Removed unused setData

  return (
    <div className="Service-wrapper">
      <video autoPlay muted loop className="background-video">
        <source
          src="https://videos.pexels.com/video-files/9124528/9124528-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <section className="Service-sec">
        <div className="main-div">
          <h2 className="sec-h2">Let's get you answered.</h2>
          <div className="Accordion">
            {data.map((val) => {
              const { id } = val;
              return <Accordion key={id} {...val} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;