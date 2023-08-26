import "./sr.css"

function SearchBar() {
  return (
    <div className="sb-container">
      <div className="sb-content">
        <input
          type="text"
          placeholder="Enter the name or location of the place you are looking for"
        />
        <button>
          <img src="/images/search.png" alt="" />
        </button>
      </div>
    </div>
  ); 
}

export default SearchBar