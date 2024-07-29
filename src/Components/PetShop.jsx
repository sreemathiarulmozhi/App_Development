import React from "react";
import PetCard from "./PetCard";
import "./PetShop.css";

const PetShop = () => (
  <div className="pet-shop-container">
    <video autoPlay loop muted className="background-video">
      <source src="https://videos.pexels.com/video-files/4755631/4755631-hd_1920_1080_24fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <main className="pet-shop-content">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
      </div>
    </main>
  </div>
);

export default PetShop;
