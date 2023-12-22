import React from 'react';

const Card = ({ item, addToCart, cartItems }) => {
  return (
    <div className="card">
      {/* ... (your card content) */}
      <button className="btn btn-warning" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
