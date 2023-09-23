const LogIn = () => {
  return (
    <div className="w-[20%] mx-auto mt-24 p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">LOGIN</h2>
      <label className="block">Username</label>
      <input
        type="text"
        className="text-sm w-[100%] text-green-600 border-b-2 border-green-600 outline-none"
      ></input>
      <button className="block mt-6 mx-auto p-2 text-white bg-green-600 shadow-md rounded-3xl hover:bg-green-500">
        Submit
      </button>
    </div>
  );
};

export default LogIn;
