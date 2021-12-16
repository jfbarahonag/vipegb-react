import React from "react";
import { Link } from "react-router-dom";

import './product-card.css'

function ProductCard({data}) {
  return (
    <div className="product-card">
      <Link to={`/product/${data.id}`}>
        <div className="product-card__box">
          <h2 className="product-card__title">{data.title.toUpperCase()}</h2>
          <div className="product-card__img">
            <img src={data.imageUrl} alt="product" className="img" />
            <button className="btn">Ver más</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { ProductCard };