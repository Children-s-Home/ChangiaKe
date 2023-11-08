import PropTypes from "prop-types"
import "./sr.css"
import { useNavigate } from "react-router-dom";



function SearchResultsCard(props) {

   const navigate = useNavigate();

   const navigateToChi = () => {
     // 👇️ navigate to /contacts
     navigate("/individualChildrenHome");
   };

  return (
    <div
      className="sr-card-container"
      style={{ background: `${props.backgroundColopropsr}` }}
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
      <button onClick={navigateToChi}>{props.button}</button>
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