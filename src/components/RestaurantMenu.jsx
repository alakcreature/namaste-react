import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG__CON_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

function RestaurantMenu() {
  const { resId } = useParams();
  const { restaurant, restaurantInfo, restaurantMenu } = useRestaurant(resId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItems(item));
  };

  if (!restaurant) return <Shimmer />;

  return (
    <>
      {restaurant && (
        <div style={{ display: "flex" }}>
          <div>
            <h1>Restaurant Id: {resId}</h1>
            <h2>{restaurantInfo?.name}</h2>
            <img src={IMG__CON_URL + restaurantInfo?.cloudinaryImageId} />
            <h3>{restaurantInfo?.areaName}</h3>
            <h3>{restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRatingString}</h3>
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
          </div>

          <div className="p-5">
            <h1>Menu</h1>
            <ul>
              {restaurantMenu?.map((itemElement) => {
                const item = itemElement?.card?.info;
                return (
                  <li key={item.id}>
                    {item.name}
                    <button
                      className="m-2 p-2 bg-green-400"
                      onClick={() => addFoodItem(item)}>
                      Add
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantMenu;
