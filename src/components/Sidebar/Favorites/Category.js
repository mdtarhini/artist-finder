//react
import { useState } from "react";

//react-router
import { Link } from "react-router-dom";
import { ARTIST_PATH } from "../../../routes/paths";

//apollo stuff
import { sidebarExpandedVar } from "../../../Apollo/cache";

//icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";

const Category = ({ label, icon, items }) => {
  const [expanded, setExpanded] = useState(false);

  // This will also take care of the non-items case
  const renderList = () => {
    if (Object.keys(items).length) {
      return (
        <ul className="flex flex-col space-y-3 ml-8 py-2">
          {Object.keys(items).map((itemKey) => {
            const item = items[itemKey];
            return (
              <li
                key={itemKey}
                className="rounded-md p-1 hover:text-green-swap cursor-pointer"
                onClick={() => sidebarExpandedVar(false)}
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
    <>
      <button
        className="w-full flex items-center justify-between space-x-1 p-3 font-medium bg-gray-800 focus:outline-none hover:bg-opacity-80 hover:text-green-swap"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </div>
        {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
      {expanded && renderList()}
    </>
  );
};

export default Category;

/*
Notes:
The <> empty tag is a shorthand for a react fragment to group the list and the button.
Todo: Keep accessibility in mind
*/
