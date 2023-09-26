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
    </div>
  );
};

export default Keto;
