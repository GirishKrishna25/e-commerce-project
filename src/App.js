
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import NavbarTop from './Components/NavbarTop'
import FavoriteProducts from './Pages/FavoriteProducts';
import CartProducts from './Pages/CartProducts';

function App() {
  return (

    <div className="container mx-auto" >
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Products />}></Route>
        <Route path='/favorites' exact element={<FavoriteProducts />}></Route>
        <Route path='/cart' exact element={<CartProducts />}></Route>
        <Route path='/:category_id/' element={<Products />}></Route>
        <Route path='/product/:product_id' element={<ProductDetail />}></Route>
        <Route path='/:category_id/product/:product_id' element={<ProductDetail />}></Route>
      </Routes>
    </div >
  );
}

export default App;
