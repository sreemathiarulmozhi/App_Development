import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Import CartProvider
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Menu';
import Service from './Components/Service';
import PetShop from './Components/PetShop';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cows from './Components/Cows';
import Cats from './Components/Cats';
import Birds from './Components/Birds';
import Goats from './Components/Goats';
import Dogs from './Components/Dogs';
import Adopt from './Components/Adopt';
import Thankyou from './Components/Thankyou';
import Petopia from './Components/Petopia';
import Cart from './Components/Cart';
import Payment from './Components/Payment'; // Import Payment component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider> {/* Wrap the routes with CartProvider */}
          <Menu />
          <Routes>
            <Route path="/" element={<About name="About" />} />
            <Route path="/service" element={<Service name="Service" />} />
            <Route path="/pet-shop" element={<PetShop name="Pet-shop" />} />
            <Route path="/contact" element={<Contact name="Contact" />} />
            <Route path="/login" element={<Login name="Login" />} />
            <Route path="/signup" element={<Signup name="Signup" />} />
            <Route path="/cats" element={<Cats name="Cats" />} />
            <Route path="/cows" element={<Cows name="Cows" />} />
            <Route path="/birds" element={<Birds name="Birds" />} />
            <Route path="/goats" element={<Goats name="Goats" />} />
            <Route path="/dogs" element={<Dogs name="Dogs" />} />
            <Route path="/adopt" element={<Adopt name="Adopt" />} />
            <Route path="/thank-you" element={<Thankyou name="Thankyou" />} />
            <Route path="/petopia" element={<Petopia name="Petopia" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} /> {/* Add route for Payment page */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
