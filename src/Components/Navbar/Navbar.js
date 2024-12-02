import React from "react";
import "./Navbar.css";
const Navbar = () =>
{
    return (
      <nav id="Home">
    <div className="div">
        <div>
            <h1>GYMs</h1>
          </div>
          <div className="div1">
              <p><a href="#Home">Home</a> </p>
              <p><a href="#About">About</a></p>
              <p><a href="#services">Services</a></p>
              <p><a href="#plan">Plan</a></p>
              <p><a href="#contact">Contact</a></p>
              <button>Become A Member</button>
          </div>
            </div>
            </nav>
  );
}

export default Navbar;