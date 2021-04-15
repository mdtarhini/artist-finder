/*

*/
import RatingDisk from "./RatingDisk";
import { GiMicrophone } from "react-icons/gi";
import { ARTIST_PATH } from "../../routes/paths";
import { Link } from "react-router-dom";
const ArtistCard = ({
  imgSRC = "https://assets.fanart.tv/fanart/music/5441c29d-3602-4898-b1a1-b77fa23b8e50/artistthumb/bowie-david-5393d07368e5c.jpg",
}) => {
  return (
    <Link
      to={`${ARTIST_PATH}/4`}
      className="group w-full rounded-2xl overflow-hidden bg-gray-700 text-white flex flex-col justify-between cursor-pointer transform-opacity"
    >
      <div className="w-full h-32 flex items-center justify-center">
        {imgSRC ? (
          <img
            src={imgSRC}
            className=" w-full object-cover object-top h-full"
          />
        ) : (
          <GiMicrophone className="text-7xl" />
        )}

        <div className="absolute top-2 right-2">
          <RatingDisk rating={[4, 5]} />
        </div>
      </div>

      <div className="flex w-full h-10 justify-center bg-gray-800  p-1 group-hover:text-green-swap">
        <p className="text-xl font-bold">Antonio dello</p>
      </div>
    </Link>
  );
};
export default ArtistCard;
