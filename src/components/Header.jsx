import { useState } from "react";
import { listOfRest, setListOfRest } from "./Main";
import { Link } from "react-router-dom";

const Header = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState("");
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-brand">
          <Link to="/" className="link">
            <h1 className="brand-name">
              {" "}
              <span className="getfed">G</span>et
              <span className="getfed">F</span>ed{" "}
            </h1>
          </Link>
        </div>
        <div className="location">
          <img />
          <a href="">Chennai, India</a>
        </div>
        <div className="search">
          <input
            className="serach-box"
            type="search"
            placeholder="Search for Restaurants and Foods"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            id="search-btn"
            onClick={() => {
              const filterForSearch = listOfRest.filter((res) => {
                res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setListOfRest(filterForSearch);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              {" "}
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link">Restaurants</Link>
            </li>
            <li>
              {" "}
              <Link className="link">Cart</Link>
            </li>
            <li>
              {" "}
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  authBtn === "Login"
                    ? setAuthBtn("Logout")
                    : setAuthBtn("Login");
                }}
              >
                {authBtn}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
