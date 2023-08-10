import {CDN_URL} from "../utils/constants"

const RestaurantsList = ({ restData }) => {
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = restData?.info;
    return (
      <div className="rest-cards">
        <img
          src={
             CDN_URL+
            cloudinaryImageId
          }
        />
        <div className="rest-info">
          <h3>{name}</h3>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <div className="rest-rating-ttr-price">
            <p>{avgRating}⭐</p>
            <p>{restData.info.sla.deliveryTime} Minutes to reach</p>
            <p>{costForTwo}</p>
          </div>
        </div>
      </div>
    );
  };

export default RestaurantsList;