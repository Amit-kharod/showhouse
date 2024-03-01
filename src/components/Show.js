import "./Show.css";

function Show({ imageURL, startedFrom, till, name, rating }) {
  return (
    <div>
      <img className="show-img" src={imageURL} alt="" />
      <p className="period">
        {startedFrom}-{till}
      </p>
      <h2 className="title">{name}</h2>
      <p className="rating">
        <img src="./images/imdb.png" alt="" />
        <span>{rating} / 10</span>
      </p>
    </div>
  );
}

export default Show;
