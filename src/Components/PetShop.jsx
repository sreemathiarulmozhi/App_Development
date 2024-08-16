import React from "react";
import "./PetShop.css";

const PetShop = () => (
  <div className="pet-shop-container">
    <video autoPlay loop muted className="background-video">
      <source
        src="https://assets.mixkit.co/videos/49334/49334-720.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <main className="pet-shop-content">
      <h2 className="browse-pets-heading">Discover Our Pets</h2>
      <div className="pet-links">
        <div className="pet-item">
          <img
            src="data:image/jpeg;base64,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" // Ensure the URL is correct
            alt="Dogs"
            className="pet-image"
          />
          <div className="pet-info">
            <span className="pet-name">Dogs</span>
            <p className="pet-description">Friendly and loyal companions.</p>
            <a href="/dogs" className="pet-link">Explore</a>
          </div>
        </div>
        <div className="pet-item">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
            alt="Cats"
            className="pet-image"
          />
          <div className="pet-info">
            <span className="pet-name">Cats</span>
            <p className="pet-description">Elegant and playful friends.</p>
            <a href="/cats" className="pet-link">Explore</a>
          </div>
        </div>
        <div className="pet-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRH8vAoXOny2hv1MTlTURjfVFMR3iYkBSZDYY5M6sEsj3e8uB1KKotZRslbg&s"
            alt="Birds"
            className="pet-image"
          />
          <div className="pet-info">
            <span className="pet-name">Birds</span>
            <p className="pet-description">Colorful and melodic pets.</p>
            <a href="/birds" className="pet-link">Explore</a>
          </div>
        </div>
        <div className="pet-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTlCVK3XhWzv2PAlbfUI3C5_UziGuTOmZLg&s"
            alt="Cows"
            className="pet-image"
          />
          <div className="pet-info">
            <span className="pet-name">Cows</span>
            <p className="pet-description">Gentle giants of the farm.</p>
            <a href="/cows" className="pet-link">Explore</a>
          </div>
        </div>
        <div className="pet-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBZveP_CHLNXtSbisySn3l6uQLZuKGsUkZg&s"
            alt="Goats"
            className="pet-image"
          />
          <div className="pet-info">
            <span className="pet-name">Goats</span>
            <p className="pet-description">Curious and playful creatures.</p>
            <a href="/goats" className="pet-link">Explore</a>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default PetShop;
