// src/App.tsx

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductsList';
import ProductsDetails from './components/ProductsDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Navbar from './components/Navbar';
import './style.css';

const App: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);

  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const moveToWishlist = (product: any) => {
    removeFromCart(product.id);
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductsDetails addToCart={addToCart} addToWishlist={moveToWishlist}/>} />
        <Route path="/cart" element={<Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} moveToWishlist={moveToWishlist} />} />
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlist} removeFromWishlist={removeFromWishlist} moveToCart={addToCart} />} />
      </Routes>
    </div>
  );
};

export default App;
