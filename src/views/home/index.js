import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductCard } from "../../components/ProductCard";

function Home() {

  const products = [
    {
      title: "product 1"
    },
    {
      title: "product 2"
    },
    {
      title: "product 3"
    },
    {
      title: "product 4"
    },
  ]

  return ( 
    <div style={{minHeight:'100%'}}>
      <Header />
      <h2>Hello from home</h2>
      {
        products.map((product, idx) => (
          <ProductCard key={ idx } title={ product.title } />
        ))
      }
      <Footer />
    </div>
  );
}

export { Home };