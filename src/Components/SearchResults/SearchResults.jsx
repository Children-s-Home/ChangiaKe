import SearchBar from "./SearchBar"
import SearchResultsBody from "./SearchResultsBody";
import "./sr.css"
// sr = search results

const SearchResults = () => {
  return (
    <div className="sr-container">

      <SearchBar />
      <SearchResultsBody />
      

    </div>
  );
}

export default SearchResults