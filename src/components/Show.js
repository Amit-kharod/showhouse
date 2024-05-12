import { Heart } from "lucide-react";
import { useState } from "react";
import "./Show.css";

function Show({ imageURL, startedFrom, till, name, rating }) {

  let [counter, setCounter] = useState(0);

  console.log(counter)

  const likeButtonHandler = ()=> {
    setCounter((prevCounter)=> prevCounter + 1);
    console.log(counter)
  }

  return (
    <div>
      <img className="show-img" src={imageURL} alt="" />
      <p className="period">
        {startedFrom}-{till}
      </p>
      <Heart onClick={likeButtonHandler} fill={counter > 0 ? "red" : 'white'}/>
      {counter}
      <h2 className="title">{name}</h2>
      <p className="rating">
        <img src="./images/imdb.png" alt="" />
        <span>{rating} / 10</span>
      </p>
    </div>
  );
}

export default Show;
