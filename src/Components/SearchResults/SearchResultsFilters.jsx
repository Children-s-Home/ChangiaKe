import "./sr.css";
import PropTypes from "prop-types"

function SearchResultsFilters(props) {
  return (
    <div className="sr-filters-container">
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" name="" value="" />
            {props.text}
          </label>
        </li>
      </ul>
    </div>
  );
}

SearchResultsFilters.propTypes = {
  text: PropTypes.string,
}

export default SearchResultsFilters;
