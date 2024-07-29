import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { Button, TextField, Box, Typography, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = () => {
    alert("Logged in!");
  };

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1, // Place it behind the content
    },
    container: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "300px",
      zIndex: 1,
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    icon: {
      width: "30px",
      height: "30px",
      margin: "0 10px",
      cursor: "pointer",
    },
    signUpText: {
      color: "#4a3929", // Change this to a shade of brown
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <video autoPlay muted loop style={styles.video}>
        <source
          src="https://videos.pexels.com/video-files/3023167/3023167-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Box style={styles.container}>
        <Typography variant="h5">Login to Pet Care and Adoption</Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          fullWidth
          style={{
            marginTop: "20px",
            backgroundColor: "#4a3929",
            color: "white",
          }}
        >
          Login
        </Button>
        <Box style={styles.iconContainer}>
          <IconButton
            style={{ color: "#DB4437" }}
            onClick={() => alert("Login with Google")}
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            style={{ color: "#4a3929" }} // Microsoft color
            onClick={() => alert("Login with Microsoft")}
          >
            <MicrosoftIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} style={styles.signUpText}>
            SignUp!
          </span>
        </Typography>
      </Box>
    </div>
  );
}

export default Login;