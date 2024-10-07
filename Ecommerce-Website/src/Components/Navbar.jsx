import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navigation">
          <Link className="link" to="/landingPage">
            Home
          </Link>
          <Link to="/products" className="link">
            {" "}
            Products
          </Link>
          <Link to="/featured" className="link">
            Featured products
          </Link>
          <Link className="link">Contact Us</Link>
        </div>
        <div className="Account">
          <Link className="link signup">Sign Up</Link>
          <Link className="link login">Login</Link>
          <Link className="icon">
            <IoCartOutline />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
