// About.js
import React from 'react';
import '../style/about.css'; // Import your CSS file for styling
import pic from '../image/pic1.jpg'
function About() {
  return (
    <>
      <div className="section">
        <div className="left-image">
          <img src={pic} alt="Left" />
        </div>
        <div className="right-text">
          <h2>About US </h2>
          <p>
          At this Brand , we are driven by a relentless pursuit of excellence. Our story is one of dedication, artistry, and a deep appreciation for the beauty found in every gemstone. With a heritage rooted in generations of master craftsmen, we have curated a collection of jewelry that marries tradition with innovation. We believe that jewelry is more than just adornment; it's a reflection of your unique style and a celebration of life's most precious moments. Our journey began with a passion for creating jewelry that tells stories, and we are honored to be a part of your story. </p>
        </div>
      </div>

      <div className="section">
     
      <div className="left-text">
        <h2>Craftsmanship Beyond Compare</h2>
        <p>
        Our commitment to craftsmanship is at the heart of everything we do. Each piece of jewelry is a testament to our skilled artisans who meticulously handcraft every detail. We source only the finest gemstones, ensuring brilliance, purity, and ethical origins. </p>
      <p>It is a community of individuals who share a passion for elegance and beauty. Join us on our journey through social media, where we celebrate your stories, share insider insights, and connect with like-minded jewelry enthusiasts.</p>
        </div>
      <div className="right-image">
      <img src={pic} alt="Left" />
    </div>
    </div>

    </>
  );
}

export default About;
