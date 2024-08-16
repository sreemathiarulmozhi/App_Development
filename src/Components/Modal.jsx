// Modal.js

import React from "react";
import "./Modal.css"; // Ensure this path is correct

const Modal = ({ dog, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{dog.name}</h2>
        <img src={dog.image} alt={dog.name} className="modal-image" />
        <p><strong>Size:</strong> {dog.size}</p>
        <p><strong>Lifespan:</strong> {dog.lifespan}</p>
        <p><strong>Personality:</strong> {dog.personality}</p>
        <p><strong>Care:</strong> {dog.care}</p>
        <p><strong>Features:</strong> {dog.features}</p>
        <p><strong>Price:</strong> {dog.price}</p>
        <a href={dog.link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
};

export default Modal;
