import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Menu";
import Service from "./Components/Service";
import PetShop from "./Components/PetShop";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./App.css";
import Cows from "./Components/Cows";
import Cats from "./Components/Cats";
import Birds from "./Components/Birds";
import Goats from "./Components/Goats";
import Dogs from "./Components/Dogs";
import Adopt from "./Components/Adopt";
import Thankyou from "./Components/Thankyou";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path="/" element={<About name="About" />} />
            <Route path="/service" element={<Service name="Service" />} />
            <Route path="/pet-shop" element={<PetShop name="pet-shop" />} />
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
