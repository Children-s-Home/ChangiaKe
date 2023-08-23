import "./chi.css"
import PropTypes from "prop-types"

function LeadershipCard(props) {
  return (
    <div className="leadership-card-container">
        <div className="leader-image" 
        style={{ backgroundImage: `url("/images/${props.img}.jpeg")` }}
         ></div>
        <h1 className="leader-name">{props.name}</h1>
        <h2 className="leader-post">{props.post}</h2>
    </div>
  )
}

LeadershipCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  post: PropTypes.string,
};

export default LeadershipCard