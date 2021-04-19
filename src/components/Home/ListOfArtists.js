//sub-components
import ArtistCard from "./ArtistCard";

const ListOfArtists = ({ artists }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 place-content-between pt-10">
      {artists.map((artist) => {
        return <ArtistCard key={artist.mbid} artist={artist} />;
      })}
    </div>
  );
};
export default ListOfArtists;
