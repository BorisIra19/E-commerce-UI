import React, { useState, useEffect } from 'react';
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
import AdminLayout from './components/AdminLayout';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import AdminProducts from './components/AdminProducts';
import Customers from './components/Customers';
import Campaigns from './components/Campaigns';
import Categories from './components/Categories';
import Messages from './components/Messages';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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
        <div className={`App ${isDarkMode ? 'dark' : ''}`}>
          {/* E-commerce Pages (with Header/Footer) */}
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                  <Home onAddToWishlist={handleAddToWishlist} wishlistItems={wishlistItems} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/shop"
              element={
                <>
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
                  <Shop onAddToWishlist={handleAddToWishlist} wishlistItems={wishlistItems} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Cart cartItems={cartItems} setCartItems={setCartItems} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/wishlist"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Wishlist wishlistItems={wishlistItems} onRemoveFromWishlist={handleRemoveFromWishlist} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Login />
                  <Footer />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Signup />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Blog />
                  <Footer />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
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
                  <ProductDetail onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} wishlistItems={wishlistItems} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Checkout cartItems={cartItems} setCartItems={setCartItems} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header
                    cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    wishlistCount={wishlistItems.length}
                  />
                  <Profile />
                  <Footer />
                </>
              }
            />

            {/* Admin Dashboard Routes (with AdminLayout) */}
            <Route
              path="/dashboard"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <Dashboard isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <Orders isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/products"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <AdminProducts isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <Categories isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/customers"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <Customers isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/campaigns"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <Campaigns isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/messages"
              element={
                <AdminLayout isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}>
                  <Messages isDarkMode={isDarkMode} />
                </AdminLayout>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
