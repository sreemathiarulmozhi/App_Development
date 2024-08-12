import React from "react";
import PetCard from "./PetCard";
import "./PetShop.css";

const PetShop = () => (
  <div className="pet-shop-container">
    <video autoPlay loop muted className="background-video">
      <source
        src="https://videos.pexels.com/video-files/4755631/4755631-hd_1920_1080_24fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <main className="pet-shop-content">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <br></br>
      <br></br> */}
      <h2 className="browse-pets-heading">Browse Pets</h2>
      <div className="pet-links">
        <div className="pet-item">
          <a href="/dogs" className="pet-link">
            <img
              src="data:image/jpeg;base64,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"
              alt="Dogs"
              className="pet-image"
            />
            <span>Dogs</span>
          </a>
        </div>
        <div className="pet-item">
          <a href="/cats" className="pet-link">
            <img
              src="https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg"
              alt="Cats"
              className="pet-image"
            />
            <span>Cats</span>
          </a>
        </div>
        <div className="pet-item">
          <a href="/birds" className="pet-link">
            <img
              src="https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg"
              alt="Birds"
              className="pet-image"
            />
            <span>Birds</span>
          </a>
        </div>
        <div className="pet-item">
          <a href="/cows" className="pet-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTlCVK3XhWzv2PAlbfUI3C5_UziGuTOmZLg&s"
              alt="Cows"
              className="pet-image"
            />
            <span>Cows</span>
          </a>
        </div>
        <div className="pet-item">
          <a href="/goats" className="pet-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBZveP_CHLNXtSbisySn3l6uQLZuKGsUkZg&s"
              alt="Goats"
              className="pet-image"
            />
            <span>Goats</span>
          </a>
        </div>
        <div className="pet-item">
          <a href="/fish" className="pet-link">
            <img
              src="data:image/jpeg;base64,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"
              alt="Fishes"
              className="pet-image"
            />
            <span>Fishes</span>
          </a>
        </div>
      </div>
      <br></br>
      <div></div>
    </main>
  </div>
);

export default PetShop;