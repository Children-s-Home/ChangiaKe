import PropTypes from "prop-types";

import "../Donation.css";

function RadioContainer({ children, className }) {
  return <div className={className}>{children}</div>;
}

RadioContainer.propTypes = {
  className: PropTypes.string,
};

export default RadioContainer;
