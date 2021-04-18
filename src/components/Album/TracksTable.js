import { formatSeconds } from "../../helpers";
import Heading from "../Common/Heading";
const TracksTable = ({ title, tracks }) => {
  if (!tracks) return null;
  return (
    <div className="flex flex-col">
      <Heading level={3} text={title} />

      <div className="overflow-x-auto  text:xs lg:text-sm">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-2 border-gray-500 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800 text-gray-100 text-xs text-left lg:text-sm uppercase tracking-wider font-medium ">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    Position
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Title
                  </th>
                  <th scope="col" className="px-2 py-2 text-right">
                    Length
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-700 divide-y divide-gray-200 text-white text-sm">
                {tracks.map((track) => {
                  return (
                    <tr key={track.mbid}>
                      <td className="px-2 py-2.5 whitespace-nowrap">
                        {track.position}
                      </td>
                      <td className="px-2 py-2.5 whitespace-nowrap">
                        {track.title}
                      </td>

                      <td className="px-2 py-2.5 whitespace-nowrap text-right">
                        {formatSeconds(track.length / 1000)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TracksTable;
