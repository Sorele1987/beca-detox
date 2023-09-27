import React from "react";
import NavBar from "./NavBar";
import KetosisBand from "./KetosisBand";
import SecondButtonGet from "./SecondButtonGet";
import FeaturedBand from "./FeaturedBand";
import IngredientCards from "./IngredientCards";
import NumbersBand from "./NumbersBand";
import UsersBand from "./UsersBand";
import MadeBand from "./MadeBand";
import ReadyBand from "./ReadyBand";

const Keto = () => {
  return (
    <div className="mainContainer">
      <div className="blueBarContainer">
        <h4>90 DAYS MONEY BACK GUARANTEE</h4>
      </div>

      <div>
        <NavBar />
      </div>

      <div>
        <KetosisBand />
      </div>

      <div>
        <FeaturedBand />
      </div>

      <div className="dropsKeto">
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
          <SecondButtonGet />
        </div>

        <div className="celestialLandscape">
          <img src="/img/fondopaisaje2.png" alt="Fondo Paisaje" />
          <div className="titleCelestial">
            <p className="titleA">
              An Essential Element in{" "}
              <span class="boldText">
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
              <SecondButtonGet />
            </div>
          </div>
        </div>

        <div>
          <IngredientCards />
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
        <NumbersBand />
      </div>

      <div>
        <UsersBand />
      </div>

      <div>
        <MadeBand />
      </div>

      <div className="titleQ">
        <p>Questions? We've Got You Covered!</p>
      </div>
      <div className="question">
        <div className="questionBox">
          <p className="ask">Does it work?</p>
          <img src="/img/flechaabajo.png" alt="Arrow" className="arrow" />
        </div>
        <div className="questionBox">
          <p className="ask"> Is it harmful?</p>
          <img src="/img/flechaabajo.png" alt="Arrow" className="arrow" />
        </div>
        <div className="questionBox">
          <p className="ask">How long does the shipping take?</p>
          <img src="/img/flechaabajo.png" alt="Arrow" className="arrow" />
        </div>
        <div className="questionBox">
          <p className="ask">Is there a shipping cost?</p>
          <img src="/img/flechaabajo.png" alt="Arrow" className="arrow" />
        </div>
        <div className="questionBox">
          <p className="ask">How soon can I expect results?</p>
          <img src="/img/flechaabajo.png" alt="Arrow" className="arrow" />
        </div>
      </div>

      <div>
        <ReadyBand />
      </div>
      <footer>
        <p className="copyRight"> © Copyright 2020. Regen Health</p>
        <p className="imgRegen">
          <img src="/img/logoregenhealth.png" alt="logoregen" />
        </p>
        <p className="terms"> Terms & Conditions - Privacy Policy</p>
      </footer>
    </div>
  );
};

export default Keto;
