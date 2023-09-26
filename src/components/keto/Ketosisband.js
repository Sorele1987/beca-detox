import React from "react";
import Buttongetyours from "./Buttongetyours";
import Cardbar from "./Cardbar";

const Keto = () => {
  return (
    <div className="ketosisBand">
      <div className="paisaje">
        <img src="/img/fondopaisaje.png" alt="paisaje" />
      </div>

      <div className="circularlogolist">
        <div className="circulo1">
          <img src="/img/logocircular1.png" alt="logo90" />
        </div>
        <div className="circulo2">
          <img src="/img/logocircular2.png" alt="logomadeinamerica" />
        </div>
        <div className="circulo3">
          <img src="/img/logocircular3.png" alt="logo100%natural" />
        </div>
        <div className="circulo4">
          <img src="/img/logocircular4.png" alt="logoGMP" />
        </div>
      </div>

      <div className="frascograndeketo">
        <img src="/img/frascograndeketo.png" alt="KETOGP" />
      </div>

      <div className="frascochicoketo">
        <img src="/img/frascochicoketo.png" alt="KETO" />
      </div>

      <div className="section1">
        <h1>
          An Effective Way For{" "}
          <span class="boldtext"> Rapid Ketosis & Weight Management</span>
        </h1>

        <nav>
          <ul className="benefitslist">
            <li>Increases blood ketone levels</li>
            <li>Helps to achieve Ketosis</li>
            <li>May help with weight loss</li>
            <li>Reduces the amount of time to reach ketosis</li>
          </ul>
        </nav>

        <div>
          <Buttongetyours />
        </div>

        <div>
          <Cardbar />
        </div>

        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed est
          vehicula, tempor lorem eu, sodales lacus. Morbi a luctus orci.
          Suspendisse potenti. Nulla ullamcorper quis dolor et rhoncus."
        </p>

        <div className="verifiedbuyerharry">
          <img src="/img/fotharry.png" alt="Harry" />
          <div class="buyerinfo">
            <p>
              Harry R. <img src="/img/check.png" alt="check" /> Verified Buyer
            </p>
            <p class="imgstars">
              <img src="/img/starsbuyer.png" alt="Rate" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keto;
