import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="w-[30%] mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center m-8">
          <span className="text-green-600">Your </span>
          <span className="text-red-500">Cart</span>
        </h1>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        {cartItems.length === 0 && (
          <h1 className="text-lg text-center p-4">Your Cart is empty.</h1>
        )}
        <MenuList items={cartItems} />
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-white shadow-md rounded-md hover:text-red-600"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
