import React, { useState } from "react";
import "./Fish.css";

const Modal = ({ show, onClose, fishName }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adopt {fishName}</h2>
        <p>Please contact us to start the adoption process.</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

const Fish = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);

  const toggleModal = (fishName) => {
    setSelectedFish(fishName);
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <h1>Fish Available for Adoption</h1>
      </header>
      <main>
        <section className="pet-cards">
          <div className="pet-card">
            <img
              src="https://www.taiyogroup.in/wp-content/uploads/2022/05/Goldfish.jpg" // Replace with actual image URL
              alt="Goldfish"
              className="pet-image"
            />
            <h2>Goldfish</h2>
            <p>
              <span className="highlight">Size</span>: Small (2-6 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Active and
              friendly
              <br />
              <span className="highlight">Care</span>: Requires a
              well-maintained aquarium with proper filtration.
              <br />
              <span className="highlight">Features</span>: Known for their
              vibrant orange color and flowing fins.
              <br />
              <span className="highlight">Current Price</span>: ₹500 - ₹1,500.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Goldfish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Goldfish
              </a>
            </p>
            <button
              onClick={() => toggleModal("Goldfish")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_Po26e-mjQ2AFmOKUQ1fKaOYdLeWcD-TLg&s" // Replace with actual image URL
              alt="Guppy"
              className="pet-image"
            />
            <h2>Guppy</h2>
            <p>
              <span className="highlight">Size</span>: Small (1-2 inches)
              <br />
              <span className="highlight">Lifespan</span>: 2-3 years
              <br />
              <span className="highlight">Personality</span>: Active and
              colorful
              <br />
              <span className="highlight">Care</span>: Prefers a well-planted
              aquarium with a varied diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              vibrant colors and small size.
              <br />
              <span className="highlight">Current Price</span>: ₹200 - ₹800.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Guppy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Guppy
              </a>
            </p>
            <button onClick={() => toggleModal("Guppy")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://www.shutterstock.com/image-photo/portrait-zebra-angelfish-tank-fish-600nw-2270803133.jpg" // Replace with actual image URL
              alt="Angelfish"
              className="pet-image"
            />
            <h2>Angelfish</h2>
            <p>
              <span className="highlight">Size</span>: Medium (6-8 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10 years
              <br />
              <span className="highlight">Personality</span>: Peaceful and
              elegant
              <br />
              <span className="highlight">Care</span>: Requires a well-planted
              aquarium with a varied diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              graceful fins and distinctive shape.
              <br />
              <span className="highlight">Current Price</span>: ₹300 - ₹1,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Angelfish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Angelfish
              </a>
            </p>
            <button
              onClick={() => toggleModal("Angelfish")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVloxqxXWR41jbZlsroih4lCEmGCSa_BcSA&s" // Replace with actual image URL
              alt="Neon Tetra"
              className="pet-image"
            />
            <h2>Neon Tetra</h2>
            <p>
              <span className="highlight">Size</span>: Small (1.5 inches)
              <br />
              <span className="highlight">Lifespan</span>: 5 years
              <br />
              <span className="highlight">Personality</span>: Peaceful and
              shoaling
              <br />
              <span className="highlight">Care</span>: Prefers a well-planted
              aquarium with soft, slightly acidic water.
              <br />
              <span className="highlight">Features</span>: Known for their
              vibrant blue and red coloration.
              <br />
              <span className="highlight">Current Price</span>: ₹150 - ₹600.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Neon_tetra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Neon Tetra
              </a>
            </p>
            <button
              onClick={() => toggleModal("Neon Tetra")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwTm85_s5_CUlpGt8ECbc4wfF4kB_Ce5W9A&s" // Replace with actual image URL
              alt="Clownfish"
              className="pet-image"
            />
            <h2>Clownfish</h2>
            <p>
              <span className="highlight">Size</span>: Small (4-5 inches)
              <br />
              <span className="highlight">Lifespan</span>: 6-10 years
              <br />
              <span className="highlight">Personality</span>: Friendly and
              active
              <br />
              <span className="highlight">Care</span>: Prefers a well-maintained
              aquarium with an anemone.
              <br />
              <span className="highlight">Features</span>: Known for their
              bright orange color and white stripes.
              <br />
              <span className="highlight">Current Price</span>: ₹400 - ₹1,200.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Clownfish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Clownfish
              </a>
              <br></br>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Clownfish")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://i.etsystatic.com/7680978/r/il/4e2449/4664076957/il_570xN.4664076957_5o0z.jpg" // Replace with actual image URL
              alt="Discus Fish"
              className="pet-image"
            />
            <h2>Discus Fish</h2>
            <p>
              <span className="highlight">Size</span>: Medium (6-8 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10 years
              <br />
              <span className="highlight">Personality</span>: Gentle and shy
              <br />
              <span className="highlight">Care</span>: Requires a spacious,
              well-maintained aquarium with clean water.
              <br />
              <span className="highlight">Features</span>: Known for their flat,
              disk-like shape and vibrant colors.
              <br />
              <span className="highlight">Current Price</span>: ₹1,000 - ₹3,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Discus_fish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Discus Fish
              </a>
            </p>
            <button
              onClick={() => toggleModal("Discus Fish")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVubSFGz2WWXbpyuFA9EbNH9-LNdyQM-HqDQ&s" // Replace with actual image URL
              alt="Plecostomus"
              className="pet-image"
            />
            <h2>Plecostomus</h2>
            <p>
              <span className="highlight">Size</span>: Large (12-24 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Peaceful and
              reclusive
              <br />
              <span className="highlight">Care</span>: Requires a large tank
              with plenty of hiding spots.
              <br />
              <span className="highlight">Features</span>: Known for their
              armored plates and algae-eating habits.
              <br />
              <span className="highlight">Current Price</span>: ₹800 - ₹2,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Plecostomus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Plecostomus
              </a>
              <br></br>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Plecostomus")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0311/3149/files/Albino_Tiger_Oscar_-_Astronotus_ocellatus.jpg?v=1663363974" // Replace with actual image URL
              alt="Oscar Fish"
              className="pet-image"
            />
            <h2>Oscar Fish</h2>
            <p>
              <span className="highlight">Size</span>: Large (12-18 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Intelligent and
              interactive
              <br />
              <span className="highlight">Care</span>: Requires a spacious tank
              with a good filtration system.
              <br />
              <span className="highlight">Features</span>: Known for their
              varied coloration and active nature.
              <br />
              <span className="highlight">Current Price</span>: ₹1,000 - ₹2,500.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Oscar_(fish)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Oscar Fish
              </a>
            </p>
            <button
              onClick={() => toggleModal("Oscar Fish")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>

          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCG3rqrjtzU-1B-aFrec_QkhA_ZI41050NA&s" // Replace with actual image URL
              alt="Swordtail"
              className="pet-image"
            />
            <h2>Swordtail</h2>
            <p>
              <span className="highlight">Size</span>: Medium (4-5 inches)
              <br />
              <span className="highlight">Lifespan</span>: 3-5 years
              <br />
              <span className="highlight">Personality</span>: Active and social
              <br />
              <span className="highlight">Care</span>: Prefers a well-planted
              aquarium with a varied diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              elongated tails and active swimming.
              <br />
              <span className="highlight">Current Price</span>: ₹200 - ₹700.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Swordtail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Swordtail
              </a>
            </p>
            <button
              onClick={() => toggleModal("Swordtail")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDX1tjAV3kPyEJZabUzrqrzS3PKjoL_QObqQ&s" // Replace with actual image URL
              alt="Molly Fish"
              className="pet-image"
            />
            <h2>Molly Fish</h2>
            <p>
              <span className="highlight">Size</span>: Medium (4-5 inches)
              <br />
              <span className="highlight">Lifespan</span>: 3-5 years
              <br />
              <span className="highlight">Personality</span>: Peaceful and
              friendly
              <br />
              <span className="highlight">Care</span>: Prefers a well-maintained
              aquarium with a varied diet.
              <br />
              <span className="highlight">Features</span>: Known for their hardy
              nature and wide range of colors.
              <br />
              <span className="highlight">Current Price</span>: ₹200 - ₹800.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Molly_(fish)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Molly Fish
              </a>
            </p>
            <button
              onClick={() => toggleModal("Molly Fish")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
        </section>
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          fishName={selectedFish}
        />
      </main>
    </div>
  );
};

export default Fish;
