import { AiFillStar } from "react-icons/ai";
import Favorites from "./Favorites";
const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-6 h-full w-full p-2 pt-10">
      <div className="flex space-x-2 items-center text-lg">
        <AiFillStar className="text-green-swap text-2xl" />
        <h2 className="font-semibold">Favorite Artists</h2>
      </div>
      <Favorites />
    </div>
  );
};
export default Sidebar;
