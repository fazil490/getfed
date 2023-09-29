const LogIn = () => {
  return (
    <div className="w-[20%] mx-auto mt-24 p-8 shadow-md rounded-md bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        <span className="text-green-600">LOG</span>
        <span className="text-red-500">IN</span>
      </h1>
      <form>
        <label className="block">Email</label>
        <input
          type="email"
          className="text-sm w-[100%] bg-gray-100 text-green-600 border-b-2 border-green-600 outline-none mb-4"
        ></input>
        <label className="block">Password</label>
        <input
          type="password"
          className="text-sm w-[100%] bg-gray-100 text-green-600 border-b-2 border-green-600 outline-none mb-4"
        ></input>
        <button className="block mt-4 w-[60%] mx-auto p-2 text-white bg-red-500 hover:bg-green-600 shadow-md rounded-xl ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
