import React, { useEffect } from "react";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductCard } from "../../components/ProductCard";

import './home.css'

function Home() {

  useEffect(() => console.log(1), [])

  const products = [
    {
      title: "product 1",
      imageUrl: "./logo512.png",
      id : 1,
    },
    {
      title: "product 2",
      imageUrl: "./logo512.png",
      id : 2,
    },
    {
      title: "product 3",
      imageUrl: "./logo512.png",
      id : 3,
    },
    {
      title: "product 4",
      imageUrl: "./logo512.png",
      id : 4,
    },
  ]

  return ( 
    <div className="home">
      <Header />
      {/* TODO: Carousel */}
      <div className="home-content">
      {
        products.map((product, idx) => (
          <ProductCard key={ idx } data={ product } />
        ))
      }
      </div>
      <Footer />
    </div>
  );
}

export { Home };