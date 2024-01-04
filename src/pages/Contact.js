// Contact.js
import React from 'react';
import '../style/contact.css';

function Contact() {


  return (
    <div className="contact-container">
      <div className='container'>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or inquiries, feel free to contact us using the form below or through the provided contact information.
        </p>

        <form className="contact-form">

          <input type="text" id="name" name="name" placeholder='Name' />
          <div className='mid'>
            <input type="subject" id="subject" name="subject" placeholder='Subject' required />
            <input type="email" id="email" name="email" placeholder='Email' required />
          </div>

          <textarea id="message" name="message" rows="4" placeholder='Message' required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
<div className='container'>
      <h2>Contact information</h2>
      <p >Connect with us for any inquiries or collaborations! We welcome your messages and feedback. Reach out to us through email or social media, and we'll be happy to respond. Let's explore opportunities together!</p>
      </div>
      <div className="contact-info">

        <div>

          <p> info@yourjewelrywebsite.com</p></div>
        <div>  <p> +1 (555) 123-4567</p></div>
        <div> <p>123 Main Street, Cityville, State, Country</p></div>
      </div>
    </div>
  );
}

export default Contact;
