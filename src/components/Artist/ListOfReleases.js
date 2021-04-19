//sub-components
import AlbumCard from "./AlbumCard";

const ListOfReleases = ({ releases, artistMBID }) => {
  return (
    <ul className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 place-content-between">
      {releases.map((release) => {
        const { date, mbid, media, title } = release.node;
        const { trackCount, format } = media[0];
        return (
          <AlbumCard
            key={mbid}
            mbid={mbid}
            artistMBID={artistMBID}
            title={title}
            trackCount={trackCount}
            format={format}
            date={date}
          />
        );
      })}
    </ul>
  );
};
export default ListOfReleases;
