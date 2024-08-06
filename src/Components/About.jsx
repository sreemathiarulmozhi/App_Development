// About.jsx
import React from "react";
import "./about.css";
import CountUp from "react-countup";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <section className="About-wrapper">
        <video autoPlay muted loop className="background-video">
          <source
            src="https://videos.pexels.com/video-files/7682708/7682708-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="paddings innerWidth flexCenter About-container">
          <div className="flexColStart About-left">
            <div className="About-title">
              <div className="circle" />
              <div className="f-circle" />
              <div className="s-circle" />
              <h1>
                Find your <br /> paw-perfect
                <br />
                friend
              </h1>
            </div>
            <div className="count">
              <br></br>
              <br></br>
              <h1>#AdoptLoveCare campaign</h1>
            </div>
            <div className="flexColStart About-desc">
              <span>Gift a home to the cutest paws of your choice.</span>
              <span>Bring home your tail-trail partner.</span>
            </div>
            <br></br>
            <br></br>
          </div>
          <div className="flexCenter About-right"></div>
        </div>
      </section>
      <div className="stats">
        <div className="stat">
          <span>
            <CountUp start={1000} end={9000} duration={10} />
            <span>+</span>
          </span>
          <p className="text">pets adopted</p>
        </div>
        <div className="stat">
          <span>
            <CountUp start={1000} end={6000} duration={10} />
            <span>+</span>
          </span>
          <p className="text"> paw-tnerships</p>
        </div>
        <div className="stat">
          <span>
            <CountUp start={100} end={1000} duration={10} />
            <span>+</span>
          </span>
          <p className="text"> Lives Connected</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
