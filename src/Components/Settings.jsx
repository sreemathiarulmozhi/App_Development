import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user details from localStorage
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");

    navigate("/login");
  };

  const handleSave = () => {
    navigate("/");
  };

  return (
    <div className="settings-container">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ maxWidth: 500, margin: "0 auto" }}
      >
        <TextField
          label="Name"
          value={userDetails.name}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }} 
        />
        <TextField
          label="Email"
          value={userDetails.email}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Phone Number"
          value={userDetails.phone}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Password"
          type="password"
          value={userDetails.password}
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ readOnly: true }} 
        />
        <div className="password-options">
          <Button variant="text" color="primary">
            Forgot Password
          </Button>
          <Button variant="text" color="primary">
            Reset using Email
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSave}
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default Settings;
