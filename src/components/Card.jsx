const Card = (props) => {
  return (
    <div className="card-div">
      <img className="cover-img" src={`../src/img/${props.coverImg}`} />
      <div>
        <img
          className="location-img"
          src="../src/img/location.svg"
          alt="location"
        />
        <p>{props.location}</p>
        <a href={props.maps}>View on Google Maps</a>
      </div>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
