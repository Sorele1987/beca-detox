import SecondButtonGet from "./SecondButtonGet";

const Keto = () => {
  return (
    <div className="madeBand">
      <h2>Regen Health Products Are Always...</h2>
      <div className="mades">
        <div className="made">
          <span class="usa">
            <img src="/img/usa.png" alt="USA" />
          </span>
          <p className="madeInUsa">Made in America</p>
          <p className="usaDesc">
            We are proud that ALL Regen Health
            <br /> products are made in the USA. The
            <br />
            well-being of our customer is our highest priority.
          </p>
        </div>
        <div className="made">
          <span class="gmp">
            <img src="/img/gmp.png" alt="GMP" />
          </span>
          <p className="gmpCertified">GMP Certified</p>
          <p className="gmpDesc">
            All products distributed and
            <br /> manufactured by Regen Health are
            <br />
            manufactured in a GMP-certified facility.
            <br />
            Regen Health ensures that all of their <br /> products are
            consistently produced to the highest quality.
          </p>
        </div>
        <div className="made">
          <span class="fda">
            <img src="/img/fda.png" alt="FDA" />
          </span>
          <p className="fdaApproved">FDA Approved</p>
          <p className="fdaDesc">
            All products distributed and <br /> manufactured by Regen Health are
            <br /> manufactured in a facility that is
            <br /> approved by the U.S. Food and Drug
            <br /> Administration(FDA).
          </p>
        </div>
        <div className="number">
          <span class="natural">
            <img src="/img/natural.png" alt="NATURAL" />
          </span>
          <p className="allNaturall">All Natural</p>
          <p className="naturalDesc">
            Regen Health absolutely dos not use
            <br /> filter ingredients and other harmful
            <br /> chemicals or additives in their products.
            <br />
            This promise ensures each product's purity, and safety for use and
            <br />
            consumption.
          </p>
        </div>
      </div>
      <div>
        <SecondButtonGet />
      </div>
    </div>
  );
};

export default Keto;
