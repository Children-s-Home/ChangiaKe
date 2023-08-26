import PropTypes from "prop-types"

function NeedsCard(props) {
  return (
    <div className="needs-card-container">
        <div className="needs-card-image">
            <img src={`/images/${props.img}.png`} alt="" />
        </div>
        <h1>{props.text}</h1>
    </div>
  )
}

NeedsCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};

export default NeedsCard