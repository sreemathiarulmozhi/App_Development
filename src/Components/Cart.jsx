import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { ArrowBackIos } from '@mui/icons-material';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  // Convert cart object to array
  const cartItems = Object.values(cart);

  // Calculate total cost
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleBackClick = () => {
    navigate('/petopia'); // Navigate to Petopia page
  };

  const handleRemoveClick = (item) => {
    removeFromCart(item); // Remove item from cart
  };

  const handlePaymentClick = () => {
    navigate('/payment'); // Navigate to Payment page
  };

  return (
    <div className="Cart">
      <div className="navigation-arrows">
        <button className="arrow-button back-arrow" onClick={handleBackClick}>
          <ArrowBackIos fontSize="large" />
        </button>
      </div>
      <h1 className="cart-header">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price} INR</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button className="remove-button" onClick={() => handleRemoveClick(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <p className="total-cost">Total Cost: {totalCost} INR</p>
        <button className="payment-button" onClick={handlePaymentClick}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;
