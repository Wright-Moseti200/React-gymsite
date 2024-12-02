import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import About from "./Components/Aboutus/About";
import Bmi from "./Components/BMI info/bmi";
import Services from "./Components/Services/services";
import Trainer from "./Components/Trainers/trainer";
import Exercise from "./Components/Exercise/exercise";
import Pricing from "./Components/Pricing/pricing";
import Ask from "./Components/Ask/Ask";
import Footer from "./Components/Footer/footer";

const App = () =>
{
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Bmi />
      <Services />
      <Trainer />
      <Exercise />
      <Pricing />
      <Ask />
      <Footer/>
    </div>
  );
}

let body = document.querySelector('body');
let root = createRoot(body);
root.render(<App />);