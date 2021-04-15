import { FaUser, FaUsers, FaQuestion } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
const favorites = [
  { name: "allah", type: "Person", id: "allah" },
  { name: "allah", type: "none", id: "allah2" },
  { name: "allah", type: "Group", id: "allah3" },
  { name: "allah", type: "Person", id: "allah4" },
  { name: "allah", type: "Group", id: "allah5" },
];

const Empty = () => {
  return (
    <div className="flex flex-col space-y-3 text-gray-300">
      <div className="flex space-x-4 items-center">
        <AiOutlineStop />
        <span>No Favorites yet</span>
      </div>
    </div>
  );
};
const Favorites = () => {
  if (favorites.length === 0) {
    return Empty();
  }
  return (
    <ul className="flex flex-col space-y-5 overflow-y-auto">
      {favorites.map((item) => {
        return (
          <li
            key={item.id}
            className="flex space-x-4 items-center p-3 rounded-md cursor-pointer hover:bg-gray-700 hover:text-green-swap"
          >
            <span className="text-2xl">
              {item.type === "Person" ? (
                <FaUser />
              ) : item.type === "Group" ? (
                <FaUsers />
              ) : (
                <FaQuestion />
              )}
            </span>

            <span> {item.name}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Favorites;
