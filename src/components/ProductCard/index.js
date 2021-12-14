import React from "react";

import './product-card.css'

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__box">
        <h2>Product card</h2>
        <div className="product-card__img">
          <img
            src="/logo512.png" alt="logo"
            className="img"
          />
          <button
            className="btn"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };