import SecondButtonGet from "./SecondButtonGet";

const Keto = () => {
  return (
    <div className="ingredientCards">
      <p className="description">
        Using a combination of{" "}
        <span class="boldText"> premiun-quality ingredients,</span> <br /> the
        Keto+ BHB Salts and Keto+ Drops work to encourage rapid <br /> ketosis,
        boosting metabolism and promoting better digestion
      </p>
      <div class="box">
        <section class="cards">
          <div class="boxCards1">
            <div class="boxCardsNumber">
              <span class="perksNumber">1</span>
            </div>
            <img src="/img/fruta1.png" alt="Raspberry" />
            <div className="flechaIz">
              <img src="/img/flechaiz.png" alt="left" />
            </div>
            <p class="boxCardsTitle1">RASPBERRY KETONE</p>
            <p class="boxCardsDescription1">
              Breaks down the fat within cells more effectively, helping your
              body burn fat faster, and increases levels of adiponectin, a
              hormone that helps regulate metabolism.
            </p>
          </div>
          <div class="boxCards2">
            <div class="boxCardsNumber">
              <span class="perksNumber">2</span>
            </div>
            <img src="/img/fruta2.png" alt="GRAPEFRUIT" />
            <p class="boxCardsTitle2">GRAPEFRUIT POWDER</p>
            <p class="boxCardsDescription2">
              Fiber and water properties promote fullness and appetite control
              which can reduce calorie intake; loe in calories and high in
              nutrients.
            </p>
            <div className="flechaDer">
              <img src="/img/flechader.png" alt="right" />
            </div>
          </div>
        </section>
      </div>

      <div>
        <SecondButtonGet />
      </div>
    </div>
  );
};

export default Keto;
