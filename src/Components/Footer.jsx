import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer footer-1">
          <h1>travel</h1>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="footer">
          <h3>Company</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Model</p>
        </div>
        <div className="footer">
          {" "}
          <h3>Contact</h3>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affillates</p>
        </div>
        <div className="footer">
          {" "}
          <h3>More</h3>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low Fare Tips</p>
        </div>
      </footer>
      <div className="copywright">
        <p>All rights reserved@travel.co.ke</p>
      </div>
    </>
  );
}

export default Footer;
