import React, { useState } from "react";
import Ques from "./Questions";
import "./Service.css";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";

const Service = (props) => {
  const [data] = useState(Ques);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

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
          <div className="Accordian">
            {data.map((val) => {
              const { id } = val;
              return <Accordian key={id} {...val} />;
            })}
          </div>
          <input
            type="file"
            id="file-upload"
            className="file-upload"
            multiple
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload" className="upload-pet-button">
            Choose File
          </label>
          <div className="uploaded-files">
            {uploadedFiles.length > 0 && (
              <ul>
                {uploadedFiles.map((file, index) => (
                  <li key={index}>
                    <a
                      href={URL.createObjectURL(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link to="/donate" className="donate-button">
            Donate Fund
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;