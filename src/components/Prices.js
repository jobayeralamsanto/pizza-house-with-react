import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza1.png" alt="pizza" />
              </div>
              <h1 className="price__heading">THE BIG PEPPERONI</h1>
              <p className="price__text">
              Huge pie cut into 8 extra-large slices. Authentic, soft & foldable New York-style dough,
              topped with Marinara pizza sauce & lots of crispy American pepperoni with hints of fennel & 
              chilli
              </p>
              <p className="price_rs">$50.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza2.png" alt="pizza" />
              </div>
              <h1 className="price__heading">THE BIG HAM & PINEAPPLE</h1>
              <p className="price__text">
              Huge pie cut into 8 extra-large slices. Authentic,
              soft & foldable New York-style dough, topped with Marinara
              pizza sauce, smoky leg ham & sweet pineapple pieces
              </p>
              <p className="price_rs">$25.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza3.png" alt="pizza" />
              </div>
              <h1 className="price__heading">THE BIG THREE MEATS</h1>
              <p className="price__text">
              Huge pie cut into 8 extra-large slices. Authentic, soft & foldable
              New York-style dough, topped with Marinara pizza sauce, crispy
              American pepperoni, ground beef & Italian sausage
              </p>
              <p className="price_rs">$150.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza4.png" alt="pizza" />
              </div>
              <h1 className="price__heading">GARLIC CHICKEN & BACON RANCH</h1>
              <p className="price__text">
              Succulent chicken, crispy rasher bacon, spinach and red onion,
              topped with a creamy ranch sauce and served on a pizza sauce base with zesty garlic sauce.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza5.png" alt="pizza" />
              </div>
              <h1 className="price__heading">CHICKEN, BACON & AVOCADO</h1>
              <p className="price__text">
              Succulent seasoned chicken, creamy avocado, crispy rasher bacon & red onion,
              topped with hollandaise sauce & spring onions
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/pizza6.png" alt="pizza" />
              </div>
              <h1 className="price__heading">LOADED SUPREME</h1>
              <p className="price__text">
              Ground beef, crispy rasher bacon, mushroom, pepperoni, Italian sausage, fresh baby spinach, 
              smoked leg ham, pineapple, topped with oregano, tomato capsicum sauce & spring onion.
              </p>
              <p className="price_rs">$22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
