import React from "react";
import "./footer.css";

const Footer = () =>
{
    return (
      <div>
        <br />
        <br />
        <div className="footer" id="contact">
          <div className="footer-item1">
            <h2 className="logo">GYMs</h2>
            <p>
              Lorem ipsum, dolor sit amet consecteur
              <br />
              adipisicing elit. Impedit quae quasi vel, quasi
              <br />
              delectus voluptate? Maiores aliquid, at sint
              <br />
              itaque neque et velit quas in!
            </p>
            <p>
              <i
                style={{ color: "white" }}
                class="fa-solid fa-location-dot"
              ></i>{" "}
              Mombasa, Kenya
            </p>
            <p>
              <i
                style={{ color: "white" }}
                class="fa-regular fa-envelope-open"
              ></i>{" "}
              Wrightgichana@gmail.com
            </p>
            <p>
              <i style={{ color: "white" }} class="fa-solid fa-phone"></i>{" "}
              0714471627
            </p>
            <br />
            <p className="copyrights">2024 Wrightech All rights reserved</p>
          </div>
          <div className="footer-item2">
            <div className="footer-subgroup1">
              <h3>Services</h3>
              <p>Strength Training</p>
              <p>Yoga Session</p>
              <p>Deadlift Challenge</p>
              <p>Squats Challenge</p>
            </div>
            <div className="footer-subgroup2">
              <h3>Quick Link</h3>
              <p>Home</p>
              <p>About</p>
              <p>Pricing Plan</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Footer;