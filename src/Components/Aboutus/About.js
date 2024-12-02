import React from "react";
import "./About.css";

const About = () =>
{
    return (
      <div>
        <div className="About-group">
          <div className="about">
            <div className="about-subgroup">
              <h1 className="h1">1200+</h1>
              <p>Members</p>
            </div>
          </div>
          <div className="about">
            <div className="about-subgroup">
              <h1 className="h1">120+</h1>
              <p>Expert Trainers</p>
            </div>
          </div>
          <div className="about">
            <div className="about-subgroup">
              <h1 className="h1">13+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="about">
            <div className="about-subgroup">
              <h1 className="h1">368+</h1>
              <p>Gyms</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="main-section">
          <main>
            <div></div>
            <section id="About">
              <h3 className="Aboutus">
                <i class="fa-solid fa-dumbbell"></i> About us
              </h3>
              <h1 className="header">
                Effortless Strength, Timely Gains:
                <br />
                Building Better Bodies, Faster
              </h1>
              <p>
                At Our Gym we Prioritize a holistic approach to health,offering
                a range of cutting-
                <br />
                edge equipment, personalized training program and diverse
                fitness classes.
              </p>
              <p>
                Our Knowledgeable and friendly staff are committed to creating
                an inclusive and
                <br />
                motivating environment, ensuring that everyone feels welcome and
                empowered.
                <br />
                Discover a place where fitness aspirations become reality. From
                Strength
                <br />
                training to cardio workouts.we provide the tools and expertise
                you need to sculpt
                <br />
                your body ,boost your energy and enhance your overall
                well-being. Join our
                <br />
                vibrant community and experience the transformation that awits
                you at G-tech
                <br />
                GYMs, Your fitness journey begins here.
              </p>
              <br />
              <button>BECOME A MEMBER</button>
            </section>
          </main>
        </div>
      </div>
    );
}
 
export default About;