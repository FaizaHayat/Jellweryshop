import React from 'react'
import '../style/home.css'
import sideimage from '../image/pic1.jpg'
import earring from '../image/pic2.jpg'
import ring from '../image/ring.jpg'
import jewllery from '../image/pic3.jpg'

function Home() {
  return (
    <>
      <div className="jewelry-card">
        <div className="text">
          <h1>Welcome to World of Jewelry </h1>
          <p>Our believe is that jewelry is not just about adornment; it's about celebrating life's special moments, expressing your unique style, and creating lasting memories. Our handcrafted jewelry pieces are designed to do just that—immerse you in a world of timeless elegance.</p>
          <button>New Arrival</button>
        </div>
        <div className="image">
          <img src={sideimage} alt="Jewelry" />
        </div>
      </div>


      <div className="landing-page">
        <h1>Explore Our Collections</h1>
        <p>"Embark on an enchanting journey through our exquisite jewelry collections, where each piece tells a story of elegance, artistry, and endless possibilities."</p>

        <div className="card-container">
          <div className="card">
         <img src={ring} alt='ring'/>
            <h2>Engagement Rings</h2>
            <p>Every love story is unique, and your engagement ring should be too. Discover a stunning collection of engagement rings that symbolize the beginning of your journey together.</p>
          </div>

          <div className="card">
          <img src={earring} alt='earrings'/>
            <h2>Fine Jewelry</h2>
            
            <p>From classic diamond necklaces to elegant bracelets, our fine jewelry collection is a testament to the artistry and craftsmanship that goes into every piece.</p>
          </div>

          <div className="card">
          <img src={jewllery} alt='sample'/>
            <h2>Custom Creations</h2>
            <p>Create a jewelry piece as unique as you are. Our customization options allow you to design a one-of-a-kind masterpiece that reflects your personality and style.</p>
          </div>
        </div>
      </div>
</>
      )
}

      export default Home
