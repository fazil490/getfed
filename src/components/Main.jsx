import RestaurantsList, { availabilty } from "./RestaurantsList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRest from "../utils/useListOfRest";

const Main = () => {
  const onlineStatus = useOnlineStatus();

  const listOfRest = useListOfRest();

  const IsOpen = availabilty(RestaurantsList);

  if (onlineStatus === false)
    return (
      <div className="internet-error">
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
      <div className="w-[50%] mx-auto my-8">
        <input
          className="mx-4 px-4 py-2 rounded-md shadow-md w-[80%]"
          type="search"
          placeholder="Search for Restaurants and Cuisines"
        ></input>
        <button className="search-btn bg-red-400 hover:bg-red-500 shadow-md px-4 py-2 text-white rounded-md">
          Search
        </button>
      </div>
      <div className="restuarants">
        <h2 className="text-2xl font-medium py-2 my-2">
          Restaurants offer online food delivery in Chennai
        </h2>
        <button className="filter-btn bg-slate-50 p-2 my-2 text-gray-600 border rounded-3xl hover:bg-slate-100">
          Top Rated
        </button>
        <div className="rest-list m-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listOfRest?.map((restaurant) => (
            <Link
              className="menu-routing"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant?.info?.isOpen ? (
                <IsOpen restData={restaurant} />
              ) : (
                <RestaurantsList restData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
