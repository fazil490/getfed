import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaShoppingCart} from "react-icons/fa"
import {RiLoginCircleFill} from "react-icons/ri"

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="shadow-md mb-4">
      <nav className="flex justify-between items-center p-4 w-[80%] mx-[auto]">
        <div className="flex items-center gap-8">
          <Link to="/" className="link">
            <h1 className="text-3xl font-bold text-green-600">
              {" "}
              <span className="text-red-500">G</span>et
              <span className="text-red-500">F</span>ed{" "}
            </h1>
          </Link>
        </div>

        <div className="nav-routes">
          <ul className="flex gap-2 sm:gap-8 font-semibold ">
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
            {/* <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/groceries" className="link">
                Groceries
              </Link>
            </li> */}
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            {/* <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/about" className="link">
                About
              </Link>
            </li> */}
          </ul>
        </div>
        <div>
          <ul className="flex gap-2 items-center sm:gap-8">
            <li className=" text-green-600 hover:text-red-500">
              <Link to="/login">
              <RiLoginCircleFill className="w-5 h-5"/>
              </Link>
            </li>
           
            <li className=" text-green-600 hover:text-red-500">
              {" "}
              <Link to="/cart" className="flex items-center">
                <FaShoppingCart className="w-5 h-5"/> - {cartItems.length}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
