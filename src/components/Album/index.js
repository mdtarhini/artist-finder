import Loader from "../Common/Loader";
import { useQuery, gql } from "@apollo/client";
import Heading from "../Common/Heading";
import TracksTable from "./TracksTable";
import WithNavbar from "../Common/WithNavbar";
const ALBUM_DETAILS_QUERY = gql`
  query GET_ALBUM_DETAILS($albumMBID: MBID!) {
    lookup {
      release(mbid: $albumMBID) {
        id
        date
        title
        media {
          trackCount
          format
          title
          tracks {
            mbid
            title
            length
            position
          }
        }
        coverArtArchive {
          front
        }
      }
    }
  }
`;

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
        <span>Error</span>
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
