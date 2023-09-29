import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="w-[60%] mx-auto my-8">
      <div>
        <h1 className="text-3xl font-bold text-center m-8">
          <span className="text-green-600">Your </span>
          <span className="text-red-500">Cart</span>
        </h1>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="bg-gray-100 p-4 rounded-md w-[60%]">
          <h1 className="text-xl font-semibold">Cart Items</h1>
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
        <div className="bg-gray-100 p-4 rounded-md h-min w-[40%]">
          <h1 className="text-xl font-semibold">Bill Details</h1>
          {cartItems.map((price) => (
            <div
              key={price?.card?.info?.id}
              className="py-4 flex justify-between items-center gap-4"
            >
              <h1 className="w-[70%]">{price?.card?.info?.name} :</h1>
              <h1>
                ₹{" "}
                {price?.card?.info?.price / 100 ||
                  price?.card?.info?.defaultPrice / 100}
              </h1>
            </div>
          ))}
          <div className="py-4 flex justify-between items-center gap-4">
            <h1 className="text-lg py-4">Total Bill Amount : </h1>
            <h1 className="">₹ </h1>
          </div>
          <button className="px-4 py-2 w-[100%] mx-auto bg-green-600 text-white rounded-xl">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
