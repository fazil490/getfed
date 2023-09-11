import { CDN_URL } from "../utils/constants";

const RestaurantsList = ({ restData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, areaName} =
    restData?.info;
  return (
    <div className="rest-cards">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="rest-info">
        <h4>{name}</h4>
        <p id="rating">{avgRating}⭐</p>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <h5 className="location">{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantsList;
