const Shimmer = () => {
  return (
    <main className="main-container">
      <div className="restuarants">
        <h2>Restaurants offer online food delivery in Chennai</h2>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRest(filteredList);
          }}
        >
          Top Rated
        </button>
        <div className="shimmer-container">
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
          <div className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-rating"></div>
            <div className="shimmer-desc"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shimmer;
