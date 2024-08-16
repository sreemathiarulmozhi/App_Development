import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cats.css";


const CatDetailsModal = ({ cat, onClose }) => {
  if (!cat) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{cat.name}</h2>
        <p>
          <span className="highlight">Size</span>: {cat.size}
          <br />
          <span className="highlight">Lifespan</span>: {cat.lifespan}
          <br />
          <span className="highlight">Personality</span>: {cat.personality}
          <br />
          <span className="highlight">Care</span>: {cat.care}
          <br />
          <span className="highlight">Features</span>: {cat.features}
          <br />
          <span className="highlight">Current Price</span>: {cat.price}
          <br />
          <a href={cat.link} target="_blank" rel="noopener noreferrer">
            More Information
          </a>
        </p>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Cats = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const navigate = useNavigate();

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleCloseModal = () => {
    setSelectedCat(null);
  };

  const handleAdoptClick = (cat, e) => {
    e.stopPropagation(); // Prevent the card click handler from firing
    navigate('/adopt', { state: { cat } });
  };

  const cats = [
    {
      "name": "Siamese",
      "image": "https://images.pexels.com/photos/596590/pexels-photo-596590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "size": "Medium (8-10 inches)",
      "lifespan": "12-20 years",
      "personality": "Vocal, social, and affectionate",
      "care": "Needs regular grooming, mental stimulation, and a balanced diet.",
      "features": "Known for their striking blue eyes and sleek coat.",
      "price": "₹15,000 - ₹25,000",
      "link": "https://en.wikipedia.org/wiki/Siamese_cat"
    },
    {
      "name": "Maine Coon",
      "image": "https://mainecoon.org/wp-content/uploads/2017/03/cat-1507223_1920.jpg",
      "size": "Large (10-16 inches)",
      "lifespan": "12-15 years",
      "personality": "Friendly, gentle, and playful",
      "care": "Requires regular grooming, especially during shedding season.",
      "features": "Known for their large size, tufted ears, and bushy tail.",
      "price": "₹30,000 - ₹50,000",
      "link": "https://en.wikipedia.org/wiki/Maine_Coon"
    },
    {
      "name": "Persian",
      "image": "https://www.thesprucepets.com/thmb/dm6InsWYL4obgvs3xwcLVGQB6E8=/2309x1299/filters:fill(auto,1)/GreyPersianCatonGreenRug-67bef10b503d4e27b8264bc09f32983c.jpg",
      "size": "Medium (8-12 inches)",
      "lifespan": "12-17 years",
      "personality": "Calm, affectionate, and quiet",
      "care": "Needs regular grooming to maintain their long coat.",
      "features": "Known for their flat face and luxurious long fur.",
      "price": "₹20,000 - ₹40,000",
      "link": "https://en.wikipedia.org/wiki/Persian_cat"
    },
    {
      "name": "Bengal",
      "image": "https://tse3.mm.bing.net/th?id=OIP.g5JYTDfQTXCe9TmfAUrDxAHaFf&pid=Api&P=0&h=180",
      "size": "Medium to Large (8-12 inches)",
      "lifespan": "12-16 years",
      "personality": "Energetic, playful, and intelligent",
      "care": "Requires regular exercise and mental stimulation.",
      "features": "Known for their striking coat patterns and high activity levels.",
      "price": "₹25,000 - ₹45,000",
      "link": "https://en.wikipedia.org/wiki/Bengal_cat"
    },
    {
      "name": "Sphynx",
      "image": "https://tse2.mm.bing.net/th?id=OIP.s4xrNgQTsXaUYeNXNJOdgQHaGB&pid=Api&P=0&h=180",
      "size": "Medium (8-12 inches)",
      "lifespan": "10-15 years",
      "personality": "Affectionate, curious, and energetic",
      "care": "Requires regular bathing due to lack of fur.",
      "features": "Known for their hairless appearance and wrinkled skin.",
      "price": "₹30,000 - ₹50,000",
      "link": "https://en.wikipedia.org/wiki/Sphynx_cat"
    },
    {
      "name": "Scottish Fold",
      "image": "https://tse4.mm.bing.net/th?id=OIP.iXN-hJcm666Bv0_8Jeio3gHaE7&pid=Api&P=0&h=180",
      "size": "Medium (8-12 inches)",
      "lifespan": "11-15 years",
      "personality": "Sweet, calm, and playful",
      "care": "Requires regular grooming and a balanced diet.",
      "features": "Known for their distinctive folded ears and round face.",
      "price": "₹25,000 - ₹40,000",
      "link": "https://en.wikipedia.org/wiki/Scottish_Fold"
    },
    {
      "name": "Abyssinian",
      "image": "https://tse2.mm.bing.net/th?id=OIP.ueu41hfviQCWbcHTf26IRgHaE8&pid=Api&P=0&h=180",
      "size": "Medium (8-12 inches)",
      "lifespan": "9-15 years",
      "personality": "Energetic, playful, and curious",
      "care": "Needs regular exercise and mental stimulation.",
      "features": "Known for their ticked coat and playful nature.",
      "price": "₹20,000 - ₹35,000",
      "link": "https://en.wikipedia.org/wiki/Abyssinian_cat"
    },
    {
      "name": "Ragdoll",
      "image": "https://i.pinimg.com/originals/f9/5d/b9/f95db97149c3f29d3f7a22545a02bbf6.jpg",
      "size": "Large (9-11 inches)",
      "lifespan": "12-17 years",
      "personality": "Gentle, affectionate, and calm",
      "care": "Requires regular grooming to manage their long fur.",
      "features": "Known for their striking blue eyes and relaxed demeanor.",
      "price": "₹25,000 - ₹45,000",
      "link": "https://en.wikipedia.org/wiki/Ragdoll_(cat)"
    },
    {
      "name": "Norwegian Forest Cat",
      "image": "https://tse2.mm.bing.net/th?id=OIP.SCFboKhb3DapStc9IwN8qwHaE6&pid=Api&P=0&h=180",
      "size": "Large (9-12 inches)",
      "lifespan": "14-16 years",
      "personality": "Friendly, independent, and playful",
      "care": "Requires regular grooming, especially during shedding season.",
      "features": "Known for their thick, waterproof coat and bushy tail.",
      "price": "₹20,000 - ₹40,000",
      "link": "https://en.wikipedia.org/wiki/Norwegian_Forest_cat"
    },
    {
      "name": "Burmese",
      "image": "https://cat-world.com/wp-content/uploads/2017/07/young-burmese-cat1.jpg",
      "size": "Medium (8-10 inches)",
      "lifespan": "10-16 years",
      "personality": "Affectionate, playful, and energetic",
      "care": "Requires regular exercise and interaction.",
      "features": "Known for their sleek, muscular build and affectionate nature.",
      "price": "₹15,000 - ₹30,000",
      "link": "https://en.wikipedia.org/wiki/Burmese_cat"
    },
    {
      "name": "Siberian",
      "image": "https://images.pexels.com/photos/26436687/pexels-photo-26436687/free-photo-of-calico-cat-lying-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=600",
      "size": "Large (9-12 inches)",
      "lifespan": "12-15 years",
      "personality": "Affectionate, intelligent, and playful",
      "care": "Requires regular grooming due to their long, dense coat.",
      "features": "Known for their large size and thick fur.",
      "price": "₹20,000 - ₹40,000",
      "link": "https://en.wikipedia.org/wiki/Siberian_cat"
    },
    {
      "name": "British Shorthair",
      "image": "https://i.ytimg.com/vi/LABfuTV2PlE/maxresdefault.jpg",
      "size": "Medium to Large (12-14 inches)",
      "lifespan": "12-20 years",
      "personality": "Calm, easygoing, and affectionate",
      "care": "Minimal grooming required, occasional brushing needed.",
      "features": "Known for their round face, dense coat, and stocky build.",
      "price": "₹20,000 - ₹35,000",
      "link": "https://en.wikipedia.org/wiki/British_Shorthair"
    }
  
];

  return (
    <div className="cat-gallery">
      {cats.map((cat, index) => (
        <div key={index} className="cat-card" onClick={() => handleCatClick(cat)}>
          <div className="image-container">
            <img src={cat.image} alt={cat.name} />
          </div>
          <div className="cat-info">
            <h3>{cat.name}</h3>
            <button className="adopt-button" onClick={(e) => handleAdoptClick(cat, e)}>
              Click to Adopt Me
            </button>
          </div>
        </div>
      ))}
      {selectedCat && <CatDetailsModal cat={selectedCat} onClose={handleCloseModal} />}
    </div>
  );
};

export default Cats;
