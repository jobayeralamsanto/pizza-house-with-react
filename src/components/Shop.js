import React from "react";

const Shop = () => {
  return (
    <div className="shop">    
<div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background.png'})`,
  
}}>
    
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
