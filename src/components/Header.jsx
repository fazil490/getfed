import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../context/userContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  const [authBtn, setAuthBtn] = useState("Login");
  return (
    <header className="header border-b">
      <nav className="nav-bar flex justify-between items-center p-4 w-[90%] mx-[auto] my-4">
        <div className="nav-brand">
          <Link to="/" className="link">
            <h1 className="brand-name text-3xl font-bold text-green-600">
              {" "}
              <span className="getfed text-red-500">G</span>et
              <span className="getfed text-red-500">F</span>ed{" "}
            </h1>
          </Link>
        </div>
        <div className="location">
          <img />
          <Link
            to="/"
            className="link text-lg text-green-600 hover:text-red-500"
          >
            Chennai, India
          </Link>
        </div>

        <div className="nav-list">
          <ul className="flex gap-7 ">
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="text-green-600 hover:text-red-500">
              {" "}
              <Link to="/" className="link">Restaurants</Link>
            </li>
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/groceries" className="link">
                Groceries
              </Link>
            </li>
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link className="link">Cart</Link>
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
            <li className=" text-green-600 hover:text-red-500">
              {loggedInUser}
            </li>
            <li className=" text-green-600 hover:text-red-500">
              {onlineStatus === true ? "🟢" : "🔴"}
              {/* ✅🟢❌🚫❗ */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
