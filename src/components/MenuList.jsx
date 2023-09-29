import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const MenuList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => ( 
        <div
        data-testid= "menuItems"
          key={item?.card?.info?.id}
          className="flex justify-between items-center gap-4 my-4 p-4 bg-white shadow-sm hover:shadow-md"
        >
          <div className="w-[80%]">
            <p className="text-lg font-semibold">{item?.card?.info?.name}</p>
            <p className="text-md text-red-600">
              {"₹ " +
                (item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100)}
            </p>
            <p className="text-sm text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="flex items-center gap-4 relative">
            <button
              onClick={() => handleAddItem(item)}
              className="text-sm text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md absolute bottom-0 left-5"
            >
              ADD
            </button>
            <img
              src={
                "//media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                item?.card?.info?.imageId
              }
              alt=""
              className="w-[100px] h-[100px] rounded-md"
            />
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default MenuList;
