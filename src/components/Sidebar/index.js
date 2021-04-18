import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import Favorites from "./Favorites";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../Common/Button";
const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <Button
        className="fixed z-30 top-2 right-2 text-3xl md:hidden text-white"
        onClick={toggleSidebar}
        type="text"
      >
        {sidebarVisible ? <AiOutlineCloseCircle /> : <AiOutlineMenuUnfold />}
      </Button>

      <aside
        className={`z-10 fixed top-16 left-0 h-full md:w-60 lg:w-80 overflow-auto bg-gray-900 text-white shadow-2xl md:border-r border-gray-800 
    ${sidebarVisible ? "w-full" : "hidden md:block"}`}
      >
        <div className="flex flex-col space-y-6 h-full w-full py-2 pt-10">
          <div className="flex space-x-2 items-center text-lg px-2">
            <AiFillHeart className="text-green-swap text-2xl" />
            <h2 className="font-semibold">My Favorites</h2>
          </div>
          <Favorites />
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
