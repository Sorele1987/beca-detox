import React from "react";
import Addbutton from "./Addbutton";
import Finalcard from "./Finalcard";

const Keto = () => {
  return (
    <div className="readyband">
      <div className="rated">
        <p>
          <img src="/img/starsfinal.png" alt="Stars" /> RATED 4.9/5.0 BY 470
          REVIEWERS
        </p>
      </div>
      <div className="titleRe">
        <h2>Ready To Start Living Healthy?</h2>
        <p className="pick">Pick Your Bundle Below</p>
      </div>

      <div className="allcards">
        {/* Primera tarjeta */}
        <div className="card2frasco">
          <p className="subti1">1 Month Supply</p>
          <img src="/img/2frascos.png" alt="2frascos" className="img2" />
          <p className="frascodesc2">$69.99</p>
          <div>
            <Addbutton />
          </div>
          <div>
            <Finalcard />
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="card4frasco">
          <p className="subti2">2 Month Supply</p>
          <img src="/img/4frascos.png" alt="4frascos" className="img4" />
          <p className="frascodesc4">
            <span className="subrayado1">$139.98</span> $125.98
          </p>
          <p className="red1">10% DISCOUNT</p>
          <div>
            <Addbutton />
          </div>
          <div>
            <Finalcard />
          </div>
        </div>
        {/* Tercera tarjeta */}
        <div className="card6frasco">
          <p className="subti3">3 Month Supply</p>
          <img src="/img/6frascos.png" alt="6frascos" className="img6" />
          <p className="frascodesc6">
            <span className="subrayado2">$207</span> $175.95
          </p>
          <p className="red2">15% DISCOUNT</p>
          <div>
            <Addbutton />
          </div>
          <div>
            <Finalcard />
          </div>
          <p className="imgbestvalue">
            <img src="/img/bestvalue.png" alt="Best Value" />
          </p>
          <p className="imgmostpopular">
            <img src="/img/mostpopular.png" alt="Most Popular" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keto;
