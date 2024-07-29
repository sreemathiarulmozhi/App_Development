import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (firstName.length === 0 || lastName.length === 0) {
      alert("Name can't be empty!");
    } else if (email.length === 0) {
      alert("Please provide a valid Email ID!");
    } else {
      alert("Form submitted!");
    }
  };

  return (
    <>
      <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source src="https://cdn.pixabay.com/video/2022/11/22/140111-774507949_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="ContactUs-main">
        <h2 className="heading"> Feel free to contact us !</h2>
      </div>
      <div className="separator">
        <div className="form">
          <form onSubmit={submit}>
            <div className="main">
              <p> FILL YOUR DETAILS HERE. </p>
              <div className="input-fields">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="fName"
                />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lName"
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="submit-Button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="guide">
          <div className="guide-head"> A guide to donation:</div>

          <div className="text">
            <ul>
              <div>
                Rehoming or donating your pet should be easy and stress-free
                both for you and your pet.
              </div>
              <div>
                We have created a reliable, simple & free initiative to help you
                rehome your pet from your loving family directly to another
                family.
              </div>
              <div>
                Make your pet look more attractive to potential new owners. Make
                sure your pet is vaccinated and checked by a veterinarian.
              </div>
              <div>
                Be transparent/clear with the new owner. Share all the details
                about your pet's personality.
              </div>
              <br></br>
              <br></br>
              <br></br>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-div">
          <div className="first">
            <p>OUR MOTTO!</p>
          </div>
          <div className="motto">
            Animal safety | Adoption | Building new homes
          </div>
        </div>
        <div className="footer-text"> @2024| by adoptadoggo foundation</div>
        <div className="icon-section">
          <a href={() => false}>
            <FacebookIcon />
          </a>
          <a href={() => false}>
            <InstagramIcon />
          </a>
          <a href={() => false}>
            <TwitterIcon />
          </a>
          <a href={() => false}>
            <MailOutlineIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
