import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG__CON_URL } from "../constants";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=${resId}`
    );
    const res = await data.json();
    // console.log(res.data);
    setRestaurant(res.data);
    setRestaurantInfo(res.data.cards[0].card.card.info);
    setRestaurantMenu(
      res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  if(!restaurant) return <Shimmer />

  return (
    <>
      {restaurant && (
        <div style={{ display: "flex" }}>
          <div>
            <h1>{restaurantInfo?.name}</h1>
            <img src={IMG__CON_URL + restaurantInfo?.cloudinaryImageId} />
            <h3>{restaurantInfo?.areaName}</h3>
            <h3>{restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRatingString}</h3>
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
          </div>

          <div className="menu">
            <h1>Menu</h1>
            <ul>
              {restaurantMenu?.map((itemElement) => {
                const item = itemElement?.card?.info;
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantMenu;
