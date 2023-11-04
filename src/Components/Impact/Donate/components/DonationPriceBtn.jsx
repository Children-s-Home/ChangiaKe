import PropTypes from "prop-types";

import DollarSign from "../../../../assets/dollarSign";

function DonationPriceBtn({ price }) {
  return (
    <button className="donation-price-btn">
      <DollarSign /> {price}
    </button>
  );
}

DonationPriceBtn.propTypes = {
  price: PropTypes.number,
};

export default DonationPriceBtn;
