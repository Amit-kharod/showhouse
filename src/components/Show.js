import { Heart } from "lucide-react";
import { useState } from "react";
import "./Show.css";

function Show({ imageURL, startedFrom, till, name, rating }) {
  let [counter, setCounter] = useState(0);

  const likeButtonHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <img className="show-img" src={imageURL} alt="" />
      <p className="period">
        {startedFrom}-{till}
      </p>
      <div className="like">
        <Heart
          onClick={likeButtonHandler}
          fill={counter > 0 ? "red" : "white"}
        />
        {counter}
      </div>
      <h2 className="title">{name}</h2>
      <p className="rating">
        <img src="./images/imdb.png" alt="" />
        <span>{rating} / 10</span>
      </p>
    </div>
  );
}

export default Show;
