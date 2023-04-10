import { Link } from "react-router-dom";
import { IMG__CON_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  id,
}) => {
  const { user } = useContext(UserContext);

  return (
    <Link to={`/restaurant/${id}`}>
      <div className="w-[200px] p-2 m-5 shadow-lg">
        <img src={`${IMG__CON_URL}/${cloudinaryImageId}`} alt="place" />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        <h5>{user.name}</h5>
        <h5>{user.email}</h5>
      </div>
    </Link>
  );
};

export default RestaurantCard;
