import React, { useState } from "react";
import "./Dogs.css"; // Make sure to create or update this CSS file for styling

const Modal = ({ show, onClose, dogName }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adopt {dogName}</h2>
        <p>Please contact us to start the adoption process.</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

const Dogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);

  const toggleModal = (dogName) => {
    setSelectedDog(dogName);
    setShowModal(!showModal);
  };

  return (
    <div>
      <header>
        <h1>Dogs Available for Adoption</h1>
      </header>
      <main>
        <section className="pet-cards">
          <div className="pet-card">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.tTuP_kMf6Kv2tqvh8v4eEAHaE8&pid=Api&P=0&h=180"
              alt="Labrador Retriever"
              className="pet-image"
            />
            <h2>Labrador Retriever</h2>
            <p>
              <span className="highlight">Size</span>: Large (21.5-24.5 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-12 years
              <br />
              <span className="highlight">Personality</span>: Friendly,
              outgoing, and high-spirited
              <br />
              <span className="highlight">Care</span>: Requires regular
              exercise, mental stimulation, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their kind
              eyes and strong build.
              <br />
              <span className="highlight">Current Price</span>: ₹15,000 -
              ₹25,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Labrador_Retriever"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Labrador Retriever
              </a>
            </p>
            <button
              onClick={() => toggleModal("Labrador Retriever")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="German Shepherd"
              className="pet-image"
            />
            <h2>German Shepherd</h2>
            <p>
              <span className="highlight">Size</span>: Large (22-26 inches)
              <br />
              <span className="highlight">Lifespan</span>: 9-13 years
              <br />
              <span className="highlight">Personality</span>: Intelligent,
              courageous, and confident
              <br />
              <span className="highlight">Care</span>: Needs regular exercise,
              mental stimulation, and a high-protein diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              versatility and work ethic.
              <br />
              <span className="highlight">Current Price</span>: ₹20,000 -
              ₹40,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/German_Shepherd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about German Shepherd
              </a>
            </p>
            <button
              onClick={() => toggleModal("German Shepherd")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.animalkingdomaz.com/wp-content/uploads/golden-retriever-adult.jpg"
              alt="Golden Retriever"
              className="pet-image"
            />
            <h2>Golden Retriever</h2>
            <p>
              <span className="highlight">Size</span>: Large (21.5-24 inches)
              <br />
              <span className="highlight">Lifespan</span>: 10-12 years
              <br />
              <span className="highlight">Personality</span>: Friendly,
              intelligent, and devoted
              <br />
              <span className="highlight">Care</span>: Needs regular grooming,
              exercise, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              golden coats and friendly nature.
              <br />
              <span className="highlight">Current Price</span>: ₹25,000 -
              ₹40,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Golden_Retriever"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Golden Retriever
              </a>
              <br />
              <br />
              <br />
            </p>
            <button
              onClick={() => toggleModal("Golden Retriever")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.sCxlaaAKfeDQi2-ksnvo4QHaE7&pid=Api&P=0&h=180"
              alt="Bulldog"
              className="pet-image"
            />
            <h2>Bulldog</h2>
            <p>
              <span className="highlight">Size</span>: Medium (14-15 inches)
              <br />
              <span className="highlight">Lifespan</span>: 8-10 years
              <br />
              <span className="highlight">Personality</span>: Docile, willful,
              and friendly
              <br />
              <span className="highlight">Care</span>: Requires moderate
              exercise, a balanced diet, and regular vet check-ups.
              <br />
              <span className="highlight">Features</span>: Known for their
              loose, wrinkled skin and distinctive pushed-in nose.
              <br />
              <span className="highlight">Current Price</span>: ₹20,000 -
              ₹35,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Bulldog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Bulldog
              </a>
            </p>
            <button
              onClick={() => toggleModal("Bulldog")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://1.bp.blogspot.com/-Wn169GwcdTE/Xs8I--OcaTI/AAAAAAAAhP0/XPT_LZ1rN94a763Fxi13wZ0zKWSYd7KEACLcBGAsYHQ/s1600/Beagle_Breed_Profile_puppy_with_floppy_ears_running_on_the_grass_towards_the_left.jpg"
              alt="Beagle"
              className="pet-image"
            />
            <h2>Beagle</h2>
            <p>
              <span className="highlight">Size</span>: Small to Medium (13-15
              inches)
              <br />
              <span className="highlight">Lifespan</span>: 12-15 years
              <br />
              <span className="highlight">Personality</span>: Curious, friendly,
              and merry
              <br />
              <span className="highlight">Care</span>: Needs regular exercise,
              mental stimulation, and a balanced diet.
              <br />
              <span className="highlight">Features</span>: Known for their
              floppy ears and excellent sense of smell.
              <br />
              <span className="highlight">Current Price</span>: ₹15,000 -
              ₹30,000.
              <br />
              <a
                href="https://www.akc.org/dog-breeds/beagle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Beagle
              </a>
            </p>
            <button onClick={() => toggleModal("Beagle")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.kPZGEgDXMFjPXgEIPzT1JwHaEp&pid=Api&P=0&h=180"
              alt="Poodle"
              className="pet-image"
            />
            <h2>Poodle</h2>
            <p>
              <span className="highlight">Size</span>: Small to Large (10-22
              inches: Toy, Miniature, Standard)
              <br />
              <span className="highlight">Lifespan</span>: 12-15 years
              <br />
              <span className="highlight">Personality</span>: Intelligent,
              active, and alert
              <br />
              <span className="highlight">Care</span>: Requires regular
              grooming, exercise, and mental stimulation.
              <br />
              <span className="highlight">Features</span>: Known for their curly
              coat and versatility in size.
              <br />
              <span className="highlight">Current Price</span>: ₹30,000 -
              ₹70,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Poodle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Poodle
              </a>
              <br />
              <br />
            </p>
            <button onClick={() => toggleModal("Poodle")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://i.pinimg.com/originals/fc/67/90/fc67906f083ff40cf4e413154fe3c901.jpg"
              alt="Dog 7"
              className="pet-image"
            />
            <h2>Siberian Husky</h2>
            <p>
              <span class="highlight">Size</span>: Medium (20-24 inches)
              <br />
              <span class="highlight">Lifespan</span>: 12-15 years
              <br />
              <span class="highlight">Personality</span>: Loyal, outgoing, and
              mischievous
              <br />
              <span class="highlight">Care</span>: Needs regular exercise,
              mental stimulation, and a diet rich in protein.
              <br />
              <span class="highlight">Features</span>: Known for their thick fur
              coat and striking blue eyes.
              <span class="highlight">Current Price</span>: ₹40,000 - ₹80,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Siberian_Husky"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Siberian Husky
              </a>
              <br />
              <br />
            </p>
            <button
              onClick={() => toggleModal("Siberian Husky")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://d.newsweek.com/en/full/1845329/boxer-dog.jpg"
              alt="Dog 8"
              className="pet-image"
            />
            <h2>Boxer</h2>
            <p>
              <span class="highlight">Size</span>: Medium to Large (21.5-25
              inches)
              <br />
              <span class="highlight">Lifespan</span>: 10-12 years
              <br />
              <span class="highlight">Personality</span>: Fun-loving, loyal, and
              active
              <br />
              <span class="highlight">Care</span>: Requires regular exercise,
              social interaction, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their muscular
              build and playful nature.
              <span class="highlight">Current Price</span>: ₹20,000 - ₹40,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Boxer_(dog_breed)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Boxer
              </a>
            </p>
            <button onClick={() => toggleModal("Boxer")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://storage.googleapis.com/nom-nom-now/images/breeds/shih-tzu.jpg"
              alt="Dog 9"
              className="pet-image"
            />
            <h2>Shih Tzu</h2>
            <p>
              <span class="highlight">Size</span>: Small (9-10.5 inches)
              <br />
              <span class="highlight">Lifespan</span>: 10-18 years
              <br />
              <span class="highlight">Personality</span>: Affectionate,
              outgoing, and charming
              <br />
              <span class="highlight">Care</span>: Requires regular grooming,
              exercise, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their long,
              flowing coat and friendly disposition.
              <span class="highlight">Current Price</span>: ₹20,000 - ₹35,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Shih_Tzu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Shih Tzu
              </a>
            </p>
            <button
              onClick={() => toggleModal("Shih Tzu")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://media-be.chewy.com/wp-content/uploads/2021/06/02111021/Rottweiler_Feature-Image.jpg"
              alt="Dog 10"
              className="pet-image"
            />
            <h2>Rottweiler</h2>
            <p>
              <span class="highlight">Size</span>: Large (22-27 inches)
              <br />
              <span class="highlight">Lifespan</span>: 8-10 years
              <br />
              <span class="highlight">Personality</span>: Loyal, confident, and
              protective
              <br />
              <span class="highlight">Care</span>: Needs regular exercise,
              socialization, and a diet rich in protein.
              <br />
              <span class="highlight">Features</span>: Known for their robust
              build and protective nature.
              <span class="highlight">Current Price</span>: ₹25,000 - ₹50,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Rottweiler"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Rottweiler
              </a>
            </p>
            <button
              onClick={() => toggleModal("Rottweiler")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://img.dog-learn.com/dog-breeds/dachshund/images/dachshund-u3-sz3.jpg"
              alt="Dog 11"
              className="pet-image"
            />
            <h2>Dachshund</h2>
            <p>
              <span class="highlight">Size</span>: Small (5-9 inches)
              <br />
              <span class="highlight">Lifespan</span>: 12-16 years
              <br />
              <span class="highlight">Personality</span>: Clever, lively, and
              courageous
              <br />
              <span class="highlight">Care</span>: Requires moderate exercise,
              mental stimulation, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their long
              bodies and short legs.
              <span class="highlight">Current Price</span>: ₹15,000 - ₹30,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Dachshund"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Dachshund
              </a>
              <br />
              <br />
            </p>
            <button
              onClick={() => toggleModal("Dachshund")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.29r9m9rNd_5DYmQzuBxznQHaE8&pid=Api&P=0&h=180"
              alt="Dog 12"
              className="pet-image"
            />
            <h2>Great Dane</h2>
            <p>
              <span class="highlight">Size</span>: Giant (28-34 inches)
              <br />
              <span class="highlight">Lifespan</span>: 7-10 years
              <br />
              <span class="highlight">Personality</span>: Friendly, patient, and
              dependable
              <br />
              <span class="highlight">Care</span>: Needs regular exercise, a
              balanced diet, and comfortable living space.
              <br />
              <span class="highlight">Features</span>: Known for their towering
              height and gentle demeanor.
              <span class="highlight">Current Price</span>: ₹30,000 - ₹70,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Great_Dane"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Great Dane
              </a>
            </p>
            <button
              onClick={() => toggleModal("Great Dane")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.xxBGqZ-ji18X3Q-J8ERx4gHaE8&pid=Api&P=0&h=180"
              alt="Dog 13"
              className="pet-image"
            />
            <h2>Pug</h2>
            <p>
              <span class="highlight">Size</span>: Small (10-13 inches)
              <br />
              <span class="highlight">Lifespan</span>: 13-15 years
              <br />
              <span class="highlight">Personality</span>: Charming, mischievous,
              and loving
              <br />
              <span class="highlight">Care</span>: Requires moderate exercise, a
              balanced diet, and regular vet check-ups.
              <br />
              <span class="highlight">Features</span>: Known for their wrinkled
              face and curled tail.
              <span class="highlight">Current Price</span>: ₹20,000 - ₹35,000.
              <br />
              <a
                href="https://simple.wikipedia.org/wiki/Pug"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Pug
              </a>
            </p>
            <button onClick={() => toggleModal("Pug")} className="btn-modal">
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.oToHhb9XE4VcObfywILFmQHaEo&pid=Api&P=0&h=180"
              alt="Dog 14"
              className="pet-image"
            />
            <h2>Cocker Spaniel</h2>
            <p>
              <span class="highlight">Size</span>: Medium (13.5-15.5 inches)
              <br />
              <span class="highlight">Lifespan</span>: 10-14 years
              <br />
              <span class="highlight">Personality</span>: Gentle, smart, and
              happy
              <br />
              <span class="highlight">Care</span>: Needs regular grooming,
              exercise, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their long,
              wavy ears and expressive eyes.
              <span class="highlight">Current Price</span>: ₹20,000 - ₹35,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/English_Cocker_Spaniel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Cocker Spaniel
              </a>
            </p>
            <button
              onClick={() => toggleModal("Cocker Spaniel")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.3MVLoILcC-stEF1TeUggeQAAAA&pid=Api&P=0&h=180"
              alt="Dog 15"
              className="pet-image"
            />
            <h2>Doberman Pinscher</h2>
            <p>
              <span class="highlight">Size</span>: Large (24-28 inches)
              <br />
              <span class="highlight">Lifespan</span>: 10-12 years
              <br />
              <span class="highlight">Personality</span>: Fearless, loyal, and
              alert
              <br />
              <span class="highlight">Care</span>: Requires regular exercise,
              socialization, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their sleek,
              powerful build and protective nature.
              <span class="highlight">Current Price</span>: ₹20,000 - ₹40,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Dobermann"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Doberman Pinscher
              </a>
            </p>
            <button
              onClick={() => toggleModal("Doberman Pinscher")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.Iju1RxeU2Ao-Q8StSdnuQgHaE7&pid=Api&P=0&h=180"
              alt="Dog 16"
              className="pet-image"
            />
            <h2>Border Collie</h2>
            <p>
              <span class="highlight">Size</span>: Medium (18-22 inches)
              <br />
              <span class="highlight">Lifespan</span>: 12-15 years
              <br />
              <span class="highlight">Personality</span>: Energetic,
              intelligent, and hardworking
              <br />
              <span class="highlight">Care</span>: Needs regular exercise,
              mental stimulation, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their agility
              and herding abilities.
              <span class="highlight">Current Price</span>: ₹25,000 - ₹40,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Border_Collie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Border Collie
              </a>
              <br />
              <br />
            </p>
            <button
              onClick={() => toggleModal("Border Collie")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://st.classi4u.com/ae/ads/537941/chihuahua6e.jpg"
              alt="Dog 17"
              className="pet-image"
            />
            <h2>Chihuahua</h2>
            <p>
              <span class="highlight">Size</span>: Small (5-8 inches)
              <br />
              <span class="highlight">Lifespan</span>: 14-16 years
              <br />
              <span class="highlight">Personality</span>: Charming, alert, and
              intelligent
              <br />
              <span class="highlight">Care</span>: Requires moderate exercise, a
              balanced diet, and regular vet check-ups.
              <br />
              <span class="highlight">Features</span>: Known for their tiny size
              and big personality.
              <span class="highlight">Current Price</span>: ₹15,000 - ₹30,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Chihuahua_(dog_breed)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Chihuahua
              </a>
            </p>
            <button
              onClick={() => toggleModal("Chihuahua")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://www.zooplus.pt/magazine/wp-content/uploads/2018/07/yorkshire-terrier-am-meer.jpg"
              alt="Dog 18"
              className="pet-image"
            />
            <h2>Yorkshire Terrier</h2>
            <p>
              <span class="highlight">Size</span>: Small (7-8 inches)
              <br />
              <span class="highlight">Lifespan</span>: 11-15 years
              <br />
              <span class="highlight">Personality</span>: Spirited, tomboyish,
              and affectionate
              <br />
              <span class="highlight">Care</span>: Requires regular grooming,
              exercise, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their silky
              coat and feisty nature.
              <span class="highlight">Current Price</span>: ₹30,000 - ₹70,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Yorkshire_Terrier"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Yorkshire Terrier
              </a>
              <br></br>
              <br />
            </p>
            <button
              onClick={() => toggleModal("Yorkshire Terrier")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://petkeen.com/wp-content/uploads/2021/05/Saint-Bernard-sitting-in-meadow_rokopix_Shutterstock-1.jpg"
              alt="Dog 19"
              className="pet-image"
            />
            <h2>Saint Bernard</h2>
            <p>
              <span class="highlight">Size</span>: Giant (26-30 inches)
              <br />
              <span class="highlight">Lifespan</span>: 8-10 years
              <br />
              <span class="highlight">Personality</span>: Friendly, patient, and
              gentle
              <br />
              <span class="highlight">Care</span>: Needs regular exercise, a
              balanced diet, and comfortable living space.
              <br />
              <span class="highlight">Features</span>: Known for their massive
              size and rescue abilities.
              <span class="highlight">Current Price</span>: ₹40,000 - ₹1,00,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/St.Bernard(dog_breed)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Saint Bernard
              </a>
            </p>
            <button
              onClick={() => toggleModal("Saint Bernard")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
          <div className="pet-card">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.SkGITVjZOrDdPs0MwVV2FQHaE8&pid=Api&P=0&h=180"
              alt="Dog 20"
              className="pet-image"
            />
            <h2>Maltese</h2>
            <p>
              <span class="highlight">Size</span>: Small (7-9 inches)
              <br />
              <span class="highlight">Lifespan</span>: 12-15 years
              <br />
              <span class="highlight">Personality</span>: Playful, gentle, and
              fearless
              <br />
              <span class="highlight">Care</span>: Requires regular grooming,
              exercise, and a balanced diet.
              <br />
              <span class="highlight">Features</span>: Known for their long,
              white coat and charming personality.
              <span class="highlight">Current Price</span>: ₹30,000 - ₹80,000.
              <br />
              <a
                href="https://en.wikipedia.org/wiki/Maltese_dog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about Maltese
              </a>
            </p>
            <button
              onClick={() => toggleModal("Maltese")}
              className="btn-modal"
            >
              Click to adopt me!
            </button>
          </div>
        </section>
      </main>
      <Modal show={showModal} onClose={toggleModal} dogName={selectedDog} />
    </div>
  );
};

export default Dogs;