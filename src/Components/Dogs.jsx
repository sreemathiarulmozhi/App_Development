import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Modal from "./Modal"; // Ensure this path is correct
import "./Dogs.css"; // Add your CSS file here

const Dogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const dogs = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtdFAE5m183nwhdFys1N41WsGgRGJgRUgyw&s",
      name: "Indian Pariah Dog",
      size: "Medium (18-25 inches)",
      lifespan: "10-14 years",
      personality: "Intelligent, alert, and adaptable",
      care: "Low maintenance, needs regular exercise and a balanced diet.",
      features: "Known for their resilience and survival instincts.",
      price: "₹5,000 - ₹10,000",
      link: "https://en.wikipedia.org/wiki/Indian_pariah_dog"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/The_Rajapaalayam_Breead_2.png/220px-The_Rajapaalayam_Breead_2.png",
      name: "Rajapalayam",
      size: "Large (25-30 inches)",
      lifespan: "9-12 years",
      personality: "Loyal, brave, and alert",
      care: "Requires regular exercise and a protein-rich diet.",
      features: "Known for their hunting skills and guard dog capabilities.",
      price: "₹8,000 - ₹15,000",
      link: "https://en.wikipedia.org/wiki/Rajapalayam_dog"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mudhol_hound_dog_3.png/220px-Mudhol_hound_dog_3.png",
      name: "Mudhol Hound",
      size: "Medium to Large (23-29 inches)",
      lifespan: "10-15 years",
      personality: "Agile, loyal, and intelligent",
      care: "Requires regular exercise and a balanced diet.",
      features: "Known for their speed and hunting abilities.",
      price: "₹7,000 - ₹20,000",
      link: "https://en.wikipedia.org/wiki/Mudhol_Hound"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kanni.jpg",
      name: "Kanni",
      size: "Medium (20-25 inches)",
      lifespan: "12-16 years",
      personality: "Loyal, gentle, and agile",
      care: "Requires regular exercise and a balanced diet.",
      features: "Known for their hunting skills and speed.",
      price: "₹10,000 - ₹20,000",
      link: "https://en.wikipedia.org/wiki/Kanni"
    },
    {
      image: "https://www.wagr.ai/cdn/shop/articles/breed-at-a-glance-chippiparai-indian-sight-hound-448986.jpg?v=1701182882",
      name: "Chippiparai",
      size: "Medium (25-27 inches)",
      lifespan: "13-15 years",
      personality: "Loyal, independent, and intelligent",
      care: "Needs regular exercise and a balanced diet.",
      features: "Known for their hunting skills and loyalty.",
      price: "₹5,000 - ₹12,000",
      link: "https://en.wikipedia.org/wiki/Chippiparai"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Combai_Breed_1.png/640px-The_Combai_Breed_1.png",
      name: "Kombai",
      size: "Medium (23-25 inches)",
      lifespan: "12-15 years",
      personality: "Brave, loyal, and agile",
      care: "Requires regular exercise and a protein-rich diet.",
      features: "Known for their hunting skills and bravery.",
      price: "₹7,000 - ₹15,000",
      link: "https://en.wikipedia.org/wiki/Kombai_dog"
    },
    {
      image: "https://www.shutterstock.com/image-photo/bakharwal-dog-on-rock-himalayas-260nw-2327334049.jpg",
      name: "Bakharwal Dog",
      size: "Large (24-30 inches)",
      lifespan: "10-14 years",
      personality: "Protective, loyal, and strong",
      care: "Needs regular exercise and a balanced diet.",
      features: "Known for their protective nature and strength.",
      price: "₹15,000 - ₹25,000",
      link: "https://en.wikipedia.org/wiki/Bakharwal_dog"
    },
    {
      image: "https://happypet.care/_next/image?url=https%3A%2F%2Fhappypetproduction.s3.ap-south-1.amazonaws.com%2FbreedFiles%2Fdog%2F64cdf7927f61208fdb61fb49%2FgalleryImages%2Flarge_file_1691643835575.webp&w=1080&q=75",
      name: "Gaddi Kutta",
      size: "Large (24-28 inches)",
      lifespan: "10-14 years",
      personality: "Strong, loyal, and protective",
      care: "Requires regular exercise and a balanced diet.",
      features: "Known for their strength and guarding abilities.",
      price: "₹10,000 - ₹20,000",
      link: "https://en.wikipedia.org/wiki/Himalayan_Sheepdog"
    },
    {
      image: "https://tse4.mm.bing.net/th?id=OIP.tTuP_kMf6Kv2tqvh8v4eEAHaE8&pid=Api&P=0&h=180",
      name: "Labrador Retriever",
      size: "Large (21.5-24.5 inches)",
      lifespan: "10-12 years",
      personality: "Friendly, outgoing, and high-spirited",
      care: "Requires regular exercise, mental stimulation, and a balanced diet.",
      features: "Known for their kind eyes and strong build.",
      price: "₹15,000 - ₹25,000",
      link: "https://en.wikipedia.org/wiki/Labrador_Retriever"
    },
    {
      image: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "German Shepherd",
      size: "Large (22-26 inches)",
      lifespan: "9-13 years",
      personality: "Intelligent, courageous, and confident",
      care: "Needs regular exercise, mental stimulation, and a high-protein diet.",
      features: "Known for their versatility and work ethic.",
      price: "₹20,000 - ₹40,000",
      link: "https://en.wikipedia.org/wiki/German_Shepherd"
    },
    {
      image: "https://www.animalkingdomaz.com/wp-content/uploads/golden-retriever-adult.jpg",
      name: "Golden Retriever",
      size: "Large (21.5-24 inches)",
      lifespan: "10-12 years",
      personality: "Friendly, intelligent, and devoted",
      care: "Needs regular grooming, exercise, and a balanced diet.",
      features: "Known for their golden coats and friendly nature.",
      price: "₹25,000 - ₹40,000",
      link: "https://en.wikipedia.org/wiki/Golden_Retriever"
    },
      {
        "name": "Bulldog",
        "image": "https://tse2.mm.bing.net/th?id=OIP.sCxlaaAKfeDQi2-ksnvo4QHaE7&pid=Api&P=0&h=180",
        "size": "Medium (14-15 inches)",
        "lifespan": "8-10 years",
        "personality": "Docile, willful, and friendly",
        "care": "Requires moderate exercise, a balanced diet, and regular vet check-ups.",
        "features": "Known for their loose, wrinkled skin and distinctive pushed-in nose.",
        "price": "₹20,000 - ₹35,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Bulldog"
      },
      {
        "name": "Beagle",
        "image": "https://1.bp.blogspot.com/-Wn169GwcdTE/Xs8I--OcaTI/AAAAAAAAhP0/XPT_LZ1rN94a763Fxi13wZ0zKWSYd7KEACLcBGAsYHQ/s1600/Beagle_Breed_Profile_puppy_with_floppy_ears_running_on_the_grass_towards_the_left.jpg",
        "size": "Small to Medium (13-15 inches)",
        "lifespan": "12-15 years",
        "personality": "Curious, friendly, and merry",
        "care": "Needs regular exercise, mental stimulation, and a balanced diet.",
        "features": "Known for their floppy ears and excellent sense of smell.",
        "price": "₹15,000 - ₹30,000",
        "learnMoreUrl": "https://www.akc.org/dog-breeds/beagle/"
      },
      {
        "name": "Poodle",
        "image": "https://tse3.mm.bing.net/th?id=OIP.kPZGEgDXMFjPXgEIPzT1JwHaEp&pid=Api&P=0&h=180",
        "size": "Small to Large (10-22 inches: Toy, Miniature, Standard)",
        "lifespan": "12-15 years",
        "personality": "Intelligent, active, and alert",
        "care": "Requires regular grooming, exercise, and mental stimulation.",
        "features": "Known for their curly coat and versatility in size.",
        "price": "₹30,000 - ₹70,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Poodle"
      },
      {
        "name": "Siberian Husky",
        "image": "https://i.pinimg.com/originals/fc/67/90/fc67906f083ff40cf4e413154fe3c901.jpg",
        "size": "Medium (20-24 inches)",
        "lifespan": "12-15 years",
        "personality": "Loyal, outgoing, and mischievous",
        "care": "Needs regular exercise, mental stimulation, and a diet rich in protein.",
        "features": "Known for their thick fur coat and striking blue eyes.",
        "price": "₹40,000 - ₹80,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Siberian_Husky"
      },
      {
        "name": "Boxer",
        "image": "https://d.newsweek.com/en/full/1845329/boxer-dog.jpg",
        "size": "Medium to Large (21.5-25 inches)",
        "lifespan": "10-12 years",
        "personality": "Fun-loving, loyal, and active",
        "care": "Requires regular exercise, social interaction, and a balanced diet.",
        "features": "Known for their muscular build and playful nature.",
        "price": "₹20,000 - ₹40,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Boxer_(dog_breed)"
      },
      {
        "name": "Shih Tzu",
        "image": "https://storage.googleapis.com/nom-nom-now/images/breeds/shih-tzu.jpg",
        "size": "Small (9-10.5 inches)",
        "lifespan": "10-18 years",
        "personality": "Affectionate, outgoing, and charming",
        "care": "Requires regular grooming, exercise, and a balanced diet.",
        "features": "Known for their long, flowing coat and friendly disposition.",
        "price": "₹20,000 - ₹35,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Shih_Tzu"
      },
      {
        "name": "Rottweiler",
        "image": "https://media-be.chewy.com/wp-content/uploads/2021/06/02111021/Rottweiler_Feature-Image.jpg",
        "size": "Large (22-27 inches)",
        "lifespan": "8-10 years",
        "personality": "Loyal, confident, and protective",
        "care": "Needs regular exercise, socialization, and a diet rich in protein.",
        "features": "Known for their robust build and protective nature.",
        "price": "₹25,000 - ₹50,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Rottweiler"
      },
      {
        "name": "Dachshund",
        "image": "https://img.dog-learn.com/dog-breeds/dachshund/images/dachshund-u3-sz3.jpg",
        "size": "Small (5-9 inches)",
        "lifespan": "12-16 years",
        "personality": "Clever, lively, and courageous",
        "care": "Requires moderate exercise, mental stimulation, and a balanced diet.",
        "features": "Known for their long bodies and short legs.",
        "price": "₹15,000 - ₹30,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Dachshund"
      },
      {
        "name": "Great Dane",
        "image": "https://tse2.mm.bing.net/th?id=OIP.29r9m9rNd_5DYmQzuBxznQHaE8&pid=Api&P=0&h=180",
        "size": "Giant (28-34 inches)",
        "lifespan": "7-10 years",
        "personality": "Friendly, patient, and dependable",
        "care": "Needs regular exercise, a balanced diet, and comfortable living space.",
        "features": "Known for their towering height and gentle demeanor.",
        "price": "₹30,000 - ₹70,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Great_Dane"
      },
      {
        "name": "Pug",
        "image": "https://tse1.mm.bing.net/th?id=OIP.xxBGqZ-ji18X3Q-J8ERx4gHaE8&pid=Api&P=0&h=180",
        "size": "Small (10-13 inches)",
        "lifespan": "13-15 years",
        "personality": "Charming, mischievous, and loving",
        "care": "Requires moderate exercise, a balanced diet, and regular vet check-ups.",
        "features": "Known for their wrinkled face and curled tail.",
        "price": "₹20,000 - ₹35,000",
        "learnMoreUrl": "https://simple.wikipedia.org/wiki/Pug"
      },
      {
        "name": "Cocker Spaniel",
        "image": "https://tse3.mm.bing.net/th?id=OIP.oToHhb9XE4VcObfywILFmQHaEo&pid=Api&P=0&h=180",
        "size": "Medium (13.5-15.5 inches)",
        "lifespan": "10-14 years",
        "personality": "Gentle, smart, and happy",
        "care": "Needs regular grooming, exercise, and a balanced diet.",
        "features": "Known for their long, wavy ears and expressive eyes.",
        "price": "₹20,000 - ₹35,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/English_Cocker_Spaniel"
      },
      {
        "name": "Doberman Pinscher",
        "image": "https://tse1.mm.bing.net/th?id=OIP.3MVLoILcC-stEF1TeUggeQAAAA&pid=Api&P=0&h=180",
        "size": "Large (24-28 inches)",
        "lifespan": "10-12 years",
        "personality": "Fearless, loyal, and alert",
        "care": "Requires regular exercise, socialization, and a balanced diet.",
        "features": "Known for their sleek, powerful build and protective nature.",
        "price": "₹20,000 - ₹40,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Dobermann"
      },
      {
        "name": "Border Collie",
        "image": "https://tse2.mm.bing.net/th?id=OIP.Iju1RxeU2Ao-Q8StSdnuQgHaE7&pid=Api&P=0&h=180",
        "size": "Medium (18-22 inches)",
        "lifespan": "12-15 years",
        "personality": "Intelligent, energetic, and responsive",
        "care": "Needs ample exercise, mental stimulation, and a balanced diet.",
        "features": "Known for their herding abilities and high intelligence.",
        "price": "₹20,000 - ₹40,000",
        "learnMoreUrl": "https://en.wikipedia.org/wiki/Border_Collie"
      }
    
  ];

  const showDogDetails = (dog) => {
    setSelectedDog(dog);
    setShowModal(true);
  };

  const handleAdoptClick = (dog) => {
    // Navigate to the "Adopt Your Pet" component with the dog ID or name
    navigate("/Adopt", { state: { dog } });
  };

  return (
    <div>
      <header>
        <h1>Adopt a Pet</h1>
      </header>
      <main>
        <section className="pet-cards">
          {dogs.map(dog => (
            <div key={dog.name} className="pet-card">
              <div className="pet-image-container">
                <img src={dog.image} alt={dog.name} className="pet-image" />
                <div className="overlay">
                  <button
                    onClick={() => showDogDetails(dog)}
                    className="more-button"
                  >
                    More...
                  </button>
                </div>
              </div>
              <h2>{dog.name}</h2>
              <button
                onClick={() => handleAdoptClick(dog)}
                className="adopt-button"
              >
                Click to Adopt Me
              </button>
            </div>
          ))}
        </section>
        {showModal && selectedDog && (
          <Modal dog={selectedDog} onClose={() => setShowModal(false)} />
        )}
      </main>
    </div>
  );
};

export default Dogs;
