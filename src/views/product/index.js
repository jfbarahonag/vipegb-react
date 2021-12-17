import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { BreadCrumb } from "../../components/breadcrumb";
import { Carousel } from "../../components/Carousel";

function Product() {
  let { id } = useParams()
  console.log(id)
  useEffect(() => {

  }, [])
  return ( 
    <div>
      <Header />
      <BreadCrumb />
      <Carousel />
      <h1>Hello from Product {id}</h1>
      <Footer />
    </div>
  );
}

export { Product };