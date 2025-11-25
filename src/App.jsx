import React from 'react';
import {Routes,Route,Link} from "react-router-dom"
import './App.css'
import Structure from './components/Structure';
import Home from './components/Home';
import Product from './components/products';
import ProductDetail from './components/product_detail';
import Cart from './components/Cart';
import Wishlist from './components/wishlist';
import Login from './components/login';
import AdminLogin from './components/Admin_login';
import Purchase_page from './components/purchase';
import Admin_page from './components/Adminpage';

function App(){
  return (
    <>
      {/* creating a outlet */}
      <Routes>
        <Route path='/' element={<Structure />}>
          {/* creating child routes */}
          <Route index element={<Home />} />
          <Route path='/products' element={<Product/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productdetail' element={<ProductDetail />} />
          <Route path='/Purchase_page' element={<Purchase_page/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/admin_login' element={<AdminLogin />} />
          <Route path='/admin_page' element={<Admin_page  />} />
          

        </Route>
        
      </Routes>
      
      
      
    </>
  );
};

export default App;