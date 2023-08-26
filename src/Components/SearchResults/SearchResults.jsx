import Navbar from "../Navbar/Navbar"
import SearchBar from "./SearchBar"
import SearchResultsBody from "./SearchResultsBody";
import Footer from "../Footer/Footer"
import "./sr.css"
// sr = search results

const SearchResults = () => {
  return (
    <div className="sr-container">
      <Navbar />
      <SearchBar />
      <SearchResultsBody />
      <Footer />
    </div>
  );
}

export default SearchResults