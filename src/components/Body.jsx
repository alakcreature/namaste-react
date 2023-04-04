import React, { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filter(searchText, restaurantlist) {
  let filteredData;
  if (searchText === "") {
    filteredData = [...restaurantlist];
  } else {
    filteredData = restaurantlist.filter((res) => {
      if (res?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase())) {
        return res;
      }
    });
  }
  return filteredData;
}

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

  // conditional rendering
  // if restaurant is not there => shimmer loader
  // if it is => actual data

  if(!restaurantList) return null;


  return restaurantList?.length === 0 ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filter(searchText, restaurantList);
            if (data.length > 0) {
              setfilteredrestaurantList(data);
            }
          }}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurantList?.length > 0 ?
          filteredrestaurantList.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.data.data.id}
                {...restaurant.data.data}
              />
            ); 
          }): <h1>No Restaurant match your Filter!!</h1>
        }
      </div>
    </>
  );
}

export default Body;
