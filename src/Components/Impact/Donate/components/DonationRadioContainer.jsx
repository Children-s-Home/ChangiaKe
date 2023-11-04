import PropTypes from "prop-types";
import "../Donation.css";

function DonationRadioContainer({ value, name, label }) {
  return (
    <div className="radio-container">
      <input type="radio" value={value} name={name} />
      <span className="radio-lbl">{label}</span>
    </div>
  );
}

DonationRadioContainer.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default DonationRadioContainer;
