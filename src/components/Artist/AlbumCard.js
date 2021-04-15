import { Link } from "react-router-dom";
import { ARTIST_PATH } from "../../routes/paths";
const AlbumCard = () => {
  return (
    <li className="group w-full rounded-2xl overflow-hidden bg-gray-700 text-white flex flex-col justify-between cursor-pointer transform-opacity">
      <Link to={`${ARTIST_PATH}/3/4`}>
        <div className="w-full h-20 flex flex-col items-center justify-center py-1 px-2">
          <h3 className="font-semibold text-lg group-hover:text-green-swap">
            thi is ithe last one of you and I am alone here
          </h3>
        </div>
        <div className="flex w-full h-8 items-center justify-between bg-gray-800  p-2 font-semibold text-sm">
          <span>2020-12-24</span>
          <span>11 tracks</span>
        </div>
      </Link>
    </li>
  );
};
export default AlbumCard;
