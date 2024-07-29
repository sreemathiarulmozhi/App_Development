import React, { useState } from "react";
import "./Birds.css"; // Make sure to create or update this CSS file for styling

const Modal = ({ show, onClose, birdName }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adopt {birdName}</h2>
        <p>Please contact us to start the adoption process.</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

const Birds = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);

  const toggleModal = (birdName) => {
    setSelectedBird(birdName);
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <h1>Birds Available for Adoption</h1>
      </header>
      <main>
        <section className="pet-cards">
          <div className="pet-card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.3H1SqrF3azTj0By71_EsWwAAAA&pid=Api&P=0&h=180"
              alt="Budgerigars (Budgies)"
              className="pet-image"
            />
            <h2>Budgerigars (Budgies)</h2>
            <p>
              <span className="highlight">Size</span>: Small (7-8 inches)
              <br />
              <span className="highlight">Lifespan</span>: 5-10 years
              <br />
              <span className="highlight">Personality</span>: Friendly, social,
              and playful
              <br />
              <span className="highlight">Care</span>: Require daily
              interaction, mental stimulation, and a balanced diet of seeds,
              pellets, fruits, and vegetables.
              <br />
              <span className="highlight">Features</span>: Known for their
              bright colors and ability to mimic speech.
              <br />
              <a
                href="https://simple.wikipedia.org/wiki/Budgerigar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Budgerigars
              </a>
            </p>
            <button
              onClick={() => toggleModal("Budgerigars (Budgies)")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://i.pinimg.com/originals/bb/dd/bb/bbddbb4943d48e1f487be7063c7d188b.jpg"
              alt="Bird 2"
              className="pet-image"
            />
            <h2>Cockatiel</h2>
            <p>
              <span className="highlight">Size</span>: Medium (12-13 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Affectionate,
              gentle, and curious
              <br />
              <span className="highlight">Care</span>: Need daily interaction,
              toys for mental stimulation, and a diet of seeds, pellets, fruits,
              and vegetables.
              <br />
              <span className="highlight">Features</span>: Known for their
              whistling ability and distinctive crest.
              <a
                href="https://en.wikipedia.org/wiki/Cockatiel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
              <br></br>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Cockatiel")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.M8EE3Zpw9tlk6u2ORTAkOAHaE8&pid=Api&P=0&h=180"
              alt="Bird 3"
              className="pet-image"
            />
            <h2>Lovebirds</h2>
            <p>
              <span className="highlight">Size</span>: Small (5-7 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-15 years
              <br />
              <span className="highlight">Personality</span>: Playful,
              affectionate, and sometimes territorial
              <br />
              <span className="highlight">Care</span>: Need a lot of social
              interaction, toys, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              strong pair bonds and colorful plumage.
              <a
                href="https://en.wikipedia.org/wiki/Lovebird"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("Lovebirds")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.singing-wings-aviary.com/wp-content/uploads/2018/06/Purple-Finch.jpg"
              alt="Bird 5"
              className="pet-image"
            />
            <h2>Finches</h2>
            <p>
              <span className="highlight">Size</span>: Small (3-5 inches)
              <br />
              <span className="highlight">Lifespan</span>: 5-10 years
              <br />
              <span className="highlight">Personality</span>: Social within
              their species, lively, and easy to care for.
              <br />
              <span className="highlight">Care</span>: Prefer to be in pairs or
              small groups, need a diet of seeds, fruits, and vegetables.
              <br />
              <span className="highlight">Features</span>: Known for their
              vibrant colors and pleasant chirping.
              <a
                href="https://en.wikipedia.org/wiki/Finch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("Finches")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.Mqm32nQGz7-Bz9yiQDeh5gHaE7&pid=Api&P=0&h=180"
              alt="Bird 6"
              className="pet-image"
            />
            <h2>Macaws</h2>
            <p>
              <span className="highlight">Size</span>: Large (20-40 inches)
              <br />
              <span className="highlight">Lifespan</span>: <br />
              <span className="highlight">Personality</span>: Intelligent,
              social, and can be demanding
              <br />
              <span className="highlight">Care</span>: Need a large cage, a lot
              of mental stimulation, social interaction, and a diet rich in
              fruits, vegetables, and nuts..
              <br />
              <span className="highlight">Features</span>: Known for their
              striking plumage and impressive vocal abilities.
              <a
                href="https://en.wikipedia.org/wiki/List_of_macaws"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
              <br />
              <br></br>
            </p>
            <button onClick={() => toggleModal("Macaws")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.h9J-4qyyLjHIhGAGLGvyZwHaE8&pid=Api&P=0&h=180"
              alt="Bird 7"
              className="pet-image"
            />
            <h2>African Grey Parrots</h2>
            <p>
              <span className="highlight">Size</span>: Medium to large (12-14
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 40-60 years
              <br />
              <span className="highlight">Personality</span>: Highly
              intelligent, social, and can be demanding <br />
              <span className="highlight">Care</span>: Require a lot of mental
              stimulation, interaction, and a diet of pellets, fruits, and
              vegetables.
              <br />
              <span className="highlight">Features</span>:Known for their
              exceptional ability to mimic human speech and sounds.
              <a
                href="https://www.britannica.com/animal/African-gray-parrot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("African Grey Parrots")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.aRenofBuchgW0CaJZ01YuAHaEy&pid=Api&P=0&h=180"
              alt="Bird 8"
              className="pet-image"
            />
            <h2>Conures</h2>
            <p>
              <span className="highlight">Size</span>: Small to medium (10-20
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 20-30 years
              <br />
              <span className="highlight">Personality</span>: Playful,
              affectionate, and sometimes noisy
              <br />
              <span className="highlight">Care</span>: Require interaction, toys
              for mental stimulation, and a varied diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              playful antics and vibrant colors.
              <a
                href="https://en.wikipedia.org/wiki/Conure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("Conures")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://talkieparrot.com/wp-content/uploads/2021/07/major-mitchell-cockatoo.jpg"
              alt="Bird 9"
              className="pet-image"
            />
            <h2>Cockatoos</h2>
            <p>
              <span className="highlight">Size</span>: Medium to large (12-24
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 40-70 years
              <br />
              <span className="highlight">Personality</span>: Very social,
              affectionate, and can be loud
              <br />
              <span className="highlight">Care</span>: Require a lot of
              attention, mental stimulation, and a varied diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              expressive crests and strong bonds with their owners.
              <a
                href="https://en.wikipedia.org/wiki/Cockatoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("Cockatoos")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.F5qGOMl2U3CNdkZ0PgDo9wHaFm&pid=Api&P=0&h=180"
              alt="Bird 11"
              className="pet-image"
            />
            <h2>Java Sparrow</h2>
            <p>
              <span className="highlight">Size</span>: 5-6 inches.
              <br />
              <span className="highlight">Lifespan</span>: 7-9 years.
              <br />
              <span className="highlight">Personality</span>: Social, often kept
              in pairs or groups.
              <br />
              <span className="highlight">Care</span>: Needs a wide cage for
              flying, a diet of seeds, fresh fruits, and vegetables, and
              socialization with other Java Sparrows.
              <br />
              <span className="highlight">Features</span>: Small, grey with a
              distinctive pink beak and white cheeks.
              <a
                href="https://en.wikipedia.org/wiki/Java_sparrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button
              onClick={() => toggleModal("Java Sparrow")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="http://www.kuwaitbirds.org/sites/default/files/styles/large960/public/bird-photos/mp/red-vented-bulbul-bahrain-mp.jpg?itok=_JcYR6tV0"
              alt="Bird 12"
              className="pet-image"
            />
            <h2> Red-vented Bulbul</h2>
            <p>
              <span className="highlight">Size</span>: 8-9 inches.
              <br />
              <span className="highlight">Lifespan</span>: 8-12 years.
              <br />
              <span className="highlight">Personality</span>: Active, social,
              and vocal.
              <br />
              <span className="highlight">Care</span>: Requires a spacious cage,
              a diet of fruits, vegetables, seeds, and insects, and social
              interaction.
              <br />
              <span className="highlight">Features</span>: Medium-sized, dark
              brown with a distinctive red vent.
              <a
                href="https://en.wikipedia.org/wiki/Red-vented_bulbul"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
              <br /><br></br>
            </p>
            <button
              onClick={() => toggleModal("Red-vented Bulbul")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Ic3GAvQXhYqmeqHx4fpv5gHaFj&pid=Api&P=0&h=180"
              alt="Pionus Parrot"
              className="pet-image"
            />
            <h2>Pionus Parrot</h2>
            <p>
              <span className="highlight">Size</span>: 10-12 inches
              <br />
              <span className="highlight">Lifespan</span>: 25-40 years
              <br />
              <span className="highlight">Personality</span>: Calm, quiet, and
              affectionate
              <br />
              <span className="highlight">Care</span>: Needs a large cage,
              social interaction, mental stimulation, and a varied diet of
              pellets, seeds, fruits, and vegetables.
              <br />
              <span className="highlight">Features</span>: Medium-sized, blue or
              green with a distinctive short tail.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Pionus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Pionus Parrot
              </a>
            </p>
            <button
              onClick={() => toggleModal("Pionus Parrot")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="http://livingjunglepetshop.com.au/wp-content/uploads/2014/11/Eastern-Rosella-Parrot-Parakeet.jpg"
              alt="Rosella"
              className="pet-image"
            />
            <h2>Rosella</h2>
            <p>
              <span className="highlight">Size</span>: 10-14 inches
              <br />
              <span className="highlight">Lifespan</span>: 15-20 years
              <br />
              <span className="highlight">Personality</span>: Active, social,
              and can be independent
              <br />
              <span className="highlight">Care</span>: Requires a spacious cage,
              plenty of toys, social interaction, a diet of seeds, fruits,
              vegetables, and pellets.
              <br />
              <span className="highlight">Features</span>: Medium-sized, vibrant
              colors (red, blue, green, yellow).
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Rosella"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Rosella
              </a>
            </p>
            <button
              onClick={() => toggleModal("Rosella")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.thesprucepets.com/thmb/QL9ZbOYGWc8fKNPG4VzGU56nXwk=/2450x1660/filters:fill(auto,1)/monk-parakeet-in-barcelona-1283029076-245274da359546a6a9a726bdb23a2064.jpg"
              alt="Quaker Parrot (Monk Parakeet)"
              className="pet-image"
            />
            <h2>Quaker Parrot (Monk Parakeet)</h2>
            <p>
              <span className="highlight">Size</span>: 11-12 inches
              <br />
              <span className="highlight">Lifespan</span>: 20-30 years
              <br />
              <span className="highlight">Personality</span>: Social,
              intelligent, and can be noisy
              <br />
              <span className="highlight">Care</span>: Needs a large cage, toys
              for mental stimulation, social interaction, and a diet of pellets,
              seeds, fruits, and vegetables
              <br />
              <span className="highlight">Features</span>: Small, green with a
              greyish chest.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Monk_parakeet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Quaker Parrot
              </a>
            </p>
            <button
              onClick={() => toggleModal("Quaker Parrot")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://fthmb.tqn.com/fFSbaxSgK9k9jXzzLwwACWae_ig=/960x0/filters:no_upscale()/Eclectus-parrot-10021166-resized-56a0a1283df78cafdaa36ff6.jpg"
              alt="Eclectus Parrot"
              className="pet-image"
            />
            <h2>Eclectus Parrot</h2>
            <p>
              <span className="highlight">Size</span>: 14 inches
              <br />
              <span className="highlight">Lifespan</span>: 30-50 years
              <br />
              <span className="highlight">Personality</span>: Calm, gentle, and
              intelligent
              <br />
              <span className="highlight">Care</span>: Needs a large cage, toys
              for mental stimulation, social interaction, and a diet of pellets,
              seeds, fruits, and vegetables
              <br />
              <span className="highlight">Features</span>: Sexual dimorphism,
              males are green, females are red and blue.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Eclectus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Eclectus Parrot
              </a>
            </p>
            <button
              onClick={() => toggleModal("Eclectus Parrot")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://petkeen.com/wp-content/uploads/2021/09/sun-conure-on-the-ground.jpg"
              alt="Sun Conure"
              className="pet-image"
            />
            <h2>Sun Conure</h2>
            <p>
              <span className="highlight">Size</span>: 12 inches
              <br />
              <span className="highlight">Lifespan</span>: 20-30 years
              <br />
              <span className="highlight">Personality</span>: Social,
              affectionate, loud, and playful
              <br />
              <span className="highlight">Care</span>: Needs a large cage,
              plenty of toys, social interaction, a balanced diet including
              pellets, seeds, fruits, and vegetables
              <br />
              <span className="highlight">Features</span>: Brightly colored
              (yellow, orange, green), medium-sized parrot.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Sun_conure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Sun Conure
              </a>
            </p>
            <button
              onClick={() => toggleModal("Sun Conure")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.thesprucepets.com/thmb/31K3Id-EgLmQCp4rCVKjMd4gwWs=/4272x0/filters:no_upscale():max_bytes(150000):strip_icc()/canary-bird-147877250-5b5df7f346e0fb00824a4116.jpg"
              alt="Bird 19"
              className="pet-image"
            />
            <h2>Canary</h2>
            <p>
              <span className="highlight">Size</span>:4-5 inches. <br />
              <span className="highlight">Lifespan</span>:10-15 years. <br />
              <span className="highlight">Personality</span>:Generally solitary,
              males are known for their singing <br />
              <span className="highlight">Care</span>:Requires a spacious cage,
              a diet of seeds, fruits, and vegetables, and a quiet environment
              for singing
              <br />
              <span className="highlight">Features</span>: Small, vibrant yellow
              (or other colors) with a melodious son<br/>
              <a
                href="https://en.wikipedia.org/wiki/Domestic_canary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about canary
              </a>
              <br/><br/><br/>
            </p>
            <button onClick={() => toggleModal("Canary")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.birdspot.co.uk/wp-content/uploads/2004/08/wood-pigeon.jpg"
              alt="Bird 20"
              className="pet-image"
            />
            <h2>Pigeon (Columba livia domestica)</h2>
            <p>
              <span className="highlight">Size</span>:11-15 inches. <br />
              <span className="highlight">Lifespan</span>:10-15 years <br />
              <span className="highlight">Personality</span>: <br />
              <span className="highlight">Care</span>:Can be trained for racing
              and tricks <br />
              <span className="highlight">Features</span>:Varied colors (blue,
              gray, white, brown), stout body, short neck, slender beak
              <br></br>
              <a
                href="https://en.wikipedia.org/wiki/Domestic_pigeon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about
              </a>
            </p>
            <button onClick={() => toggleModal("Pigeon")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
        </section>
      </main>
      <Modal show={showModal} onClose={toggleModal} birdName={selectedBird} />
    </div>
  );
};

export default Birds;