import React from "react";

const Keto = () => {
  return (
    <div className="navbar">
      <h1>
        <img src="/img/stars.png" alt="Rate" />
      </h1>
      <p className="review">AVERAGE REVIEW RATING OF 4.7 OUT OF 5</p>
      <div className="logoregen">
        <img src="/img/logoregenhealth.png" alt="logo" />
      </div>
      <nav>
        <ul className="list">
          <li>BENEFITS</li>
          <li>REVIEWS</li>
          <li>GUARANTEE</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <div className="shop">
        <img src="/img/shop.png" alt="shop" />
      </div>
    </div>
  );
};

export default Keto;
