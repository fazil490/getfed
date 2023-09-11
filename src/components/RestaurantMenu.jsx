import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + restId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  if (restInfo === null) return <MenuShimmer />;

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restInfo?.cards[0]?.card?.card?.info;

  const { lastMileTravelString, deliveryTime } =
    restInfo?.cards[0]?.card?.card?.info?.sla;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="rest-menu">
      {/* section1  */}
      <div className="rest-menu-info-rat">
        <div className=" rest-menu-info">
          <img src="" alt="" />
          <h3>{name}</h3>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p className="location">{areaName + " | " + lastMileTravelString}</p>
        </div>
        <div className=" rest-menu-rating">
          <p id="rating">{avgRating}⭐</p>
          <p id="totalRating">{totalRatingsString}</p>
        </div>
      </div>

      {/* section2 */}
      <div className="rest-menu-cost-time">
        <h3>{deliveryTime + " mins"}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>

      {/* section3 */}
      <div className="rest-menu-items">
        <h3 className="menu-title">Menu</h3>
        {itemCards.map((item) => (
          <div className="rest-menu-item-list" key={item?.card?.info?.id}>
            <div className="rest-menu-name-desc-price">
              <p>{item?.card?.info?.name}</p>
              <p>{"₹ " + item?.card?.info?.price / 100}</p>
              <p className="menu-item-desc">{item?.card?.info?.description}</p>
            </div>
            <div className="rest-menu-img-add">
              <button className="add-item">Add</button>
              <img
                src={
                  "//media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  item?.card?.info?.imageId
                }
                alt=""
                className="menu-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  {
    /* <h4>{restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0].title}</h4> */
  }
};

export default RestaurantMenu;

//media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/
