// In Routers.js
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Layout from "../Components/Layout"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import FeaturedCards from "../Components/FeaturedCards"
import SignUp from "../pages/SignUp"
import { useState } from "react"
import Contact from "../pages/Contact"
const Routers = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout cartCount={cartItems.length} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products cart={cartItems} setCart={setCartItems} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail cart={cartItems} setCart={setCartItems} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/featured" element={<FeaturedCards />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default Routers
