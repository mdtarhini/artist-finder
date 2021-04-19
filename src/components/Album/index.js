//apollo stuff
import { useQuery } from "@apollo/client";
import { ALBUM_DETAILS_QUERY } from "../../Apollo/queries";

//sub-components
import Alert from "../Common/Alert";
import Heading from "../Common/Heading";
import Loader from "../Common/Loader";
import TracksTable from "./TracksTable";
import WithNavbar from "../Common/WithNavbar";

const Album = ({ match }) => {
  const { loading, error, data } = useQuery(ALBUM_DETAILS_QUERY, {
    variables: { albumMBID: match.params.albumMBID },
  });

  const RenderHeader = () => {
    const { title, date, coverArtArchive } = data?.lookup?.release;
    const imgUrl = coverArtArchive?.front;

    return (
      <div className="flex flex-col space-y-4 w-full">
        <div className="flex flex-col space-y-1">
          <Heading level={1} text={title} />
          <p className="font-semibold text-sm">{date}</p>
        </div>
        {imgUrl && (
          <div className="overflow-hidden">
            <img
              className=" h-full max-h-96 object-contain rounded-2xl"
              src={imgUrl}
              alt={`The front cover for ${title}`}
            />
          </div>
        )}
      </div>
    );
  };

  const RenderTracks = () => {
    const { media } = data?.lookup?.release;
    return (
      <div className="flex flex-col space-y-3">
        <Heading level={2} text="Tracklist" />

        {media.map((item, index) => {
          return (
            <TracksTable
              key={item.tracks[0].mbid}
              tracks={item.tracks}
              title={item.title || `${item.format || "List"} ${index + 1}`}
            />
          );
        })}
      </div>
    );
  };

  //3 possible scenarios for conditional rendering depending on the data
  const RenderLoading = () => {
    return (
      <div>
        <div className="w-full">
          <Loader />
        </div>
      </div>
    );
  };
  const RenderError = () => {
    return (
      <div>
        <Alert
          message="There was a problem fetching the necessary data"
          type="error"
        />
      </div>
    );
  };
  const RenderMainContent = () => {
    return (
      <div className="w-full flex flex-col space-y-10">
        {RenderHeader()}
        {RenderTracks()}
      </div>
    );
  };
  const ConditionalRendering = () => {
    if (error) return RenderError();
    if (loading) return RenderLoading();
    return RenderMainContent();
  };
  return (
    <WithNavbar>
      <div className="w-full flex flex-col space-y-10">
        {ConditionalRendering()}
      </div>
    </WithNavbar>
  );
};
export default Album;
