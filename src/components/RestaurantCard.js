import { Link } from "react-router-dom";
import { IMG__CON_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  id,
}) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="card">
        <img src={`${IMG__CON_URL}/${cloudinaryImageId}`} alt="place" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
