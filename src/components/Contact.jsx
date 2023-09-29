const Contact = () => {
  return (
    <div className="w-[25%] mx-auto my-8">
      <h1 className="text-3xl font-bold text-center m-8">
        <span className="text-green-600">Contact </span>
        <span className="text-red-500">Us</span>
      </h1>
      <form className="flex flex-col justify-center items-center bg-gray-100 shadow-md rounded-md  p-4">
        <div>
          <label className="block">
            Name
          </label>
          <input
            type="text"
            className="p-2 my-4 border-2 text-green-600"
            placeholder="Enter your name"
          ></input>
        </div>
        <div>
          <label className="block">
            Message
          </label>
          <input
            type="text"
            className="p-2 my-4 border-2 text-green-600"
            placeholder="Enter your message . . . "
          ></input>
        </div>
        <button className="px-4 py-2 m-4 border-2 bg-red-500 hover:bg-green-600 text-white rounded-3xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
