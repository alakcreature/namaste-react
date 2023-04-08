import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

function useRestaurant(resId) {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);


  const getRestaurantInfo = async () => {
    const data = await fetch(
      `${FETCH_MENU_URL}${resId}`
    );
    const res = await data.json();
    setRestaurant(res.data);
    setRestaurantInfo(res.data.cards[0].card.card.info);
    setRestaurantMenu(
      res.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  return {restaurant, restaurantInfo, restaurantMenu};
}

export default useRestaurant;
