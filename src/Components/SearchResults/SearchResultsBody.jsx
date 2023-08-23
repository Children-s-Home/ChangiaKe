import SearchResultsCard from "./SearchResultsCard";
import SearchResultsFilters from "./SearchResultsFilters";
import { servicesFilters, needsFilters } from "./data";
import "./sr.css";

function SearchResultsBody() {
  const needs = needsFilters.map((item) => {
    return <SearchResultsFilters key={item.id} {...item} />;
  });
  const services = servicesFilters.map((item) => {
    return <SearchResultsFilters key={item.id} {...item} />;
  });

  return (
    <div className="sr-body-container">
      <div className="sr-body-filters-container">
        <hr />
        <h1>Location</h1>
        <input type="text" placeholder="type location here" />
        <h2>Needs</h2>
        <div className="filters-section">{needs}</div>
        <hr />
        <h2>Services</h2>
        <div className="filters-section">{services}</div>
        <hr />
        <button>Show Results</button>
      </div>
      <div className="sr-cards-container">
        <SearchResultsCard />
      </div>
    </div>
  );
}

export default SearchResultsBody;
