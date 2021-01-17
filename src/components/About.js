import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO PIZZA HOUSE</h1>
            <p>
            We’re driven by a passion to connect people with faster, fresher quality food. In doing this,
             we’ve become a leader in the food-technology space, achieving industry firsts in drone delivery, 
             app ordering, voice assistants, artificial intelligence and augmented reality. We’re committed to
              constantly enhancing our customer's lives and continually improving and innovating our product,
               our people and our technology to make sure our customers receive a world class experience. 
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
