import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
   
 <div className="bg">    
<div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bg.jpg'})`,
  
}}>


      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Deliverey</h3>
            <h1>PIZZA HOUSE</h1>
            <p>
            Yummy pizza delivered fast & fresh
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DEVLERY NOW
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    
  );
};

export default Header;
