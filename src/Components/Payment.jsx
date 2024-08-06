import React, { useState } from 'react';
import { Typography } from '@mui/material';
import './Payment.css'; // Import the CSS file

const Payment = () => {
  const upiLogo = 'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs';
  const googlePayLogo = 'https://images.hindustantimes.com/tech/img/2020/11/05/1600x900/image_-_2020-11-05T095740.083_1604550459365_1604550465218_1604550598928.jpg';

  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvvCode, setCvvCode] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [upiId, setUpiId] = useState('');
  const [googlePayId, setGooglePayId] = useState('');

  const handlePayment = () => {
    // Validate input values before processing payment
    if (!isValidEmail(email)) {
      alert('Invalid email address');
      return;
    }

    if (paymentMethod === 'creditCard') {
      if (!isValidCardNumber(cardNumber)) {
        alert('Invalid card number');
        return;
      }

      if (!isValidExpiryDate(expiryDate)) {
        alert('Invalid expiry date');
        return;
      }

      if (!isValidCvvCode(cvvCode)) {
        alert('Invalid CVV code');
        return;
      }
    } else if (paymentMethod === 'netBanking') {
      if (!isValidUserId(userId)) {
        alert('Invalid user ID');
        return;
      }

      if (!isValidPassword(password)) {
        alert('Invalid password');
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!isValidUpiId(upiId)) {
        alert('Invalid UPI ID');
        return;
      }
    } else if (paymentMethod === 'googlePay') {
      if (!isValidGooglePayId(googlePayId)) {
        alert('Invalid Google Pay ID');
        return;
      }
    }

    // Process payment logic here
    console.log('Processing payment with:', { email, paymentMethod, cardNumber, expiryDate, cvvCode, userId, password, upiId, googlePayId });
    alert('Payment Successful Tharika');
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
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
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*_).{8}$/;
    return passwordRegex.test(value);
  };

  const isValidUpiId = (value) => {
    const upiIdRegex = /^[0-9]{6}$/;
    return upiIdRegex.test(value);
  };

  const isValidGooglePayId = (value) => {
    const upiIdRegex = /^[0-9]{6}$/;
    return upiIdRegex.test(value);
  };

  return (
    <div className="componentStyle">
      <div className="formStyle">
        <Typography variant="h4" sx={{ textAlign: 'center', display: 'inline-block', display: 'flex' }}>
          <strong>PAYMENT GATEWAY</strong>
        </Typography>
        <br /><br />
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sample@gmail.com"
            required
            className="inputStyle"
          />
        </label>

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

        {paymentMethod === 'creditCard' && (
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

        {paymentMethod === 'netBanking' && (
          <>
            <label>
              <strong>User ID:</strong>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID"
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
                placeholder="Enter password"
                required
                className="inputStyle"
              />
            </label>
          </>
        )}

        {paymentMethod === 'upi' && (
          <>
            <label>
              <strong>UPI ID:</strong>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID"
                pattern="[0-9]{6}"
                required
                className="inputStyle"
              />
            </label>
            <img src={upiLogo} alt="UPI Logo" className="logoStyle" />
          </>
        )}
        {paymentMethod === 'googlePay' && (
            <>
              <label>
                <strong>Google Pay ID:</strong>
                <input
                  type="text"
                  value={googlePayId}
                  onChange={(e) => setGooglePayId(e.target.value)}
                  placeholder="Enter Google Pay ID"
                  pattern="[0-9]{6}"
                  required
                  className="inputStyle"
                />
              </label>
              <img src={googlePayLogo} alt="Google Pay Logo" className="logoStyle" />
            </>
          )}
  
          <button
            onClick={handlePayment}
            className="buttonStyle"
          >
            <strong>CONFIRM PAYMENT</strong>
          </button>
        </div>
      </div>
    );
};
export default Payment;
  