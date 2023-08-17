import RestaurantsList from "./RestaurantsList";
import restList from "../utils/mockData";
import { useState } from "react";

const Main = () => {
  const [listOfRest, setListOfRest] = useState(restList);

  return (
    <main className="main-container">
      <div className="restuarants">
        <h2>Restaurants offer online food delivery in Chennai</h2>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRest(filteredList);
          }}
        >
          Top Rated
        </button>
        <div className="rest-list">
          {listOfRest.map((restaurant) => (
            <RestaurantsList key={restaurant.info.id} restData={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
