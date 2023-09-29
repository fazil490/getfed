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
    <header className="header shadow-md mb-4">
      <nav className="nav-bar flex justify-between items-center p-4 w-[80%] mx-[auto]">
        <div className="nav-brand flex items-center gap-8">
          <Link to="/" className="link">
            <h1 className="brand-name text-3xl font-bold text-green-600">
              {" "}
              <span className="getfed text-red-500">G</span>et
              <span className="getfed text-red-500">F</span>ed{" "}
            </h1>
          </Link>
          <div>
            <h2 className="text-green-600 hover:text-red-500 cursor-pointer">
              Chennai, India
            </h2>
          </div>
        </div>

        <div className="nav-list">
          <ul className="flex gap-8 font-semibold">
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
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li className=" text-green-600 hover:text-red-500">
              <Link to="/login">
                <button
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
            {/* <li className=" text-green-600 hover:text-red-500">
              {loggedInUser}
            </li> */}
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/cart" className="">
                Cart - {cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
