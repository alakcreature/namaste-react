import React, { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import filter from "../utils/common";
import useOnline from "../utils/useOnline";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredrestaurantList, setfilteredrestaurantList] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6831071&lng=86.9649116"
    );
    const data = await res.json();
    let restaurants = data?.data?.cards?.filter((el) => {
      if (el.cardType === "restaurant") {
        return el.data;
      }
    });
    setrestaurantList(restaurants);
    setfilteredrestaurantList(restaurants);
  };

  // empty dependency array => once after every render
  // dep array [searchText] => once after initial render  + every time after render (my searchText changes)
  useEffect(() => {
    // API call
    fetchData();
  }, []);

  // let offline = useOnline();

  // if (offline) {
  //   return <h1> 🍎 Offline, please check your internet connection</h1>;
  // }

  // conditional rendering
  // if restaurant is not there => shimmer loader
  // if it is => actual data
  if (!restaurantList) return null;

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
        data-testid="search-input"
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
        data-testid="search-btn"
          className="search-btn p-2 m-2 bg-purple-900 text-white"
          onClick={() => {
            const data = filter(searchText, restaurantList);
            if (data.length > 0) {
              setfilteredrestaurantList(data);
            }
          }}>
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-3 p-2 border border-indigo-600" data-testid="res-list">
        {filteredrestaurantList?.length > 0 ? (
          filteredrestaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.data.id}
                {...restaurant.data.data}
              />
            );
          })
        ) : (
          <h1>No Restaurant match your Filter!!</h1>
        )}
      </div>
    </>
  );
}

export default Body;
