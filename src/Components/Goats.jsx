import React, { useState } from "react";
import "./Goats.css";

// Modal Component
const Modal = ({ show, onClose, goatName }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adopt {goatName}</h2>
        <p>Please contact us to start the adoption process.</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

// Goats Component
const Goats = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGoat, setSelectedGoat] = useState(null);

  const toggleModal = (goatName) => {
    setSelectedGoat(goatName);
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <h1>Goats Available for Adoption</h1>
      </header>
      <main>
        <section className="pet-cards">
          <div className="pet-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/61552afb09b9c05b8f24a737/535277e8-5eb9-497b-afec-949b079f7e19/IMG_5612.jpeg"
              alt="Nigerian Dwarf"
              className="pet-image"
            />
            <h2>Nigerian Dwarf</h2>
            <p>
              <span className="highlight">Size</span>: Small (17-19 inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-15 years
              <br />
              <span className="highlight">Personality</span>: Friendly, gentle,
              and playful
              <br />
              <span className="highlight">Care</span>: Requires regular hoof
              trimming, a balanced diet, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their small
              size and high milk production.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Nigerian_Dwarf_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Nigerian Dwarf{" "}
              </a>
            </p>
            <button
              onClick={() => toggleModal("Nigerian Dwarf")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArqvIduIsd4xLLNyeSiwZFpGYwrNqhNIHx-IC2JEH9atnXKyh3Z8xh-2gskXYeOBqML8&usqp=CAU"
              alt="Pygmy Goat"
              className="pet-image"
            />
            <h2>Pygmy Goat</h2>
            <p>
              <span className="highlight">Size</span>: Small (16-23 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Lively,
              affectionate, and hardy
              <br />
              <span className="highlight">Care</span>: Needs a balanced diet,
              regular hoof care, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their small
              size and playful nature.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/American_Pygmy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Pygmy Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Pygmy Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbL_CglUlWLL2eRNQNws2BS6KkX5MZTay5gg&s"
              alt="Boer Goat"
              className="pet-image"
            />
            <h2>Boer Goat</h2>
            <p>
              <span className="highlight">Size</span>: Large (20-30 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Docile, friendly,
              and robust
              <br />
              <span className="highlight">Care</span>: Requires ample grazing
              space, a balanced diet, and regular veterinary care.
              <br />
              <span className="highlight">Features</span>: Known for their rapid
              growth and meat production.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Boer_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Boer Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Boer Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://t4.ftcdn.net/jpg/05/18/20/59/360_F_518205940_hIc8pHoRkQ5uodk2X2f8qvk6YdhabhI0.jpg"
              alt="Alpine Goat"
              className="pet-image"
            />
            <h2>Alpine Goat</h2>
            <p>
              <span className="highlight">Size</span>: Medium to Large (30-40
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Alert, friendly,
              and hardy
              <br />
              <span className="highlight">Care</span>: Needs regular grooming, a
              balanced diet, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their high
              milk production and adaptability.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Alpine_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("Alpine Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://forestry.com/wp/wp-content/uploads/2024/02/12-152.webp"
              alt="Toggenburg Goat"
              className="pet-image"
            />
            <h2>Toggenburg Goat</h2>
            <p>
              <span className="highlight">Size</span>: Medium (26-36 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Gentle, friendly,
              and alert
              <br />
              <span className="highlight">Care</span>: Requires regular hoof
              trimming, a balanced diet, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their
              distinctive coloring and high milk production.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Toggenburger"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Toggenburg Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Toggenburg Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://breedslist.com/wp-content/uploads/2020/09/Pictures-of-Lamancha-Goats.jpg"
              alt="LaMancha Goat"
              className="pet-image"
            />
            <h2>LaMancha Goat</h2>
            <p>
              <span className="highlight">Size</span>: Medium (28-30 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Friendly, hardy,
              and calm
              <br />
              <span className="highlight">Care</span>: Needs regular grooming, a
              balanced diet, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their tiny
              ears and high milk production.
              <br />
              <span className="highlight">Cost</span>: ₹16,400 to ₹65,600
              <br />
              <a
                href="https://en.wikipedia.org/wiki/American_Lamancha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about LaMancha Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("LaMancha Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Saanenziege.jpg"
              alt="Saanen Goat"
              className="pet-image"
            />
            <h2>Saanen Goat</h2>
            <p>
              <span className="highlight">Size</span>: Large (30-40 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Gentle, friendly,
              and calm
              <br />
              <span className="highlight">Care</span>: Requires ample grazing
              space, regular hoof care, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their high
              milk production and gentle nature.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Saanen_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Saanen Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Saanen Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxmqAgKnX9s6QYQFwboOfL7tv7SVCAaXSwA&s"
              alt="Goat 8"
              className="pet-image"
            />
            <h2>Oberhasli Goat</h2>
            <p>
              <span className="highlight">Size</span>: Medium (28-34 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Gentle, friendly,
              and active
              <br />
              <span className="highlight">Care</span>: Needs regular grooming, a
              balanced diet, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their
              distinctive coloring and high milk production.
              <br />
              <span className="highlight">Cost</span>:₹12,300 to ₹41,000.
              <a
                href="https://en.wikipedia.org/wiki/Oberhasli_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
               Learn more about Oberhasli Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Oberhasli Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAorgr8dMYXgYrIsL4-6Gjv_zLTAzoDn4FtkFNutcs8yiDSCsfRaRwlfDISXxnhWTDRYI&usqp=CAU"
              alt="Goat 9"
              className="pet-image"
            />
            <h2>Kiko Goat</h2>
            <p>
              <span className="highlight">Size</span>: Medium to Large (28-36
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Hardy, friendly,
              and adaptable
              <br />
              <span className="highlight">Care</span>: Requires regular
              veterinary care, ample grazing space, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              resilience and meat production.
              <br />
              <span className="highlight">Cost</span>: ₹24,600 to ₹82,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Kiko_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Kiko Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Kiko Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://cdn.britannica.com/29/529-050-6B31311A/Angora-goat.jpg"
              alt="Goat 10"
              className="pet-image"
            />
            <h2>Angora Goat</h2>
            <p>
              <span className="highlight">Size</span>: Medium (24-30 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years
              <br />
              <span className="highlight">Personality</span>: Gentle, friendly,
              and calm
              <br />
              <span className="highlight">Care</span>: Needs regular grooming,
              shearing, a balanced diet, and secure fencing.
              <br />
              <span className="highlight">Features</span>: Known for their long,
              curly hair and high-quality mohair production.
              <br />
              <span className="highlight">Cost</span>:₹24,600 to ₹53,300.<br></br>
              <a
                href="https://en.wikipedia.org/wiki/Angora_goat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Angora Goat
              </a>
            </p>
            <button
              onClick={() => toggleModal("Angora Goat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
        </section>
      </main>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        goatName={selectedGoat}
      />
    </div>
  );
};

export default Goats;