import React from 'react'
import '../style/contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>Have any questions or concerns? Reach out to us below.</p>

        <div className="contact-info">
          <p>Send us a message:</p>
          <p>Email: info@yourjewelry.com</p>
          <p>Follow us on social media:</p>
          <p>Facebook: /yourjewelry</p>
          <p>Instagram: @yourjewelry</p>
        </div>
      </div>

      <div className="contact-form">
        <form action="#" method="post">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
