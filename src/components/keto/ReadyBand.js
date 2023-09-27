import AddButton from "./AddButton";
import FinalCard from "./FinalCard";

const Keto = () => {
  return (
    <div className="readyBand">
      <div className="rated">
        <p>
          <img src="/img/starsfinal.png" alt="Stars" />
          REVIEWERS
        </p>
      </div>
      <div className="titleRe">
        <h2>Ready To Start Living Healthy?</h2>
        <p className="pick">Pick Your Bundle Below</p>
      </div>

      <div className="allCards">
        {/* Primera tarjeta */}
        <div className="card2Frasco">
          <p className="subti1">1 Month Supply</p>
          <img src="/img/2frascos.png" alt="2frascos" className="img2" />
          <p className="frascoDesc2">$69.99</p>
          <div>
            <AddButton />
          </div>
          <div>
            <FinalCard />
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div className="card4Frasco">
          <p className="subti2">2 Month Supply</p>
          <img src="/img/4frascos.png" alt="4frascos" className="img4" />
          <p className="frascoDesc4">
            <span className="subrayado1">$139.98</span> $125.98
          </p>
          <p className="red1">10% DISCOUNT</p>
          <div>
            <AddButton />
          </div>
          <div>
            <FinalCard />
          </div>
        </div>
        {/* Tercera tarjeta */}
        <div className="card6Frasco">
          <p className="subti3">3 Month Supply</p>
          <img src="/img/6frascos.png" alt="6frascos" className="img6" />
          <p className="frascoDesc6">
            <span className="subrayado2">$207</span> $175.95
          </p>
          <p className="red2">15% DISCOUNT</p>
          <div>
            <AddButton />
          </div>
          <div>
            <FinalCard />
          </div>
          <p className="imgBestValue">
            <img src="/img/bestvalue.png" alt="Best Value" />
          </p>
          <p className="imgMostPopular">
            <img src="/img/mostpopular.png" alt="Most Popular" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keto;
