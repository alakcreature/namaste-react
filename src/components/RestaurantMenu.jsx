import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG__CON_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

function RestaurantMenu() {
  const { resId } = useParams();
  const { restaurant, restaurantInfo, restaurantMenu } = useRestaurant(resId);

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
