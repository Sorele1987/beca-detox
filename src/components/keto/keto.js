import React from "react";
import Navbar from "./Navbar";
import Ketosisband from "./Ketosisband";

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

      <div className="featured">
        <nav>
          <ul className="logos">
            <li>
              <img src="/img/logofeatured.png" alt="As featured on" />
            </li>
            <li>
              <img src="/img/logognc.png" alt="GNC" />
            </li>
            <li>
              <img src="/img/logodigest.png" alt="Digest" />
            </li>
            <li>
              <img src="/img/logowalmart.png" alt="Walmart" />
            </li>
            <li>
              <img src="/img/logobeyond.png" alt="Beyond" />
            </li>
            <li>
              <img src="/img/logoshoppe.png" alt="Shoppe" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Keto;
