import { Search } from "lucide-react";
import "./Filters.css";

function Filters({ filters, setFilters }) {
  const { searchInput, ratingInput, sortByInput } = filters;

  const inputChangeHandler = (e) => {
    setFilters({ ...filters, searchInput: e.target.value });
  };

  const ratingChangeHandler = (e) => {
    setFilters({ ...filters, ratingInput: e.target.value });
  };

  const sortChangeHandler = (e) => {
    setFilters({ ...filters, sortByInput: e.target.value });
  };

  return (
    <div className="filters">
      <div className="sort-filter">
        <label htmlFor="sort-dropdown">Sort by</label>
        <select
          name="sort-dropdown"
          id="sort-dropdown"
          onChange={sortChangeHandler}
          value={sortByInput}
        >
          <option value="relevance">Relevance</option>
          <option value="oldest">Oldest</option>
          <option value="newest">Newest</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="rating-filter">
        <label htmlFor="rating-dropdown">Filter by Rating</label>
        <select
          name="rating-dropdown"
          id="rating-dropdown"
          onChange={ratingChangeHandler}
          value={ratingInput}
        >
          <option value="all">all</option>
          <option value="9">9 and above</option>
          <option value="7">7 and above</option>
          <option value="5">5 and above</option>
        </select>
      </div>
      <div className="search-filter">
        <Search />
        <input
          type="text"
          placeholder="search"
          id="search-input"
          onChange={inputChangeHandler}
          value={searchInput}
        />
      </div>
      <button
        className="clear-filters"
        onClick={() =>
          setFilters({
            searchInput: "",
            sortByInput: "relavance",
            ratingInput: "all",
          })
        }
      >
        Clear filters
      </button>
    </div>
  );
}

export default Filters;
