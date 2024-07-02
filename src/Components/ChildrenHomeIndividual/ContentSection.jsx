import "./chi.css"
import PropTypes from "prop-types"


function ContentSection(props) {
  return (
    <div className="content-section-container">
      <h1>
        {props.titleBlack}{" "}
        <span className="cs-orange">{props.titleOrange}</span>
      </h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

ContentSection.propTypes = {
  titleBlack: PropTypes.string,
  titleOrange: PropTypes.string,
  paragraph: PropTypes.string,
};

export default ContentSection