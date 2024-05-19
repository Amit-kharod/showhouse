import { Search } from "lucide-react";
import "./Filters.css";

function Filters({searchInput, setSearchInput}) {

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-filter">
      <Search />
      <input
        type="text"
        placeholder="search"
        id="search-input"
        onChange={inputChangeHandler}
      />
    </div>
  );
}

export default Filters;
