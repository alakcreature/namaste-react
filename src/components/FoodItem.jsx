import { IMG__CON_URL } from "../constants";

const FoodItem = ({ imageId, name, description, price }) => {
  return (
    <div className="w-[200px] p-2 m-5 shadow-lg bg-pink-200">
      <img src={`${IMG__CON_URL}/${imageId}`} alt="place" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
