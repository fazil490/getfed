import { CDN_URL } from "../utils/constants";

const RestaurantsList = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName} =
    restData?.info;
  return (
    <div data-testid="restCard" className="w-[250px] mx-[auto] my-4 shadow-md hover:shadow-xl rounded-xl">
      <img className="w-[250px] h-[170px] rounded-xl rounded-b-none" src={CDN_URL + cloudinaryImageId} />
      <div className="text-left p-2">
        <h4 className="text-xl font-medium my-1">{name}</h4>
        <p id="rating" className="bg-green-600 w-fit p-1 my-1 text-white rounded-md">{avgRating}⭐</p>
        <p className="text-gray-700 my-1">{cuisines.join(", ")}</p>
        
        <h5 className="font-medium my-1">{areaName}</h5>
      </div>
    </div>
  );
};

// export const availabilty = (RestaurantsList) => {
//   return (props) => {
//     return (
//       <div>
//         <label className="absolute mx-2 px-2 bg-amber-950 text-white">Promoted</label>
//         <RestaurantsList {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantsList;
