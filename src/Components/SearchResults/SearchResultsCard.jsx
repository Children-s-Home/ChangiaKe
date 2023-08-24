import PropTypes from "prop-types"
import "./sr.css"



function SearchResultsCard(props) {
  return (
    <div
      className="sr-card-container"
      style={{ background: `${props.backgroundColor}` }}
    >
      <div
        className="sr-card-pic"
        style={{
          backgroundImage: `url("/images/Search Results/${props.img}.png")`,
        }}
      ></div>
      <h1>{props.name} Children&apos;s Home</h1>
      <div className="sr-card-loaction">
        <img src="/images/Search Results/location.png" alt="" />
        <h2>{props.location}</h2>
      </div>
      <p>{props.text}</p>
      <button>{props.button}</button>
    </div>
  );
}

SearchResultsCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
};


export default SearchResultsCard