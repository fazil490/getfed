import MenuList from "./MenuList";

const MenuCategory = ({ data, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="my-4 py-4 px-2 text-gray-700 shadow-md  cursor-pointer">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-medium text-lg">
          {data.title} ({data?.itemCards.length})
        </span>
        <span>▼</span>
      </div>

      {showItem && <MenuList items={data.itemCards} />}
    </div>
  );
};

export default MenuCategory;
