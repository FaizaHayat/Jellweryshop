import React, { useState } from 'react';
import '../style/collection.css'; // Import your CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import ring1 from "../image/ring-1.jpg"

import ring2 from "../image/ring-2.jpg";
import neck1 from "../image/neck-1.jpg";
import neck2 from "../image/neck-2.jpg";
import ear1 from "../image/ear-1.jpg";
import ear2 from "../image/ear-2.jpg";
import set1 from "../image/set-1.jpg";



const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample jewelry items data
  const jewelryItems = [
    { id: 1, category: 'Necklaces', name: 'Diamond Necklace 1', price: 999.99, image: neck2 },
    { id: 2, category: 'Necklaces', name: 'Diamond Necklace 2', price: 899.99, image: neck1 },
    { id: 3, category: 'Earrings', name: 'Gold Earrings 1', price: 499.99, image: ear1 },
    { id: 4, category: 'Earrings', name: 'Gold Earrings 2', price: 599.99, image: ear2 },
    { id: 5, category: 'Rings', name: 'Diamond Ring 1', price: 799.99, image: ring1 },
    { id: 6, category: 'Rings', name: 'Diamond Ring 2', price: 699.99, image: ring2 },
    { id: 7, category: 'Sets', name: 'Bridal Set 1', price: 1499.99, image: set1 },

    { id: 8, category: 'Necklaces', name: 'Diamond Necklace 3', price: 1099.99, image: neck1 },
    { id: 9, category: 'Earrings', name: 'Gold Earrings 3', price: 699.99, image: ear1 },
    { id: 10, category: 'Rings', name: 'Diamond Ring 3', price: 899.99, image: ring1 },
    { id: 11, category: 'Sets', name: 'Bridal Set 2', price: 1599.99, image: set1 },
    { id: 12, category: 'Necklaces', name: 'Diamond Necklace 4', price: 1199.99, image: neck2 },
    { id: 13, category: 'Earrings', name: 'Gold Earrings 4', price: 799.99, image: ear2 },
    { id: 14, category: 'Rings', name: 'Diamond Ring 4', price: 999.99, image: ring2 },
    { id: 15, category: 'Sets', name: 'Bridal Set 3', price: 1699.99, image: set1 },

    // Add more items as needed
  ];

  // Filter items based on selected category
  const filteredItems = selectedCategory
    ? jewelryItems.filter(item => item.category === selectedCategory)
    : jewelryItems;


    
  const addToCart = (item) => {
    // Implement your add to cart logic here
    console.log(`Item added to cart: ${item.name}`);
  }


    return (
      <div className="main container">
        <div className="col">
          <div className="option ">
            <h3>Categories</h3>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedCategory || 'default'}
              onChange={(e) => setSelectedCategory(e.target.value === 'default' ? null : e.target.value)}
            >
              <option value="default">All Categories</option>
              {[...new Set(jewelryItems.map(item => item.category))].map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Product Cards */}
          <div className="box">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {filteredItems.map(item => (
                <div key={item.id} className="col mb-4" >
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">${item.price.toFixed(2)}</p>
                      <button className="btn btn-warning" onClick={() => addToCart(item)}>
                        <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    );
  };
export default Collection;
