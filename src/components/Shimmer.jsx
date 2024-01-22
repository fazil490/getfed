const Shimmer = () => {
  return (
    <main className="main-container w-[80%] my-4 mx-[auto]">
      <div className="w-[50%] mx-auto my-8 ">
        <input
          className="mx-4 px-4 py-2 rounded-md shadow-md w-[80%]"
          type="search"
          placeholder="Search for Restaurants, Cuisines or Places"
        ></input>
        <button className="search-btn bg-red-400 hover:bg-red-500 shadow-md px-4 py-2 text-white rounded-md">
          Search
        </button>
      </div>
      <div className="restuarants">
        <h2 className="text-2xl font-medium py-2 my-2">
          Restaurants offer online food delivery in Chennai
        </h2>
        <button
          className="filter-btn  bg-slate-50 p-2 my-2 border rounded-3xl hover:bg-slate-100"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRest(filteredList);
          }}
        >
          Top Rated
        </button>
        <div className="m-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
          <div className=" w-[250px] mx-auto my-4 shadow-md  rounded-xl">
            <div className="w-[250px] h-[170px] bg-gray-100  rounded-t-xl"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[40%] bg-gray-100"></div>
            <div className="p-4 m-4 w-[60%] bg-gray-100"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shimmer;
