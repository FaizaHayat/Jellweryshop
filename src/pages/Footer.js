import React from 'react'
import '../style/Footer.css'



function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>Discover the finest jewelry crafted with precision and passion.</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: samplemail@gmail.com</p>
        <p>Phone: 1234-333333</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2023 Your Jewelry. All rights reserved.</p>
    </div>
  </footer>
);
};


export default Footer
