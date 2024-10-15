import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav>
      <div className="navigation">
        <Link className="link" to="/">
          Home
        </Link>
        <Link to="/products" className="link">
          Products
        </Link>
        <Link to="/featured" className="link">
          Featured products
        </Link>
        <Link className="link" to="/contact">
          Contact Us
        </Link>
      </div>
      <div className="Account">
        <Link className="link signup" to="/signUp">
          Sign Up
        </Link>
        <Link className="link login" to="/login">
          Login
        </Link>
        <Link to="/cart" className="link">
          <IoCartOutline />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
