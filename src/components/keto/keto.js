import React from "react";
import Navbar from "./Navbar";
import Ketosisband from "./Ketosisband";
import Secondbuttonget from "./Secondbuttonget";
import Featuredband from "./Featuredband";

const Keto = () => {
  return (
    <div className="maincontainer">
      <div className="blue_bar_container">
        <h4>90 DAYS MONEY BACK GUARANTEE</h4>
      </div>

      <div>
        <Navbar />
      </div>

      <div>
        <Ketosisband />
      </div>

      <div>
        <Featuredband />
      </div>

      <div className="dropsketo">
        <h2>
          Our Keto+ Drops and Keto+ BHB
          <br />
          Bundle Helps You To...
        </h2>
        <div className="icon">
          <img src="/img/suppress.png" alt="Suppress Appetite" />
          <img src="/img/boost.png" alt="Boost Metabolism" />
          <img src="/img/encourage.png" alt="Encourage Ketosis" />
        </div>
        <div className="iconp">
          <p className="suppres">Suppres Appetite</p>
          <p className="boost">Boost Metabolism</p>
          <p className="encou">Encourage Ketosis</p>
        </div>
        <div>
          <Secondbuttonget />
        </div>
      </div>
    </div>
  );
};

export default Keto;
