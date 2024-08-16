import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, AppBar, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ServiceIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PetsIcon from "@mui/icons-material/Pets";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MenuComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "About", icon: <HomeIcon />, path: "/" },
    { text: "Pet Shop", icon: <StoreIcon />, path: "/pet-shop" },
    { text: "Services", icon: <ServiceIcon />, path: "/service" },
    { text: "Contact Us", icon: <ContactMailIcon />, path: "/contact" },
    { text: "Adopt Your Pet", icon: <PetsIcon />, path: "/adopt" },
    { text: "Petopia", icon: <PetsIcon />, path: "/petopia" }
  ];

  return (
    <>
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <div className="logo-container">
            <img
              className="logo"
              src="https://www.shutterstock.com/image-vector/vector-pet-care-icon-hands-260nw-1843055236.jpg"
              alt="logo"
            />
            <h3 className="logo-text">The Paws</h3>
          </div>
          <div className="profile-menu">
            <IconButton onClick={handleMenuOpen}>
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem component={NavLink} to="/login" onClick={handleMenuClose}>
                Login
              </MenuItem>
              <MenuItem component={NavLink} to="/signup" onClick={handleMenuClose}>
                Signup
              </MenuItem>
              <MenuItem component={NavLink} to="/settings" onClick={handleMenuClose}>
                Settings
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} className="drawer">
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer(false)}>
            <MenuIcon />
          </IconButton>
        </div>
        <List className="drawer-list">
          {menuItems.map((item) => (
            <ListItem button key={item.text} component={NavLink} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuComponent;
