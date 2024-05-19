import { useState } from "react";
import Filters from "./components/Filters";
import Shows from "./components/Shows";

function App() {
  const [filters, setFilters] = useState({
    searchInput: "",
    sortByInput: "relavance",
    ratingInput: "all",
  });

  return (
    <div className="app">
      <Filters filters={filters} setFilters={setFilters} />
      <Shows filters={filters} />
    </div>
  );
}

export default App;
