const Header = () => {
    return (
      <header className="header">
        <nav className="nav-bar">
          <div className="nav-brand">
            <a href="">
              <h1 className="brand-name">
                {" "}
                <span className="getfed">G</span>et
                <span className="getfed">F</span>ed{" "}
              </h1>
            </a>
          </div>
          <div className="location">
            <img />
            <a href="">Chennai, India</a>
          </div>
          <div className="search">
            <form>
              <input
                className="serach-box"
                type="search"
                placeholder="Search for Restaurants and Foods"
              ></input>
            </form>
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <a href="">Offers</a>
              </li>
              <li>
                <a href="">Restaurants</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };

  export default Header;