import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Navbar from "../Components/Navbar";
import FeaturedCards from "../Components/FeaturedCards.jsx"; // Import FeaturedCards component
import Layout from "../pages/Layout.jsx";
import Product from "../pages/Products.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/featured" element={<FeaturedCards />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
