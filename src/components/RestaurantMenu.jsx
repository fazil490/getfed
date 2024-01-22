import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [showIndex, setShowIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const { restId } = useParams();

  const restInfo = useRestaurantMenu(restId);

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

  const itemCategory =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const handleItemClick = (index) => {
      // If the clicked item is already open, close it. Otherwise, open it.
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return (
    <div className=" w-[80%] lg:w-[50%] mx-auto my-4">
      {/* section1  */}
      <div className="py-4 flex justify-between items-center border-b border-dashed border-gray-300">
        <div>
          <img src="" alt="" />
          <h3 className="text-lg lg:text-xl font-semibold py-2">{name}</h3>
          <p className="text-gray-500">{cuisines.join(", ")}</p>
          <p className="text-gray-500">
            {areaName + " | " + lastMileTravelString}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p id="">{totalRatingsString}</p>
          <p id="" className="bg-green-600 p-2 text-white rounded-md">
            {avgRating}⭐
          </p>
        </div>
      </div>

      {/* section2 */}
      <div className="flex gap-8 items-center py-4 border-b border-dashed border-gray-300">
        <h3 className="text-lg lg:text-xl font-semibold">{deliveryTime + " mins"}</h3>
        <h3 className="text-lg lg:text-xl font-semibold">{costForTwoMessage}</h3>
      </div>

      {/* section3 */}
      {/* Item Category */}
      {itemCategory.map((category, index) => (
        <MenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === openIndex && true}
          setShowItem={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
