import React, { useEffect } from "react";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductCard } from "../../components/ProductCard";

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
    <div style={{minHeight:'100%'}}>
      <Header />
      {
        products.map((product, idx) => (
          <ProductCard key={ idx } data={ product } />
        ))
      }
      <Footer />
    </div>
  );
}

export { Home };