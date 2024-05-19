import { useEffect, useState } from "react";
import Show from "./Show";
import "./Shows.css";
import { getFilteredShow } from "../utils/helper";
import { Plus } from "lucide-react";

function Shows({ filters, setIsShowFormOpen, showsData }) {

  let filteredShows = getFilteredShow(showsData, filters);

  return (
    <div className="shows">
      {filteredShows.map((show) => {
        const startedFrom = show.Period.split("-")[0].slice(1);
        let till = show.Period.split("-")[1].slice(0, -1);

        if (till.length < 2) {
          till = "PRESENT";
        }

        return (
          <Show
            key={show.Name}
            imageURL={show.ImageUrl}
            name={show.Name}
            rating={show.Rating}
            startedFrom={startedFrom}
            till={till}
          />
        );
      })}
      <div className="new-show" onClick={() => setIsShowFormOpen(true)}>
        <Plus size={100}/>
        <h2>NEW SHOW</h2>
      </div>
    </div>
  );
}

export default Shows;
