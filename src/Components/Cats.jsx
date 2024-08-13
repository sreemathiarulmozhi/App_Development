import React, { useState } from "react";
import "./Cats.css"; 

const Modal = ({ show, onClose, catName }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adopt {catName}</h2>
        <p>Please contact us to start the adoption process.</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

const Cats = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const toggleModal = (catName) => {
    setSelectedCat(catName);
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <h1>Cats Available for Adoption</h1>
      </header>
      <main>
        <section className="pet-cards">
          <div className="pet-card">
            <img
              src="https://blog.mystart.com/wp-content/uploads/shutterstock_137532869-e1520615431283.jpg"
              alt="Siamese"
              className="pet-image"
            />
            <h2>Siamese</h2>
            <p>
              <span className="highlight">Size</span>: Medium (8-10 inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-20 years
              <br />
              <span className="highlight">Personality</span>: Vocal, social, and
              affectionate
              <br />
              <span className="highlight">Care</span>: Needs regular grooming,
              mental stimulation, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              striking blue eyes and sleek coat.
              <br />
              <span className="highlight">Price</span>: ₹15,000 - ₹25,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Siamese_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Siamese
              </a>
            </p>
            <br></br>
            <button
              onClick={() => toggleModal("Siamese")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://mainecoon.org/wp-content/uploads/2017/03/cat-1507223_1920.jpg"
              alt="Maine Coon"
              className="pet-image"
            />
            <h2>Maine Coon</h2>
            <p>
              <span className="highlight">Size</span>: Large (10-16 inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-15 years
              <br />
              <span className="highlight">Personality</span>: Friendly, gentle,
              and playful
              <br />
              <span className="highlight">Care</span>: Requires regular
              grooming, especially during shedding season.
              <br />
              <span className="highlight">Features</span>: Known for their large
              size, tufted ears, and bushy tail.
              <br />
              <span className="highlight">Price</span>: ₹30,000 - ₹50,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Maine_Coon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Maine Coon
              </a>
            </p>
            <br></br>
            <br></br>
            <button
              onClick={() => toggleModal("Maine Coon")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.thesprucepets.com/thmb/dm6InsWYL4obgvs3xwcLVGQB6E8=/2309x1299/filters:fill(auto,1)/GreyPersianCatonGreenRug-67bef10b503d4e27b8264bc09f32983c.jpg"
              alt="Persian"
              className="pet-image"
            />
            <h2>Persian</h2>
            <p>
              <span className="highlight">Size</span>: Medium (8-12 inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-17 years
              <br />
              <span className="highlight">Personality</span>: Calm,
              affectionate, and quiet
              <br />
              <span className="highlight">Care</span>: Needs regular grooming to
              maintain their long coat.
              <br />
              <span className="highlight">Features</span>: Known for their flat
              face and luxurious long fur.
              <br />
              <span className="highlight">Price</span>: ₹20,000 - ₹40,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Persian_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Persian
              </a>
            </p>{" "}
            <br></br>
            <br></br>
            <button
              onClick={() => toggleModal("Persian")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.g5JYTDfQTXCe9TmfAUrDxAHaFf&pid=Api&P=0&h=180"
              alt="Bengal"
              className="pet-image"
            />
            <h2>Bengal</h2>
            <p>
              <span className="highlight">Size</span>: Medium to Large (8-12
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-16 years
              <br />
              <span className="highlight">Personality</span>: Energetic,
              playful, and intelligent
              <br />
              <span className="highlight">Care</span>: Requires regular exercise
              and mental stimulation.
              <br />
              <span className="highlight">Features</span>: Known for their
              striking coat patterns and high activity levels.
              <br />
              <span className="highlight">Price</span>: ₹25,000 - ₹45,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Bengal_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Bengal
              </a>
            </p>
            <button onClick={() => toggleModal("Bengal")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.s4xrNgQTsXaUYeNXNJOdgQHaGB&pid=Api&P=0&h=180"
              alt="Sphynx"
              className="pet-image"
            />
            <h2>Sphynx</h2>
            <p>
              <span className="highlight">Size</span>: Medium (8-12 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Affectionate,
              curious, and energetic
              <br />
              <span className="highlight">Care</span>: Requires regular bathing
              due to lack of fur.
              <br />
              <span className="highlight">Features</span>: Known for their
              hairless appearance and wrinkled skin.
              <br />
              <span className="highlight">Price</span>: ₹30,000 - ₹50,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Sphynx_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Sphynx
              </a>
            </p>
            <br></br>
            <button onClick={() => toggleModal("Sphynx")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.iXN-hJcm666Bv0_8Jeio3gHaE7&pid=Api&P=0&h=180"
              alt="Scottish Fold"
              className="pet-image"
            />
            <h2>Scottish Fold</h2>
            <p>
              <span className="highlight">Size</span>: Medium (8-12 inches)
              <br />
              <span className="highlight">Lifespan</span>: 11-15 years
              <br />
              <span className="highlight">Personality</span>: Sweet, calm, and
              playful
              <br />
              <span className="highlight">Care</span>: Requires regular grooming
              and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              distinctive folded ears and round face.
              <br />
              <span className="highlight">Price</span>: ₹25,000 - ₹40,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Scottish_Fold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Scottish Fold
              </a>
              <br></br>
            </p>
            <br></br>
            <button
              onClick={() => toggleModal("Scottish Fold")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.ueu41hfviQCWbcHTf26IRgHaE8&pid=Api&P=0&h=180"
              alt="Abyssinian"
              className="pet-image"
            />
            <h2>Abyssinian</h2>
            <p>
              <span className="highlight">Size</span>: Medium (8-12 inches)
              <br />
              <span className="highlight">Lifespan</span>: 9-15 years
              <br />
              <span className="highlight">Personality</span>: Energetic,
              playful, and curious
              <br />
              <span className="highlight">Care</span>: Needs regular exercise
              and mental stimulation.
              <br />
              <span className="highlight">Features</span>: Known for their
              ticked coat and playful nature.
              <br />
              <span className="highlight">Price</span>: ₹20,000 - ₹35,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Abyssinian_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Abyssinian
              </a>
            </p>
            <br></br>
            <br></br>
            <button
              onClick={() => toggleModal("Abyssinian")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://i.pinimg.com/originals/f9/5d/b9/f95db97149c3f29d3f7a22545a02bbf6.jpg"
              alt="Ragdoll"
              className="pet-image"
            />
            <h2>Ragdoll</h2>
            <p>
              <span className="highlight">Size</span>: Large (9-11 inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-17 years
              <br />
              <span className="highlight">Personality</span>: Gentle,
              affectionate, and calm
              <br />
              <span className="highlight">Care</span>: Requires regular grooming
              to manage their long fur.
              <br />
              <span className="highlight">Features</span>: Known for their
              striking blue eyes and relaxed demeanor.
              <br />
              <span className="highlight">Price</span>: ₹25,000 - ₹45,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Ragdoll_(cat)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Ragdoll
              </a>
            </p>
            <br></br>
            <br></br>
            <button
              onClick={() => toggleModal("Ragdoll")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.SCFboKhb3DapStc9IwN8qwHaE6&pid=Api&P=0&h=180"
              alt="Norwegian Forest Cat"
              className="pet-image"
            />
            <h2>Norwegian Forest Cat</h2>
            <p>
              <span className="highlight">Size</span>: Large (9-12 inches)
              <br />
              <span className="highlight">Lifespan</span>: 14-16 years
              <br />
              <span className="highlight">Personality</span>: Friendly,
              independent, and playful
              <br />
              <span className="highlight">Care</span>: Requires regular
              grooming, especially during shedding season.
              <br />
              <span className="highlight">Features</span>: Known for their
              thick, waterproof coat and bushy tail.
              <br />
              <span className="highlight">Price</span>: ₹20,000 - ₹40,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Norwegian_Forest_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Norwegian Forest Cat
              </a>
            </p>
            <br></br>
            <button
              onClick={() => toggleModal("Norwegian Forest Cat")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://cat-world.com/wp-content/uploads/2017/07/young-burmese-cat1.jpg"
              alt="Burmese"
              className="pet-image"
            />
            <h2>Burmese</h2>
            <p>
              <span className="highlight">Size</span>: Medium (8-10 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-16 years
              <br />
              <span className="highlight">Personality</span>: Affectionate,
              playful, and energetic
              <br />
              <span className="highlight">Care</span>: Requires regular exercise
              and interaction.
              <br />
              <span className="highlight">Features</span>: Known for their
              sleek, muscular build and affectionate nature.
              <br />
              <span className="highlight">Price</span>: ₹15,000 - ₹30,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Burmese_cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Burmese
              </a>
            </p>
            <br></br>
            <button
              onClick={() => toggleModal("Burmese")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
        </section>
      </main>
      <Modal show={showModal} onClose={toggleModal} catName={selectedCat} />
    </div>
  );
};

export default Cats;