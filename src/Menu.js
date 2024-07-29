import React, { useState, useEffect } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <div className="logo-container">
          <img
            className="doggo"
            src="https://www.shutterstock.com/image-vector/vector-pet-care-icon-hands-260nw-1843055236.jpg"
            alt="logo img"
            width={30}
          />
          <span className="logo-text">
            <h3>The Paws</h3>
          </span>
        </div>

        <div className="flexCenter h-menu">
          {(toggleMenu || screenWidth >= 500) && (
            <ul className={`nav-list ${toggleMenu ? "show" : "hide"}`}>
              <li>
                <NavLink
                  exact
                  className={({ isActive }) => (isActive ? "active_class" : "")}
                  to="/"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active_class" : "")}
                  to="/pet-shop"
                >
                  Pet Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active_class" : "")}
                  to="/service"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active_class" : "")}
                  to="/contact"
                >
                  <button className="Button">Contact Us</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/login">
                  <button className="Button">Login</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/signup">
                  <button className="Button">Signup</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/adopt">
                  <button className="Button">Adopt Your Pet</button>
                </NavLink>
              </li>
            </ul>
          )}
          <button onClick={toggleNav} className="ham">
            <MenuIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
