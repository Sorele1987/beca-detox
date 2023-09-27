import React from "react";
import Navbar from "./Navbar";
import Ketosisband from "./Ketosisband";
import Secondbuttonget from "./Secondbuttonget";
import Featuredband from "./Featuredband";
import Ingredientcards from "./Ingredientcards";
import Numbersband from "./Numbersband";
import Usersband from "./Usersband";
import Madeband from "./Madeband";

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

        <div className="celestiallandscape">
          <img src="/img/fondopaisaje2.png" alt="Fondo Paisaje" />
          <div className="titlecelestial">
            <p className="titleA">
              An Essential Element in{" "}
              <span class="boldtext">
                {" "}
                Rapid <br />
                Ketosis & Weight Management
              </span>{" "}
            </p>
            <div className="paragraph">
              <p>
                There sure is a lot of hype around the trendy ketogenic diet on
                the internet right now. The ketogenic diet is high in fat and
                low in carbohydrates. It boasts several benefits, including
                weight loss. Many people also experience improved heart health
                and enhanced brain function. The downside? The ketogenic diet
                isn't necessarily easy to follow. You might need an extra boost.
              </p>
              <p>
                This Bundle product is a highly-recommended addition to your
                diet as well as a potent solution to getting down to your
                desired weight and achieving the body you want - in the
                healthiest and most effective way possible. By taking Keto+ BHB
                Salts and Keto+ Drops, you too can have your own weight loss
                journey success story minus the painful and grueling process.
              </p>
            </div>
            <div>
              <Secondbuttonget />
            </div>
          </div>
        </div>

        <div>
          <Ingredientcards />
        </div>
      </div>

      <div className="guaranteed">
        <div className="img90">
          <img src="/img/logocircular90.png" alt="Guaranteed" />
        </div>
        <div className="description90">
          <h3>100% Satisfaction Guaranteed</h3>
          <p>
            Try Reagan Health products risk free for 90 days. If you're not
            <br />
            fully satisfied, we will give you a 100% hassle-free refund{" "}
          </p>
        </div>
      </div>
      <div>
        <Numbersband />
      </div>

      <div>
        <Usersband />
      </div>

      <div>
        <Madeband />
      </div>
    </div>
  );
};

export default Keto;
