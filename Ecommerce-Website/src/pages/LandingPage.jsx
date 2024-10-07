import { Link } from "react-router-dom";
import image1 from "../assets/images-removebg-preview.png";
import "./LandingPage.css";
import FeaturedCards from "../Components/FeaturedCards.jsx"; // Import the FeaturedCards component

import { WiDirectionUpRight } from "react-icons/wi";

function LandingPage() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="Text">
            <p>Just dropped</p>
            <h2>Feel</h2>
            <h2>Authentic</h2>
            <h2>Quality</h2>
            <Link className="link">
              Shop Now{" "}
              <span className="iconi">
                <WiDirectionUpRight />
              </span>
            </Link>
          </div>
          <div className="picture">
            <img src={image1} alt="display-image" className="display" />
          </div>
        </section>

        <section className="description">
          <h1>What we do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            voluptate, debitis placeat nostrum delectus maxime et quaerat
            aliquid odio reiciendis sit! Vel dolores, consequuntur, iste
            quisquam vero esse illum corrupti sint consectetur molestiae facere
            facilis unde modi? Officiis ipsa doloremque magni, aperiam modi ut
            nam nisi accusamus ullam itaque iste aspernatur? Quidem nihil, illum
            libero tempore quisquam eaque consectetur quae.
          </p>
          <Link className="link2">
            Learn More
            <span className="iconi">
              <WiDirectionUpRight />
            </span>
          </Link>
        </section>

        <section className="section3">
          <h1>Featured Collections</h1>

          <div id="displaycards">
            <FeaturedCards />{" "}
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
