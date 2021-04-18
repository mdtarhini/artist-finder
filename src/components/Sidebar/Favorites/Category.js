import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import { ARTIST_PATH } from "../../../routes/paths";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
const Category = ({ label, icon, items, match }) => {
  const [expanded, setExpanded] = useState(false);
  const renderList = () => {
    if (Object.keys(items).length) {
      return (
        <ul className="ml-8 flex flex-col space-y-3 py-2 overflow-y-auto">
          {Object.keys(items).map((itemKey) => {
            const item = items[itemKey];
            return (
              <li
                key={itemKey}
                className="p-1 rounded-md cursor-pointer  hover:text-green-swap"
              >
                <Link to={`${ARTIST_PATH}/${itemKey}`}>
                  <span> {item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <div className="p-3 text-sm font-medium text-gray-400 flex space-x-2 items-center">
        <AiOutlineStop />
        <span>no favorite {label} yet</span>
      </div>
    );
  };
  return (
    <div className="">
      <button
        className="w-full flex items-center justify-between p-3 space-x-1  font-medium bg-gray-800 focus:outline-none hover:bg-opacity-80 hover:text-green-swap"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </div>
        {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      {expanded && renderList()}
    </div>
  );
};

export default withRouter(Category);
