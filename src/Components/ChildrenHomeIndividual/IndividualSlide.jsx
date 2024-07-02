import "./chi.css"
import PropTypes from "prop-types"


function IndividualSlide(props) {
  return (
    <div
      className="gallery-slide"
      style={{ backgroundImage: `url("/images/${props.img}.jpeg")` }}
    ></div>
  );
}

IndividualSlide.propTypes = {
    img: PropTypes.string,
}

export default IndividualSlide