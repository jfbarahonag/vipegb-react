import React from "react";

import './product-card.css'

function ProductCard() {
  return (
    <div className="product-card">
      <div
        className="product-card__box"
        >
        <h1>Product card</h1>
        <img
          className="product-card__img"
          src="/logo512.png"
          alt="logo"
        />
        <button
          className="product-card__btn"
        >
          Ver más
        </button>
      </div>
    </div>
  )
}

export { ProductCard };