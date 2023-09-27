import ButtonGetYours from "./ButtonGetYours";
import CardBar from "./CardBar";

const Keto = () => {
  return (
    <div className="ketosisBand">
      <div className="paisaje">
        <img src="/img/fondopaisaje.png" alt="paisaje" />
      </div>

      <div className="circularLogoList">
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

      <div className="frascoGrandeKeto">
        <img src="/img/frascograndeketo.png" alt="KETOGP" />
      </div>

      <div className="frascoChicoKeto">
        <img src="/img/frascochicoketo.png" alt="KETO" />
      </div>

      <div className="section1">
        <h1>
          An Effective Way For{" "}
          <span class="boldText"> Rapid Ketosis & Weight Management</span>
        </h1>

        <nav>
          <ul className="benefitsList">
            <li>
              <img src="/img/checksol.png" alt="check" />
              Increases blood ketone levels
            </li>
            <li>
              <img src="/img/checksol.png" alt="check" />
              Helps to achieve Ketosis
            </li>
            <li>
              <img src="/img/checksol.png" alt="check" />
              May help with weight loss
            </li>
            <li>
              <img src="/img/checksol.png" alt="check" />
              Reduces the amount of time to reach ketosis
            </li>
          </ul>
        </nav>

        <div>
          <ButtonGetYours />
        </div>

        <div>
          <CardBar />
        </div>

        <p class="lorem">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed est
          vehicula, tempor lorem eu, sodales lacus. Morbi a luctus orci.
          Suspendisse potenti. Nulla ullamcorper quis dolor et rhoncus."
        </p>

        <div className="verifiedBuyerHarry">
          <img src="/img/fotharry.png" alt="Harry" />
          <div class="buyerInfo">
            <p>
              Harry R. <img src="/img/check.png" alt="check" /> Verified Buyer
            </p>
            <p class="imgStars">
              <img src="/img/starsbuyer.png" alt="Rate" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keto;
