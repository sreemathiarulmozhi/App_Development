import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Menu";
import Service from "./Components/Service";
import PetShop from "./Components/PetShop";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Cows from "./Components/Cows";
import Cats from "./Components/Cats";
import Birds from "./Components/Birds";
import Goats from "./Components/Goats";
import Dogs from "./Components/Dogs";
import Adopt from "./Components/Adopt";
import Thankyou from "./Components/Thankyou";
import Fish from "./Components/Fish";
import Petopia from "./Components/Petopia";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import Donate from "./Components/Donate";
import Settings from "./Components/Settings";
import MapComponent from "./Components/MapComponent"; 
import { CartProvider } from "./CartContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Menu />
          <Routes>
            <Route exact path="/" element={<About name="About" />} />
            <Route path="/service" element={<Service name="Service" />} />
            <Route path="/pet-shop" element={<PetShop name="PetShop" />} />
            <Route path="/contact" element={<Contact name="Contact" />} />
            <Route path="/login" element={<Login name="Login" />} />
            <Route path="/signup" element={<Signup name="Signup" />} />
            <Route path="/cats" element={<Cats name="Cats" />} />
            <Route path="/cows" element={<Cows name="Cows" />} />
            <Route path="/birds" element={<Birds name="Birds" />} />
            <Route path="/goats" element={<Goats name="Goats" />} />
            <Route path="/dogs" element={<Dogs name="Dogs" />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/thank-you" element={<Thankyou name="Thankyou" />} />
            <Route path="/donate" element={<Donate name="Donate" />} />
            <Route path="/fish" element={<Fish name="Fish" />} />
            <Route path="/petopia" element={<Petopia name="Petopia" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/map" element={<MapComponent />} /> 
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
