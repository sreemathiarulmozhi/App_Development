import React, { useState, useEffect } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu as MuiMenu, MenuItem, IconButton } from "@mui/material";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginSignup = () => {
    setIsLoggedIn(true);
    handleMenuClose();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleMenuClose();
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
                <NavLink to="/">
                  <button className="Button">About</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/pet-shop">
                  <button className="Button">Pet Shop</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <button className="Button">Services</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <button className="Button">Contact Us</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/adopt">
                  <button className="Button">Adopt Your Pet</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/petopia">
                  <button className="Button">Petopia</button>
                </NavLink>
              </li>
            </ul>
          )}
          <IconButton onClick={handleMenuClick}>
            <AccountCircleIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>

          <MuiMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {isLoggedIn ? (
              <>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/settings">Settings</NavLink>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/login" onClick={handleLoginSignup}>Login</NavLink>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/signup" onClick={handleLoginSignup}>Signup</NavLink>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/settings">Settings</NavLink>
                </MenuItem>
              </>
            )}
          </MuiMenu>
          <button onClick={toggleNav} className="ham">
            <MenuIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
