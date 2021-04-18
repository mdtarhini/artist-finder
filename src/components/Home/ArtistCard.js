/*

*/
import { GiMicrophone } from "react-icons/gi";
import { HiUserGroup, HiUser } from "react-icons/hi";
import { ARTIST_PATH } from "../../routes/paths";
import { Link } from "react-router-dom";
import AddToFavorites from "../Common/AddToFavorites";

const ArtistCard = ({ artist }) => {
  const { mbid, name, type, disambiguation } = artist;
  //decides which thumbnail (ideally the wiki-image or the fan art but the api request is slow when requestiog them)
  const thumbnailIcon =
    type === "Group" ? (
      <HiUserGroup />
    ) : type === "Person" ? (
      <HiUser />
    ) : (
      <GiMicrophone />
    );

  return (
    <Link
      to={`${ARTIST_PATH}/${mbid}`}
      className="group w-full rounded-2xl overflow-hidden bg-gray-700 text-white flex flex-col justify-between cursor-pointer transform-opacity"
    >
      <div className="w-full h-28 flex space-x-2 justify-between p-2">
        <div className="flex flex-col justify-end">
          <div className="flex-grow flex flex-col space-y-1">
            <p className="text-lg font-semibold group-hover:text-green-swap line-clamp-2">
              {name}
            </p>
            <span className="text-sm line-clamp-1">{disambiguation}</span>
          </div>

          <div className="mt-auto flex items-center space-x-1 text-sm">
            <div className=" rounded-full bg-gray-300 p-0.5 text-gray-700">
              {thumbnailIcon}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full justify-between flex-shrink-0">
          <AddToFavorites artistMBID={mbid} name={name} type={type} />
        </div>
      </div>
    </Link>
  );
};
export default ArtistCard;
