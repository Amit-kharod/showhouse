import { useState } from "react";
import Filters from "./components/Filters";
import Shows from "./components/Shows";

function App() {

  const [searchInput, setSearchInput] = useState("");


  return (
    <div className="app">
      <Filters searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Shows searchInput={searchInput}/>
    </div>
  );
}

export default App;
