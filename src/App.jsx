import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import Wishlist from './components/Wishlist';
import CartModal from './components/CartModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedColor === item.selectedColor &&
        cartItem.selectedSize === item.selectedSize
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem === existingItem
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, item]);
    }
    setIsCartModalOpen(true);
  };

  const handleAddToWishlist = (product) => {
    const existingItem = wishlistItems.find(item => item.id === product.id);
    if (existingItem) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header
            cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            wishlistCount={wishlistItems.length}
          />
          <CartModal
            isOpen={isCartModalOpen}
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={() => setIsCartModalOpen(false)}
          />
          <Routes>
            <Route path="/" element={<Home onAddToWishlist={handleAddToWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/shop" element={<Shop onAddToWishlist={handleAddToWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} onRemoveFromWishlist={handleRemoveFromWishlist} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
