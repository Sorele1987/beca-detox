import React from "react";
import Secondbuttonget from "./Secondbuttonget";

const Keto = () => {
  return (
    <div className="ingredientcards">
      <p className="description">
        Using a combination of{" "}
        <span class="boldtext"> premiun-quality ingredients,</span> <br /> the
        Keto+ BHB Salts and Keto+ Drops work to encourage rapid <br /> ketosis,
        boosting metabolism and promoting better digestion
      </p>
      <div class="box">
        <section class="cards">
          <div class="box_cards1">
            <div class="box_cards_number">
              <span class="perks_number">1</span>
            </div>
            <img src="/img/fruta1.png" alt="Raspberry" />
            <div className="flechaiz">
              <img src="/img/flechaiz.png" alt="left" />
            </div>
            <p class="box_cards_title1">RASPBERRY KETONE</p>
            <p class="box_cards_description1">
              Breaks down the fat within cells more effectively, helping your
              body burn fat faster, and increases levels of adiponectin, a
              hormone that helps regulate metabolism.
            </p>
          </div>
          <div class="box_cards2">
            <div class="box_cards_number">
              <span class="perks_number">2</span>
            </div>
            <img src="/img/fruta2.png" alt="GRAPEFRUIT" />
            <p class="box_cards_title2">GRAPEFRUIT POWDER</p>
            <p class="box_cards_description2">
              Fiber and water properties promote fullness and appetite control
              which can reduce calorie intake; loe in calories and high in
              nutrients.
            </p>
            <div className="flechader">
              <img src="/img/flechader.png" alt="right" />
            </div>
          </div>
        </section>
      </div>

      <div>
        <Secondbuttonget />
      </div>
    </div>
  );
};

export default Keto;
