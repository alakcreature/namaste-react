import React, { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


function filter(searchText, restaurantList){
    const filteredData = restaurantList.filter((res)=> {
        res.data.name.includes(searchText);
    });
    return filteredData;
}

function Body() {
    const [searchText, setSearchText] = useState("");
    const [filteredrestaurantList, setfilteredrestaurantList] = useState(restaurantList);


  return (
    <>
    <div className="search-container">
        <input 
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={()=>{
            const data = filter(searchText,filteredrestaurantList);
            setfilteredrestaurantList(data);
        }}>Search</button>
    </div>
      <div className="restaurant-list">
        {filteredrestaurantList?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
}

export default Body;
