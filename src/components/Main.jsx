import RestaurantsList from "./RestaurantsList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";

const Main = () => {
  const [listOfRest, setListOfRest] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [topRated, setTopRated] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0826802%26lng%3D80.2707184%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  

  const toggleTopRated = () => {
    setTopRated(!topRated);
    const topRatedRestaurantSorted = listOfRest
      .filter((res) => res?.info?.avgRating > 4.3)
      .sort((a, b) => b.info.avgRating - a.info.avgRating);

    topRated
      ? setFilteredRestaurant(topRatedRestaurantSorted)
      : setFilteredRestaurant(listOfRest);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="internet-error w-6/12 mx-auto my-32 text-center">
        😕
        <h3>OOPS!!!</h3>
        <h4>Your Connection was Interrupted!</h4>
        <h5>Try to connect to a wifi, network cables, modem or router</h5>
      </div>
    );

  return listOfRest && listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="main-container w-[80%] my-4 mx-[auto] ">
      <div className="w-[80%] lg:w-[50%] mx-auto my-8">
        <input
          data-testid="searchInput"
          className="mr-2 px-4 py-2 rounded-md w-[80%] shadow-md"
          type="search"
          placeholder="Search for Restaurants, Cuisines or Places"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const filteredRestaurant = listOfRest.filter(
              (res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                res?.info?.cuisines?.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                ) ||
                res?.info?.areaName
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        ></input>
        <button
          className="search-btn bg-red-500 hover:bg-green-600 shadow-md px-4 py-2 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <div className="restuarants">
        <h2 className="text-xl lg:text-2xl font-medium py-2 my-2">
          Restaurants offer online food delivery in Chennai
        </h2>
        <button
          onClick={toggleTopRated}
          className={`filter-btn ${
            !topRated
              ? "bg-green-600 text-white hover:bg-green-500"
              : "bg-slate-50 text-gray-600 hover:bg-slate-100"
          } p-2 my-2  border rounded-3xl `}
        >
          Top Rated
        </button>
        <div className="rest-list m-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              className="menu-routing"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {<RestaurantsList restData={restaurant} />}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
