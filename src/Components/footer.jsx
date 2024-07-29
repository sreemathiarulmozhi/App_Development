import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>The Paws</h3>

          <p className="footer-links">
            <NavLink to="/">About</NavLink>|
            <NavLink to="/pet-shop">Pet shop</NavLink>|
            <NavLink to="/contact">Contact</NavLink>
          </p>

          <p className="footer-company-name">
            Copyright © 2024 <strong>The Paws</strong> All rights reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Coimbatore</span>
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 9939711841</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:thepaws72810@gmail.com">thepaws72810@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the organisation</span>The Paws is a revolutionary
            online platform dedicated to connecting potential dog owners with
            adorable and loving dogs in need of forever homes.
            <strong>The Paws</strong>
          </p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;