import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProductCard } from "../../components/ProductCard";

function Home() {
  return ( 
    <div style={{minHeight:'100%'}}>
      <Header />
      <h2>Hello from home</h2>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  );
}

export { Home };