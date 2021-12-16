import './App.css';
import { Home } from './views/home/index';
import { Categories } from './views/categories/index';
import { Contact } from './views/contact/index';
import { About } from './views/about/index';
import { Product } from './views/product';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function PageRoutes() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={ <Home /> }/>
      <Route path='/categories' element={ <Categories /> }/>
      <Route path='/contact' element={ <Contact />}/>
      <Route path='/about' element={ <About /> }/>
      <Route path='/product/:id' element={ <Product /> }/>
    </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
