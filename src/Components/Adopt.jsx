import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from './MapComponent'; 
import './Adopt.css'; 

const districtCoordinates = {
  Chennai: [13.0827, 80.2707],
Coimbatore: [11.0168, 76.9558],
Madurai: [9.9252, 78.1198],
Trichy : [10.7905, 78.7047],
Salem: [11.6634, 78.1542],
Tirunelveli: [8.7104, 77.7499],
Vellore: [12.9165, 79.1324],
Kancheepuram: [12.8316, 79.7063],
Tirupur: [11.3412, 77.3381],
Nagapattinam: [10.7641, 79.8284],
Dharmapuri: [12.1141, 78.0134],
Cuddalore: [11.7511, 79.4641],
Karur: [10.9646, 78.0847],
Perambalur: [11.2132, 78.5728],
Pudukkottai: [10.3663, 78.7650],
Thanjavur: [10.7905, 79.1390],
Dindigul: [10.3618, 77.9812],
Erode: [11.3412, 77.7174],
Tiruvannamalai: [12.2324, 79.0661],
Tiruchirapalli: [10.7905, 78.7047],
Kanyakumari: [8.0892, 77.5385],
Nilgiris: [11.4042, 76.6933],
Ramanathapuram: [9.3550, 78.5670],
Sivagangai: [9.6953, 78.6464],
Tiruvarur: [10.8061, 79.4121],
Theni: [10.0178, 77.4380],
Vellore: [12.9165, 79.1324],
Virudhunagar: [9.6767, 77.9942],
Kallakurichi: [11.9016, 78.8950],
Ariyalur: [11.1276, 78.6696],
Chengalpattu: [12.7611, 80.0360],
Kanchipuram: [12.8316, 79.7063],
Tirupattur: [12.2574, 78.7460],
Tiruvallur: [13.1584, 79.8811],
Karaikal: [10.9270, 79.8320],
Cuddalore: [11.7511, 79.4641],
Namakkal: [11.2024, 78.1758],
Vellore: [12.9165, 79.1324]
};

const Adopt = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    salary: '',
    address: '',
    pincode: '',
    district: '',
    state: '',
    adoptionEnquiries: '',
    agency: '',
  });
  const [agencies, setAgencies] = useState([]); 
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const navigate = useNavigate(); 
  const allAgencies = [
    { name: "Blue Cross of India", district: "Chennai" },
    { name: "Theosophical Society Animal Welfare", district: "Chennai" },
    { name: "People For Animals (PFA) Chennai", district: "Chennai" },
    { name: "Blue Cross of India", district: "Chennai" },
    { name: "Chennai SPCA", district: "Chennai" },
    { name: "C.P. Ramaswami Aiyar Foundation", district: "Chennai" },
    { name: "Ahimsa Research Foundation", district: "Chennai" },
    { name: "Animal Citizen", district: "Chennai" },
    { name: "Animal Welfare Board of India", district: "Chennai" },
    { name: "Association for the Stray Dogs Sterilisation", district: "Chennai" },
    { name: "Newlife Foundation", district: "Chennai" },
    { name: "Coimbatore Animal Welfare Society (CAWS)", district: "Coimbatore" },
    { name: "Humane Animal Society (HAS)", district: "Coimbatore" },
    { name: "SevaTrust India", district: "Coimbatore" },
    { name: "People For Animals (PFA) Ariyalur", district: "Ariyalur" },
    { name: "Ariyalur Animal Welfare Trust", district: "Ariyalur" },
  { name: "Chengalpattu Animal Rescue Society", district: "Chengalpattu" },
  { name: "Chennai Pet Adoption Center", district: "Chennai" },
  { name: "Coimbatore Furry Friends Network", district: "Coimbatore" },
  { name: "Cuddalore Animal Care Foundation", district: "Cuddalore" },
  { name: "Dharmapuri Pet Rescue Organization", district: "Dharmapuri" },
  { name: "Dindigul Pet Adoption Trust", district: "Dindigul" },
  { name: "Erode Animal Welfare Association", district: "Erode" },
  { name: "Kallakurichi Pet Adoption Society", district: "Kallakurichi" },
  { name: "Kanchipuram Animal Rescue Group", district: "Kanchipuram" },
  { name: "Kanyakumari Pets Adoption Center", district: "Kanyakumari" },
  { name: "Karur Animal Welfare Network", district: "Karur" },
  { name: "Krishnagiri Pet Rescue Society", district: "Krishnagiri" },
  { name: "Madurai Pet Adoption Foundation", district: "Madurai" },
  { name: "Mayiladuthurai Animal Care Group", district: "Mayiladuthurai" },
  { name: "Nagapattinam Pet Rescue Organization", district: "Nagapattinam" },
  { name: "Namakkal Animal Welfare Trust", district: "Namakkal" },
  { name: "Nilgiris Pet Adoption Center", district: "Nilgiris" },
  { name: "Perambalur Animal Rescue Society", district: "Perambalur" },
  { name: "Pudukkottai Animal Care Foundation", district: "Pudukkottai" },
  { name: "Ramanathapuram Pet Adoption Network", district: "Ramanathapuram" },
  { name: "Ranipet Animal Welfare Group", district: "Ranipet" },
  { name: "Salem Pet Rescue Foundation", district: "Salem" },
  { name: "Sivaganga Pet Adoption Society", district: "Sivaganga" },
  { name: "Tenkasi Animal Welfare Organization", district: "Tenkasi" },
  { name: "Thanjavur Pet Adoption Network", district: "Thanjavur" },
  { name: "Theni Animal Rescue Trust", district: "Theni" },
  { name: "Thoothukudi Pet Welfare Society", district: "Thoothukudi" },
  { name: "Tiruchirappalli Pet Adoption Center", district: "Tiruchirappalli" },
  { name: "Tirunelveli Animal Care Group", district: "Tirunelveli" },
  { name: "Tirupattur Pet Rescue Foundation", district: "Tirupattur" },
  { name: "Tiruppur Animal Welfare Network", district: "Tiruppur" },
  { name: "Tiruvallur Pet Adoption Society", district: "Tiruvallur" },
  { name: "Tiruvannamalai Pet Care Organization", district: "Tiruvannamalai" },
  { name: "Tiruvarur Animal Rescue Group", district: "Tiruvarur" },
  { name: "Vellore Pet Adoption Trust", district: "Vellore" },
  { name: "Viluppuram Animal Welfare Network", district: "Viluppuram" },
  { name: "Virudhunagar Pet Welfare Foundation", district: "Virudhunagar" },
  { name: "Madurai Animal Rescue Society (MARS)", district: "Madurai" },
    { name: "People For Animals (PFA) Madurai", district: "Madurai" },
    { name: "Erthamalai Environmental Awareness Movement (TEAM)", district: "Dharmapuri" },
  { name: "Sustainable Health Education and Development Trust", district: "Dharmapuri" },
  { name: "Kanchipuram Dist. SPCA", district: "Kanchipuram" },
  { name: "Karur SPCA", district: "Karur" },
  { name: "Kodaikanal SPCA", district: "Kodaikanal" },
  { name: "Jeeva Seva Trust", district: "Thanjavur" },
  { name: "Mannargudi SPCA", district: "Thanjavur" },
  { name: "Pattukottai SPCA", district: "Thanjavur" },
  { name: "Thiruthuraipoondi SPCA", district: "Thanjavur" },
  { name: "Tiruchirappalli District SPCA", district: "Tiruchirappalli" },
  { name: "Thiruvannamalai SPCA", district: "Thiruvannamalai" },
  { name: "Jeevan Trust", district: "Tiruvarur" },
  { name: "Tirunelveli Dist. SPCA", district: "Tirunelveli" },
  { name: "Tiruvellore SPCA", district: "Tiruvellore" },
  { name: "Salem SPCA", district: "Salem" },
  { name: "Arantangi SPCA", district: "Pudukottai" },
  { name: "Hill View Farm Animal Refuge", district: "Ooty" },
  { name: "Nilgiri SPCA", district: "Ooty" },
  { name: "Terra Anima Trust, Animal Welfare in the Nilgiris", district: "Ooty" },
  { name: "Nagapattinam SPCA", district: "Nagapattinam" },
  { name: "Namakkal SPCA", district: "Namakkal" },
  { name: "East Tanjore Dt. SPCA", district: "Mayiladuthurai" }

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'district') {
      const filteredAgencies = allAgencies.filter(
        (agency) => agency.district === value
      );
      setAgencies(filteredAgencies);
      setSelectedDistrict(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({
      name: '',
      age: '',
      email: '',
      salary: '',
      address: '',
      pincode: '',
      district: '',
      state: '',
      adoptionEnquiries: '',
      agency: '',
    });
    setAgencies([]); 
    setSelectedDistrict(null);
    navigate('/thank-you');
  };

  return (
    <div className="adoption-form-container">
      <video autoPlay muted loop id="bg-video">
        <source
          src="https://cdn.pixabay.com/video/2022/11/22/140111-774507949_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h2>Adoption Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salary/Income:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>District:</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select District</option>
            <option value="Ariyalur">Ariyalur</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Cuddalore">Cuddalore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            <option value="Dindigul">Dindigul</option>
            <option value="Erode">Erode</option>
            <option value="Kallakurichi">Kallakurichi</option>
            <option value="Kanchipuram">Kanchipuram</option>
            <option value="Kanyakumari">Kanyakumari</option>
            <option value="Karur">Karur</option>
            <option value="Krishnagiri">Krishnagiri</option>
            <option value="Madurai">Madurai</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Nagapattinam">Nagapattinam</option>
            <option value="Namakkal">Namakkal</option>
            <option value="Nilgiris">Nilgiris</option>
            <option value="Perambalur">Perambalur</option>
            <option value="Pudukkottai">Pudukkottai</option>
            <option value="Ramanathapuram">Ramanathapuram</option>
            <option value="Ranipet">Ranipet</option>
            <option value="Salem">Salem</option>
            <option value="Sivaganga">Sivaganga</option>
            <option value="Tenkasi">Tenkasi</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Theni">Theni</option>
            <option value="Thoothukudi">Thoothukudi</option>
            <option value="Tiruchirappalli">Tiruchirappalli</option>
            <option value="Tirunelveli">Tirunelveli</option>
            <option value="Tirupattur">Tirupattur</option>
            <option value="Tiruppur">Tiruppur</option>
            <option value="Tiruvallur">Tiruvallur</option>
            <option value="Tiruvannamalai">Tiruvannamalai</option>
            <option value="Tiruvarur">Tiruvarur</option>
            <option value="Vellore">Vellore</option>
            <option value="Viluppuram">Viluppuram</option>
            <option value="Virudhunagar">Virudhunagar</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {selectedDistrict && (
        <MapComponent
          center={districtCoordinates[selectedDistrict]}
          district={selectedDistrict}
        />
      )}
    </div>
  );
};

export default Adopt;
