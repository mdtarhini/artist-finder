import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import { ARTIST_PATH } from "../../routes/paths";
const AlbumCard = ({ date, artistMBID, mbid, trackCount, format, title }) => {
  return (
    <li className="group w-full rounded-2xl overflow-hidden bg-gray-700 text-white flex flex-col justify-between cursor-pointer transform-opacity">
      <Link to={`${ARTIST_PATH}/${artistMBID}/${mbid}`}>
        <div className="w-full h-20 flex flex-col justify-between py-1 px-3">
          <h3 className="font-semibold group-hover:text-green-swap">{title}</h3>
          {date && (
            <div className="flex space-x-1 items-center font-medium text-sm">
              <AiOutlineCalendar />
              <span>{date}</span>
            </div>
          )}
        </div>
        <div className="flex w-full h-8 items-center justify-between bg-gray-800  py-2 px-3 font-semibold text-sm">
          <span>{format}</span>
          <span>{trackCount} tracks</span>
        </div>
      </Link>
    </li>
  );
};
export default AlbumCard;
