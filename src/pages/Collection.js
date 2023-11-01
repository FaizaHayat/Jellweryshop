import React from 'react';
import '../style/collection.css'; // Import your CSS for styling

const Collection = () => {
  // Define an array of jewelry products with categories
  const jewelryProducts = [
    {
      id: 1,
      category: 'Earrings',
      name: 'Elegant Earrings',
      price: 50.00,
      description: 'Beautiful earrings for all occasions',
    },
    {
      id: 2,
      category: 'Necklaces',
      name: 'Statement Necklace',
      price: 75.00,
      description: 'A stunning necklace to enhance your style',
    },
    {
      id: 3,
      category: 'Rings',
      name: 'Diamond Ring',
      price: 100.00,
      description: 'A sparkling diamond ring for special moments',
    },
    // Add more products and categories as needed
  ];

  // Create an object to group products by category
  const productsByCategory = {};

  jewelryProducts.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });

  // Render each category and its products
  const categoryElements = Object.keys(productsByCategory).map((category) => (
    <div key={category} className="category">
      <h2>{category}</h2>
      <div className="product-list">
        {productsByCategory[category].map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {/* Add product image here */}
            </div>
            <div className="product-info">
              <p className="product-title">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
            <div className="product-button">
    <button className="add-to-cart-button">Add to Cart</button>
  </div>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="collection">
      {categoryElements}
    </div>
  );
};

export default Collection;
