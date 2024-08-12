import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Petopia.css";
import { useCart } from "../CartContext"; // Assuming you have a CartContext
import { ShoppingCart } from "@mui/icons-material";

const Petopia = () => {
  const navigate = useNavigate();
  const { addToCart, getProductQuantity, removeFromCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Bird Cage",
      category: "Birds",
      price: 1200,
      image: "https://m.media-amazon.com/images/I/61gF5SLioqL._SX679_.jpg",
    },
    {
      id: 2,
      name: "Bird Cage",
      category: "Birds",
      price: 1200,
      image:
        "https://m.media-amazon.com/images/I/612bjDF4qJL._AC_UF480,480_SR480,480_.jpg",
    },
    {
      id: 3,
      name: "Dog Leash",
      category: "Dogs",
      price: 400,
      image:
        "https://m.media-amazon.com/images/I/61XeCsmCNXL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      name: "Dog Leash",
      category: "Dogs",
      price: 400,
      image: "https://m.media-amazon.com/images/I/71G24nKJcpL._SX679_.jpg",
    },
    {
      id: 5,
      name: "Cat Food",
      category: "Cats",
      price: 300,
      image:
        "https://m.media-amazon.com/images/I/81sl1WIJYOL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 6,
      name: "Fish Tank",
      category: "Fishes",
      price: 5000,
      image:
        "https://m.media-amazon.com/images/I/61jkDP0g56L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 7,
      name: "Hamster Playhouse",
      category: "Hamsters",
      price: 600,
      image:
        "https://m.media-amazon.com/images/I/51ijwfa8geL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 8,
      name: "Rabbit Clothing",
      category: "Rabbits",
      price: 2000,
      image:
        "https://m.media-amazon.com/images/I/61cCRPYaZOL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 9,
      name: "Cat Scratching Pad",
      category: "Cats",
      price: 369,
      image:
        "https://m.media-amazon.com/images/I/41Na+S39rqL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 10,
      name: "Cat Oral Care",
      category: "Cats",
      price: 320,
      image:
        "https://m.media-amazon.com/images/I/61n2SLSBPcL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 11,
      name: "Cat Harness (Full Body)",
      category: "Cats",
      price: 450,
      image:
        "https://m.media-amazon.com/images/I/71gKdTVf2wL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 12,
      name: "Shedding Brush (Cats & Dogs)",
      category: "Cats",
      price: 181,
      image:
        "https://m.media-amazon.com/images/I/61qjyzM3+BL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 13,
      name: "Cat Biscuits (Chicken Induced)",
      category: "Cats",
      price: 221,
      image:
        "https://m.media-amazon.com/images/I/71YmWZBVJlL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 14,
      name: "Cat Buckle with Collar and Belt",
      category: "Cats",
      price: 248,
      image:
        "https://m.media-amazon.com/images/I/414Ba5ufsCL.SX300_SY300_QL70_FMwebp.jpg",
    },
    {
      id: 15,
      name: "Pet Carrier Backpack (Transparent)",
      category: "Cats",
      price: 1248,
      image:
        "https://m.media-amazon.com/images/I/51ac4RPIErL.SX300_SY300_QL70_FMwebp.jpg",
    },
    {
      id: 16,
      name: "CatNip Toy with Edible Mint (Teeth Hygiene)",
      category: "Cats",
      price: 600,
      image: "https://m.media-amazon.com/images/I/61bZRbYx5aL.SX679.jpg",
    },
    {
      id: 17,
      name: "Cat Feeder Bowl with Water",
      category: "Cats",
      price: 990,
      image: "https://m.media-amazon.com/images/I/61Onx1N7skL.SX679.jpg",
    },
    {
      id: 18,
      name: "Cat Litter Odour Eliminator",
      category: "Cats",
      price: 284,
      image:
        "https://m.media-amazon.com/images/I/31gMZeDcz9L.SX300_SY300_QL70_FMwebp.jpg",
    },
    {
      id: 19,
      name: "Cat Collar Combo of 2 (Floral Prints)",
      category: "Cats",
      price: 699,
      image:
        "https://m.media-amazon.com/images/I/61O9cGbVZaL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 20,
      name: "Cat Plush Toys",
      category: "Cats",
      price: 399,
      image:
        "https://m.media-amazon.com/images/I/61UvpPw0CKL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 21,
      name: "Cat Nail Cutter",
      category: "Cats",
      price: 449,
      image: "https://m.media-amazon.com/images/I/51JWcw7x0gL.SX679.jpg",
    },
    {
      id: 22,
      name: "Cat Spring Toys (Pack of 13)",
      category: "Cats",
      price: 1599,
      image:
        "https://m.media-amazon.com/images/I/61M45raAY5S.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 23,
      name: "Knot Macrame Hanging Swing Cat Basket",
      category: "Cats",
      price: 1299,
      image:
        "https://m.media-amazon.com/images/I/514q6U7c70L.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 24,
      name: "Cat Brush for Bathing",
      category: "Cats",
      price: 199,
      image:
        "https://m.media-amazon.com/images/I/419qxaUiBuL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 25,
      name: "Cat Harness (Escape Proof)",
      category: "Cats",
      price: 1199,
      image:
        "https://m.media-amazon.com/images/I/7155h3WmFKL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 26,
      name: "Cat Clean Wipes",
      category: "Cats",
      price: 199,
      image:
        "https://m.media-amazon.com/images/I/51xMd4q7XBL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 27,
      name: "Cat Steam Brush",
      category: "Cats",
      price: 999,
      image:
        "https://m.media-amazon.com/images/I/7176uvHQNvL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 28,
      name: "Cat cute dress",
      category: "Cats",
      price: 1499,
      image:
        "https://m.media-amazon.com/images/I/71tiQFIvD0L.AC_UL480_FMwebp_QL65.jpg",
    },
    {
      id: 29,
      name: "Cat cute dress",
      category: "Cats",
      price: 999,
      image:
        "https://m.media-amazon.com/images/I/31UcGfN4PVL.SX300_SY300_QL70_FMwebp.jpg",
    },
    {
      id: 30,
      name: "Cat Coolers",
      category: "Cats",
      price: 999,
      image:
        "https://m.media-amazon.com/images/I/61AXugwOQUL.AC_UL480_FMwebp_QL65.jpg",
    },
    {
        id: 31,
        name: "Jawclamp dog poop scoper",
        category: "Dogs",
        price: 299,
        image:
          "https://m.media-amazon.com/images/I/71C2p39WasL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 32,
        name: "Dog chew toys",
        category: "Dogs",
        price: 499,
        image: "https://m.media-amazon.com/images/I/71kjtvLNy4L",
      },
      {
        id: 33,
        name: "Female dog diapers(pack of 3)",
        category: "Dogs",
        price: 340,
        image: "https://m.media-amazon.com/images/I/61des4gds0L",
      },
      {
        id: 34,
        name: "Dog treats",
        category: "Dogs",
        price: 299,
        image: "https://m.media-amazon.com/images/I/61tLHcVLpQL",
      },
      {
        id: 35,
        name: "Reversible Dog Bed",
        category: "Dogs",
        price: 1900,
        image:
          "https://m.media-amazon.com/images/I/819gQVR2eeL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 36,
        name: "16 feet nylon dog chain",
        category: "Dogs",
        price: 1299,
        image:
          "https://m.media-amazon.com/images/I/61Ir9mxJERL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 37,
        name: "Dogs Eye & Ear Cleaning Pads",
        category: "Dogs",
        price: 289,
        image:
          "https://m.media-amazon.com/images/I/41bZHG50S-L.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 38,
        name: "Grooming silicon shampoo dispenser for dogs",
        category: "Dogs",
        price: 350,
        image:
          "https://m.media-amazon.com/images/I/81QAJ6Q3XcL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 39,
        name: "Portable Paw Cleaner",
        category: "Dogs",
        price: 480,
        image:
          "https://m.media-amazon.com/images/I/71enlG1qiOL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 40,
        name: "Portable Cup",
        category: "Dogs",
        price: 159,
        image:
          "https://m.media-amazon.com/images/I/51boXBRKyaL.AC_UL320.jpg",
      },
      {
        id: 41,
        name: "Puppies Water Bottle",
        category: "Dogs",
        price: 399,
        image:
          "https://m.media-amazon.com/images/I/414gIdoFwNL.AC_UL320.jpg",
      },
      {
        id: 42,
        name: "Dog Mouth Cap(Safety)",
        category: "Dogs",
        price: 659,
        image:
          "https://m.media-amazon.com/images/I/61q06cuKQ7L.AC_UL320.jpg",
      },
      {
        id: 43,
        name: "Feeding cups",
        category: "Dogs",
        price: 150,
        image:
          "https://m.media-amazon.com/images/I/61DkdygMJpL.AC_SR278,278_QL70.jpg",
      },
      {
        id: 44,
        name: "Dog-O-Bow Tuxedo for furries",
        category: "Dogs",
        price: 1179,
        image:
          "https://m.media-amazon.com/images/I/61O9Jy+JgfL.AC_SR405%2C405.jpg",
      },
      {
        id: 45,
        name: "Pet mart Dog Grooming Kit",
        category: "Dogs",
        price: 409,
        image:
          "https://m.media-amazon.com/images/I/616apOks9QL.AC_UL480_QL65.jpg",
      },
      {
        id: 46,
        name: "Dog Poop tray Training Kit",
        category: "Dogs",
        price: 1500,
        image:
          "https://m.media-amazon.com/images/I/61WBRRBudOL.AC_UL480_QL65.jpg",
      },
      {
        id: 47,
        name: "Dog PlayPen",
        category: "Dogs",
        price: 3600,
        image:
          "https://m.media-amazon.com/images/I/71dXV62MeLL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 48,
        name: "Cats & Dogs Pet Kennel",
        category: "Dogs",
        price: 1599,
        image:
          "https://m.media-amazon.com/images/I/41G9kMafEeL.SY300_SX300_QL70_FMwebp.jpg",
      },
      {
        id: 49,
        name: "Puptail Dog Dress",
        category: "Dogs",
        price: 1600,
        image:
          "https://m.media-amazon.com/images/I/61Z9iTbfbsL.AC_UL960_FMwebp_QL65.jpg",
      },
      {
        id: 50,
        name: "Floral pattern frock for puppies",
        category: "Dogs",
        price: 630,
        image:
          "https://m.media-amazon.com/images/I/61Z9iTbfbsL.AC_UL960_FMwebp_QL65.jpg",
      },
      {
        id: 51,
        name: "Dog-o-suit Tuxedo",
        category: "Dogs",
        price: 1400,
        image:
          "https://m.media-amazon.com/images/I/61W0qfvWLQL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 52,
        name: "Dog Boots/Shoes",
        category: "Dogs",
        price: 677,
        image:
          "https://m.media-amazon.com/images/I/81qtL0plmZL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 53,
        name: "Multicolor Jacket for furry buddy",
        category: "Dogs",
        price: 1627,
        image:
          "https://m.media-amazon.com/images/I/510tqPrALoL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 54,
        name: "Kraftidy Metal Chain collar",
        category: "Dogs",
        price: 345,
        image:
          "https://m.media-amazon.com/images/I/61+P7ojS0OL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 55,
        name: "Reflective Belts for Street Babies",
        category: "Dogs",
        price: 169,
        image:
          "https://m.media-amazon.com/images/I/61DS9Ycn+-L.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 56,
        name: "Rubber Squeaky Ball(Toys)",
        category: "Dogs",
        price: 180,
        image:
          "https://m.media-amazon.com/images/I/31x7VWEhLwL.SY300_SX300_QL70_FMwebp.jpg",
      },
      {
        id: 57,
        name: "Dog Digestive Probiotics",
        category: "Dogs",
        price: 549,
        image:
          "https://m.media-amazon.com/images/I/51SlcE4MICL.AC_UL480_FMwebp_QL65.jpg",
      },
      {
        id: 58,
        name: "Foodie Puppies Pet Puzzle Food Dispenser",
        category: "Dogs",
        price: 460,
        image:
          "https://m.media-amazon.com/images/I/71OaME+kofL.AC_UL480_FMwebp_QL65.jpg",
      },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOption, setSortOption] = useState("low");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Updated items per page

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleFilterChange = (event) => setFilterCategory(event.target.value);

  const handleSortChange = (event) => setSortOption(event.target.value);

  const handleCartClick = () => navigate("/cart");

  const filteredProducts = products
    .filter(
      (product) =>
        filterCategory === "All" || product.category === filterCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOption === "low" ? a.price - b.price : b.price - a.price
    );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const handleRemoveFromCart = (product) => {
    const currentQuantity = getProductQuantity(product.id);
    if (currentQuantity > 0) {
      removeFromCart(product, 1);
    }
  };

  const handleQuantityChange = (productId, change) => {
    const product = products.find((p) => p.id === productId);
    if (change === 1) {
      addToCart(product, 1);
    } else if (change === -1) {
      handleRemoveFromCart(product);
    }
  };

  return (
    <div className="Petopia">
      <video autoPlay loop muted className="background-video">
        <source
          src="https://videos.pexels.com/video-files/27545637/12164137_1920_1080_60fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="heading-bar">
        <h1>Petopia</h1>
        <button className="cart-icon" onClick={handleCartClick}>
          <ShoppingCart fontSize="large" />
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>
        <div className="filter-sort-container">
          <select onChange={handleFilterChange} className="filter-dropdown">
            <option value="All">All Categories</option>
            <option value="Birds">Birds</option>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Fishes">Fishes</option>
            <option value="Hamsters">Hamsters</option>
            <option value="Rabbits">Rabbits</option>
          </select>
          <select onChange={handleSortChange} className="sort-dropdown">
            <option value="low">Sort by Price (Low)</option>
            <option value="high">Sort by Price (High)</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {currentProducts.map((product) => {
          const quantity = getProductQuantity(product.id);
          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>
              {quantity > 0 ? (
                <div>
                  <button onClick={() => handleQuantityChange(product.id, -1)}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>
                    +
                  </button>
                </div>
              ) : (
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Petopia;
