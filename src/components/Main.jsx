import RestaurantsList from "./RestaurantsList"
import restList from "../utils/mockData"

const Main = () => {
    return (
      <main className="main-container">
        <div className="restuarants">
          <h2>Best Restaurants in Chennai</h2>
          <div className="rest-list">
            {
              restList.map((restaurant) => (
                <RestaurantsList key={restaurant.info.id} restData={restaurant} />
              )
              )
            }
          </div>
        </div>
      </main>
    );
  };

  export default Main;