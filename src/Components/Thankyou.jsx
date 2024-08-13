import React from "react";

const Thankyou = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Thank You!</h2>
      <p style={styles.paragraph}>
        Your form has been successfully submitted. We will get back to you soon.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    boxSizing: "border-box",
    backgroundImage: 'url("https://www.livinghouse.ca/shared/media/blog/46/image-1683906941.jpg")', // URL of the background image
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
  },
  heading: {
    color: "black",
    marginBottom: "20px",
    fontSize: "36px",
  },
  paragraph: {
    color: "black",
    fontSize: "24px", 
  },
};

export default Thankyou;