import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Payment.css";
import { useCart } from "../CartContext";

const Payment = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [upiId, setUpiId] = useState("");
  const [googlePayId, setGooglePayId] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const cartItems = Object.values(cart);

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    
    if (paymentMethod === "creditCard") {
      if (!isValidCardNumber(cardNumber)) {
        alert("Invalid card number");
        return;
      }

      if (!isValidExpiryDate(expiryDate)) {
        alert("Invalid expiry date");
        return;
      }

      if (!isValidCvvCode(cvvCode)) {
        alert("Invalid CVV code");
        return;
      }
    } else if (paymentMethod === "netBanking") {
      if (!isValidUserId(userId)) {
        alert("Invalid user ID");
        return;
      }

      if (!isValidPassword(password)) {
        alert("Invalid password");
        return;
      }
    } else if (paymentMethod === "upi") {
      if (!isValidUpiId(upiId)) {
        alert("Invalid UPI ID");
        return;
      }
    } else if (paymentMethod === "googlePay") {
      if (!isValidGooglePayId(googlePayId)) {
        alert("Invalid Google Pay ID");
        return;
      }
    }

    setShowSuccess(true);
  };

  
  const isValidCardNumber = (value) => {
    const cardNumberRegex = /^[0-9]{16}$/;
    return cardNumberRegex.test(value);
  };

  const isValidExpiryDate = (value) => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    return expiryDateRegex.test(value);
  };

  const isValidCvvCode = (value) => {
    const cvvCodeRegex = /^[0-9]{3}$/;
    return cvvCodeRegex.test(value);
  };

  const isValidUserId = (value) => {
    const userIdRegex = /^[a-zA-Z0-9]+$/;
    return userIdRegex.test(value);
  };

  const isValidPassword = (value) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[_@])[A-Za-z\d@_]{8,}$/;
    return passwordRegex.test(value);
  };

  const isValidUpiId = (value) => {
    const upiIdRegex = /^[\w\.-]+@[\w\.-]+$/;
    return upiIdRegex.test(value);
  };

  const isValidGooglePayId = (value) => {
    const googlePayIdRegex = /^[\w\.-]+@[\w\.-]+$/;
    return googlePayIdRegex.test(value);
  };

  return (
    <div className="payment-page">
      <video className="backgroundVideo" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2023/12/06/192283-892475138_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="form-container">
        <div className="formStyle">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}
          >
            <strong>Payment Portal</strong>
          </Typography>
          <br />
          <br />
          <label>
            <strong>Payment Method:</strong>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="inputStyle"
            >
              <option value="creditCard">Credit Card</option>
              <option value="netBanking">Net Banking</option>
              <option value="upi">PAYTM</option>
              <option value="googlePay">Google Pay</option>
            </select>
          </label>

          {paymentMethod === "creditCard" && (
            <>
              <label>
                <strong>Card Number:</strong>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Should be 16 Digits"
                  maxLength="16"
                  required
                  className="inputStyle"
                />
              </label>

              <label>
                <strong>Expiry Date:</strong>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YYYY"
                  pattern="(0[1-9]|1[0-2])\/[0-9]{4}"
                  required
                  className="inputStyle"
                />
              </label>

              <label>
                <strong>CVV Code:</strong>
                <input
                  type="text"
                  value={cvvCode}
                  onChange={(e) => setCvvCode(e.target.value)}
                  placeholder="Enter CVV code"
                  pattern="[0-9]{3}"
                  required
                  className="inputStyle"
                />
              </label>
            </>
          )}

          {paymentMethod === "netBanking" && (
            <>
              <label>
                <strong>User ID:</strong>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter User ID"
                  required
                  className="inputStyle"
                />
              </label>

              <label>
                <strong>Password:</strong>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  className="inputStyle"
                />
              </label>
            </>
          )}

          {paymentMethod === "upi" && (
            <label>
              <strong>UPI ID:</strong>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID"
                required
                className="inputStyle"
              />
            </label>
          )}

          {paymentMethod === "googlePay" && (
            <label>
              <strong>Google Pay ID:</strong>
              <input
                type="text"
                value={googlePayId}
                onChange={(e) => setGooglePayId(e.target.value)}
                placeholder="Enter Google Pay ID"
                required
                className="inputStyle"
              />
            </label>
          )}

          <button className="buttonStyle" onClick={handlePayment}>
            Submit Payment
          </button>
        </div>

        {showSuccess && (
          <div className="success-popup">
            <div className="popup-content">
              <Typography variant="h6">Payment Successful</Typography>
              <p>Your payment has been processed successfully.</p>
              <div className="order-summary">
                <Typography variant="h6">Order Summary</Typography>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="order-item">
                      <img src={item.image} alt={item.name} className="order-item-image" />
                      <div className="order-item-details">
                        <h3>{item.name}</h3>
                        <p>Price: {item.price} INR</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: {item.price * item.quantity} INR</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p><strong>Total Cost: {totalCost} INR</strong></p>
              </div>
              <button className="close-button" onClick={() => setShowSuccess(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
