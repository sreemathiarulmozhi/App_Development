import React, { useState } from "react";
import "./Cows.css";

const Cows = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCow, setSelectedCow] = useState("");

  const toggleModal = (cowName) => {
    setSelectedCow(cowName);
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <h1>Cows Available for Adoption</h1>
      </header>
      <main>
        <section className="pet-cards">
          <div className="pet-card">
            <img
              src="https://arkagen.co/wp-content/uploads/2020/02/%D9%87%D9%84%D8%B4%D8%AA%D8%A7%DB%8C%D9%86-%D9%85%D8%A7%D8%AF%D9%87-1.jpg"
              alt="Holstein Friesian"
              className="pet-image"
            />
            <h2>Holstein Friesian</h2>
            <p>
              <span className="highlight">Size</span>: Large (58-65 inches at
              the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 6-10 years
              <br />
              <span className="highlight">Personality</span>: Friendly, gentle,
              and social
              <br />
              <span className="highlight">Care</span>: Requires ample grazing
              space, regular veterinary care, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              distinctive black and white spots and high milk production.
              <br />
              <span className="highlight">Current Price</span>: ₹1,00,000 to
              ₹3,50,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Holstein"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Holstein Friesians
              </a>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Holstein Friesian")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1z9EIjFWpB_2cJUsHLizNPz4ffcb4S-hXg&s"
              alt="Jersey"
              className="pet-image"
            />
            <h2>Jersey</h2>
            <p>
              <span className="highlight">Size</span>: Medium (46-50 inches at
              the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 18-22 years
              <br />
              <span className="highlight">Personality</span>: Intelligent,
              docile, and adaptable
              <br />
              <span className="highlight">Care</span>: Needs moderate grazing
              space, regular grooming, and a nutrient-rich diet.
              <br />
              <span className="highlight">Features</span>: Known for their light
              brown color and high butterfat content in their milk.
              <br />
              <span className="highlight">Current Price</span>: ₹1,50,000 to
              ₹4,00,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Jersey_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                Learn more about Jerseys
              </a>
            </p>
            <button onClick={() => toggleModal("Jersey")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HPFjDcfcp8saZSra2w_I7xDhUEv9ZIi1mg&s"
              alt="Hereford"
              className="pet-image"
            />
            <h2>Hereford</h2>
            <p>
              <span className="highlight">Size</span>: Large (55-60 inches at
              the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 15-20 years
              <br />
              <span className="highlight">Personality</span>: Calm, friendly,
              and hardy
              <br />
              <span className="highlight">Care</span>: Requires spacious grazing
              land, regular hoof care, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their red
              body and white face.
              <br />
              <span className="highlight">Current Price</span>: ₹1,20,000 to
              ₹3,80,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Hereford_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Herefords
              </a>
              <br />
              <br></br>
              <br></br>
            </p>
            <button
              onClick={() => toggleModal("Hereford")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Angusbulle.jpg/800px-Angusbulle.jpg"
              alt="Angus"
              className="pet-image"
            />
            <h2>Angus</h2>
            <p>
              <span className="highlight">Size</span>: Medium to Large (50-53
              inches at the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 12-15 years
              <br />
              <span className="highlight">Personality</span>: Alert,
              intelligent, and adaptable
              <br />
              <span className="highlight">Care</span>: Needs regular pasture
              rotation, vaccination, and a protein-rich diet.
              <br />
              <span className="highlight">Features</span>: Known for their solid
              black or red color and high-quality beef.
              <br />
              <span className="highlight">Current Price</span>: ₹1,75,000 to
              ₹4,50,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Angus_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Angus
              </a>
              <br></br>
              <br />
            </p>
            <button onClick={() => toggleModal("Angus")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/2022/05/16120524/guernsey-cattle.jpg"
              alt="Guernsey"
              className="pet-image"
            />
            <h2>Guernsey</h2>
            <p>
              <span className="highlight">Size</span>: Medium (48-52 inches at
              the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 12-15 years
              <br />
              <span className="highlight">Personality</span>: Gentle, friendly,
              and social
              <br />
              <span className="highlight">Care</span>: Requires regular
              grooming, ample grazing space, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their rich,
              golden-yellow milk and reddish-brown coat.
              <br />
              <span className="highlight">Current Price</span>: ₹1,30,000 to
              ₹4,20,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Guernsey_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn know more about Guernseys
              </a>
              <br></br>
              <br></br>
            </p>
            <button
              onClick={() => toggleModal("Guernsey")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Vache_de_race_charolaise_avec_son_veau.jpg"
              alt="Charolais"
              className="pet-image"
            />
            <h2>Charolais</h2>
            <p>
              <span className="highlight">Size</span>: Large (55-60 inches at
              the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 15-20 years
              <br />
              <span className="highlight">Personality</span>: Calm, hardy, and
              adaptable
              <br />
              <span className="highlight">Care</span>: Needs regular hoof care,
              spacious grazing land, and a nutrient-rich diet.
              <br />
              <span className="highlight">Features</span>: Known for their white
              or creamy coat and muscular build.
              <br />
              <span className="highlight">Current Price</span>: ₹1,40,000 to
              ₹4,60,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Charolais_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Charolais
              </a>
              <br></br>
              <br></br>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Charolais")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://cdn.agriland.ie/uploads/2021/10/Irish-Limousin-Cattle-Society-Native-two.jpg"
              alt="Limousin"
              className="pet-image"
            />
            <h2>Limousin</h2>
            <p>
              <span className="highlight">Size</span>: Medium to Large (52-58
              inches at the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 15-20 years
              <br />
              <span className="highlight">Personality</span>: Intelligent,
              hardy, and calm
              <br />
              <span className="highlight">Care</span>: Requires regular
              veterinary care, ample grazing space, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              golden-red coat and lean meat.
              <br />
              <span className="highlight">Current Price</span>: ₹1,30,000 to
              ₹4,50,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Limousin_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Limousins
              </a>
              <br></br>
              <br></br>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Limousin")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://i.pinimg.com/736x/28/39/c3/2839c3472a4f49e49abcf342234c5331.jpg"
              alt="Simmental"
              className="pet-image"
            />
            <h2>Simmental</h2>
            <p>
              <span className="highlight">Size</span>: Large (55-60 inches at
              the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 15-20 years
              <br />
              <span className="highlight">Personality</span>: Docile, hardy, and
              adaptable
              <br />
              <span className="highlight">Care</span>: Needs regular hoof care,
              ample grazing land, and a protein-rich diet.
              <br />
              <span className="highlight">Features</span>: Known for their red
              and white coat and high milk production.
              <br />
              <span className="highlight">Current Price</span>: ₹1,30,000 to
              ₹4,50,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Simmental"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Simmentals
              </a>
              <br />
              <br />
              <br />
            </p>
            <button
              onClick={() => toggleModal("Simmental")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DZUabaPv1cbnB1yiHlJalGaoiaYj9kcNig&s"
              alt="Brahman"
              className="pet-image"
            />
            <h2>Brahman</h2>
            <p>
              <span className="highlight">Size</span>: Medium to Large (50-56
              inches at the shoulder)
              <br />
              <span className="highlight">Lifespan</span>: 12-18 years
              <br />
              <span className="highlight">Personality</span>: Intelligent,
              hardy, and adaptable
              <br />
              <span className="highlight">Care</span>: Needs regular veterinary
              care, ample grazing space, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              distinctive hump over the shoulders and resistance to heat.
              <br />
              <span className="highlight">Current Price</span>: ₹1,20,000 to
              ₹4,00,000
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Brahman_cattle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Brahmans
              </a>
              <br />
              <br />
            </p>
            <button
              onClick={() => toggleModal("Brahman")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
        </section>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2>Adopt {selectedCow}</h2>
              <p>
                Thank you for your interest in adopting {selectedCow}. Please
                contact us for more information!
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cows;