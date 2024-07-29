import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Adopt.css"; // Import the CSS file for styling

const Adopt = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    salary: "",
    address: "",
    pincode: "",
    district: "",
    state: "",
    adoptionEnquiries: "",
    agency: "",
  });
  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      age: "",
      email: "",
      salary: "",
      address: "",
      pincode: "",
      district: "",
      state: "",
      adoptionEnquiries: "",
      agency: "",
    });
    navigate("/thank-you"); // Redirect to Thank You page
  };

  return (
    <div className="adoption-form-container">
      <video autoPlay muted loop id="bg-video">
        <source src="https://cdn.pixabay.com/video/2022/11/22/140111-774507949_large.mp4" type="video/mp4" />
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
            {/* Add district options here */}
            <option value="District1">District1</option>
            <option value="District2">District2</option>
          </select>
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Adoption Enquiries:</label>
          <textarea
            name="adoptionEnquiries"
            value={formData.adoptionEnquiries}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Agency:</label>
          <select
            name="agency"
            value={formData.agency}
            onChange={handleChange}
            required
          >
            <option value="">Select Agency</option>
            {/* Add agency options here */}
            <option value="Agency1">Agency1</option>
            <option value="Agency2">Agency2</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="contact-us">For enquiries, please contact us.</p>
    </div>
  );
};

export default Adopt;
