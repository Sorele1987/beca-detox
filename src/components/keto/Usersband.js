import React from "react";

const Keto = () => {
  return (
    <div className="userband">
      <h2>Hundreds Of Users Are Raving About Their Results</h2>

      <div className="usercard">
        <span class="flechaizquierda">
          <img src="/img/flechaiznueva.png" alt="Arrowleft" />
        </span>

        {/* Primera tarjeta */}
        <div className="card1">
          <img src="/img/fotohombre.png" alt="Russ" />
          <p className="carddesc">
            "Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Duis sed est vehicula,
            <br /> tempor lorem eu, sodales lacus. Morbi a<br /> luctus orci.
            Suspendisse potenti. Nulla
            <br /> ullamcorper quis dolor et rhoncus."
          </p>
          <div className="stars">
            <img src="/img/starsbuyer.png" alt="Stars" />
          </div>
          <p className="cardname">
            RUSS K. <img src="/img/checkverde.png" alt="check" />
            Verified Buyer
          </p>
        </div>
        {/* Segunda tarjeta */}
        <div className="card2">
          <img src="/img/fotohombre.png" alt="Russ" />
          <p className="carddesc">
            "Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Duis sed est vehicula,
            <br /> tempor lorem eu, sodales lacus. Morbi a<br /> luctus orci.
            Suspendisse potenti. Nulla
            <br /> ullamcorper quis dolor et rhoncus."
          </p>
          <div className="stars">
            <img src="/img/starsbuyer.png" alt="Stars" />
          </div>
          <p className="cardname">
            RUSS K. <img src="/img/checkverde.png" alt="check" />
            Verified Buyer
          </p>
        </div>
        {/* Tercera tarjeta */}
        <div className="card3">
          <img src="/img/fotohombre.png" alt="Russ" />
          <p className="carddesc">
            "Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Duis sed est vehicula,
            <br /> tempor lorem eu, sodales lacus. Morbi a<br /> luctus orci.
            Suspendisse potenti. Nulla
            <br /> ullamcorper quis dolor et rhoncus."
          </p>
          <div className="stars">
            <img src="/img/starsbuyer.png" alt="Stars" />
          </div>
          <p className="cardname">
            RUSS K. <img src="/img/checkverde.png" alt="check" />
            Verified Buyer
          </p>
        </div>

        <span class="flechaderecha">
          <img src="/img/flechaderenueva.png" alt="Arrowrights" />
        </span>
      </div>
      <div className="dots">
        <img src="/img/puntos.png" alt="dots" />
      </div>
    </div>
  );
};

export default Keto;
