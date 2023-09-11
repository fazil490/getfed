import RestaurantsList from "./RestaurantsList";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Main = () => {
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRest && listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="main-container">
      <div className="restuarants">
        <h2>Restaurants offer online food delivery in Chennai</h2>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRest(filteredList);
          }}
        >
          Top Rated
        </button>
        <div className="rest-list">
          {listOfRest?.map((restaurant) => (
            <Link className="menu-routing" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantsList restData={restaurant} /></Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
