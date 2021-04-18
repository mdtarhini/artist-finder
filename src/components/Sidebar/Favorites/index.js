import { GiMicrophone } from "react-icons/gi";
import { useReactiveVar } from "@apollo/client";
import { favoritesVar } from "../../../cache";
import { HiUserGroup, HiUser } from "react-icons/hi";

import Category from "./Category";
const Favorites = () => {
  const favorites = useReactiveVar(favoritesVar);

  const favoritesCategories = Object.keys(favorites).reduce(
    (acc, currentKey) => {
      if (favorites[currentKey].type === "Person") {
        acc["persons"][currentKey] = favorites[currentKey];
      } else if (favorites[currentKey].type === "Group") {
        acc["groups"][currentKey] = favorites[currentKey];
      } else {
        acc["others"][currentKey] = favorites[currentKey];
      }
      return acc;
    },
    { persons: {}, groups: {}, others: {} }
  );

  return (
    <div className="pb-24">
      <div className="flex flex-col overflow-y-auto">
        <Category
          items={favoritesCategories["persons"]}
          label="Artists"
          icon={<HiUser />}
        />
        <Category
          items={favoritesCategories["groups"]}
          label="Artist Groups"
          icon={<HiUserGroup />}
        />
        <Category
          items={favoritesCategories["others"]}
          label="Others"
          icon={<GiMicrophone />}
        />
      </div>
    </div>
  );
};
export default Favorites;
