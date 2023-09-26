import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../context/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  const [authBtn, setAuthBtn] = useState("Login");
  return (
    <header className="header border-b-2">
      <nav className="nav-bar flex justify-between items-center p-4 w-[80%] mx-[auto] my-4 mt-0">
        <div className="nav-brand flex items-center gap-10">
          <Link to="/" className="link">
            <h1 className="brand-name text-3xl font-bold text-green-600">
              {" "}
              <span className="getfed text-red-500">G</span>et
              <span className="getfed text-red-500">F</span>ed{" "}
            </h1>
          </Link>
          <div>
            <h2 className="text-green-600 text-xs cursor-pointer">
              Chennai, India
            </h2>
          </div>
        </div>

        <div className="nav-list">
          <ul className="flex gap-7">
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="text-green-600 hover:text-red-500">
              {" "}
              <Link to="/" className="link">
                Restaurants
              </Link>
            </li>
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/groceries" className="link">
                Groceries
              </Link>
            </li>

            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/cart" className="link font-bold">
                {cartItems.length}
              </Link>
            </li>
            <li className=" text-green-600 hover:text-red-500 hover:shadow-md px-4 py-2 text-sm rounded-lg">
              <Link to="/login">
                <button
                  className="font-semibold"
                  onClick={() => {
                    authBtn === "Login"
                      ? setAuthBtn("Logout")
                      : setAuthBtn("Login");
                  }}
                >
                  {authBtn}
                </button>
              </Link>
            </li>
            <li className=" text-white text-sm bg-red-400 hover:bg-red-500 cursor-pointer px-4 py-2 shadow-md rounded-lg ">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
