//react-router
import { Link } from "react-router-dom";
import { ARTIST_PATH } from "../../routes/paths";

//icons
import { AiOutlineCalendar } from "react-icons/ai";

const AlbumCard = ({ date, artistMBID, mbid, trackCount, format, title }) => {
  return (
    <li className="group w-full flex flex-col justify-between rounded-2xl overflow-hidden bg-gray-700 text-white cursor-pointer transform-opacity">
      <Link to={`${ARTIST_PATH}/${artistMBID}/${mbid}`}>
        {/* Card body */}
        <div className="w-full h-20 flex flex-col justify-between py-1 px-3">
          <h3 className="font-semibold group-hover:text-green-swap">{title}</h3>
          {date && (
            <div className="flex items-center space-x-1 font-medium text-sm">
              <AiOutlineCalendar />
              <span>{date}</span>
            </div>
          )}
        </div>

        {/* Card footer */}
        <div className="w-full h-8 flex items-center justify-between py-2 px-3 bg-gray-800 font-semibold text-sm">
          <span>{format}</span>
          <span>
            {trackCount} track{trackCount === 1 ? "" : "s"}
          </span>
        </div>
      </Link>
    </li>
  );
};
export default AlbumCard;
