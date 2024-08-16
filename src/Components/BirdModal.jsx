import React from 'react';
import './BirdModal.css'; // Import CSS for styling

const BirdModal = ({ isOpen, onClose, bird }) => {
  if (!isOpen || !bird) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h2>{bird.name}</h2>
        <div className="modal-body">
          <img src={bird.image} alt={bird.name} className="modal-image" />
          <div className="modal-details">
            <p><strong>Size:</strong> {bird.size}</p>
            <p><strong>Lifespan:</strong> {bird.lifespan}</p>
            <p><strong>Personality:</strong> {bird.personality}</p>
            <p><strong>Care:</strong> {bird.care}</p>
            <p><strong>Features:</strong> {bird.features}</p>
            <p><strong>Price:</strong> {bird.price}</p>
            <a href={bird.moreInfo} target="_blank" rel="noopener noreferrer">More Information</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdModal;
