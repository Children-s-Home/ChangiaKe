import PropTypes from "prop-types";

import "../Donation.css";

function DonationCtaBtn({ children }) {
  return <button className="donation-cta">{children}</button>;
}

DonationCtaBtn.propTypes = {};
export default DonationCtaBtn;
