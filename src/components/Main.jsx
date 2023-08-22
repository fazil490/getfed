import RestaurantsList from "./RestaurantsList";
import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Main = () => {
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if (listOfRest && listOfRest.length === 0) {
    return (
      <Shimmer />
    )
  }

  return (
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
            <RestaurantsList key={restaurant.info.id} restData={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
