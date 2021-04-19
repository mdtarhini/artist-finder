//apollo stuff
import { useReactiveVar } from "@apollo/client";
import { favoritesVar } from "../../../Apollo/cache";

//sub-components
import Category from "./Category";

//icons
import { GiMicrophone } from "react-icons/gi";
import { HiUserGroup, HiUser } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

const Favorites = () => {
  const favorites = useReactiveVar(favoritesVar);

  //Separate the favorites in three categories according to their types (items with no types will be added in the last)
  const categories = {
    Person: {
      label: "Artists",
      items: {},
      icon: <HiUser />,
    },
    Group: {
      label: "Artist Groups",
      items: {},
      icon: <HiUserGroup />,
    },
    Other: {
      label: "Others",
      items: {},
      icon: <GiMicrophone />,
    },
  };
  Object.keys(favorites).forEach((favoriteKey) => {
    const type = favorites[favoriteKey].type;
    if (categories.hasOwnProperty(type)) {
      categories[type].items[favoriteKey] = favorites[favoriteKey];
    } else {
      categories["Other"].items[favoriteKey] = favorites[favoriteKey];
    }
  });

  return (
    <div className="flex flex-col space-y-6 h-full w-full py-10">
      <div className="flex space-x-2 items-center px-2 text-lg">
        <AiFillHeart className="text-2xl text-green-swap" />
        <h2 className="font-semibold">My Favorites</h2>
      </div>
      <div className="flex flex-col">
        {Object.keys(categories).map((categoryKey) => {
          const { label, icon, items } = categories[categoryKey];

          return (
            <Category
              key={categoryKey}
              items={items}
              label={label}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
