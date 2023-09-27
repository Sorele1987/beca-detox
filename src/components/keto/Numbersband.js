import React from "react";
import Secondbuttonget from "./Secondbuttonget";

const Keto = () => {
  return (
    <div className="numbersband">
      <h2>How Do Keto+ Drops and Keto+ BHB Work</h2>
      <div className="numbers">
        <div className="number">
          <span class="number1">1</span>
          <p className="support">Support</p>
          <p className="supportdesc">
            Supports Keto diets by helping induce rapid ketosis and ensuring
            that your body stays in ketosis, effectively utilizing fat to create
            energy fuel
          </p>
        </div>
        <div className="number">
          <span class="number2">2</span>
          <p className="boostnumb">Boost</p>
          <p className="boostdesc">
            Boosts metabolism, effectively burning carb and utilizing fat
            buildup in unwanted areas, creating energy and building stamina.
          </p>
        </div>
        <div className="number">
          <span class="number3">3</span>
          <p className="manage">Manage</p>
          <p className="managedesc">
            Manages the negative side effects of a ketogenic diet, such as the
            keto flu, which include symptoms like constipation, headaches, bad
            breath, muscle cramps, and diarrhea.
          </p>
        </div>
        <div className="number">
          <span class="number4">4</span>
          <p className="improve">Improve</p>
          <p className="improvedesc">
            Improves focus and cognitive function, and enhances athletic
            performance by giving you that much-needed energy boost on the
            daily.
          </p>
        </div>
      </div>
      <div>
        <Secondbuttonget />
      </div>
    </div>
  );
};

export default Keto;
