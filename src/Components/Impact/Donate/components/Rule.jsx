import PropTypes from "prop-types";

function Rule({ className }) {
  return <div className={className}></div>;
}
Rule.propTypes = {
  className: PropTypes.string,
};

export default Rule;
