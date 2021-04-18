import ArtistCard from "./ArtistCard";
const ListOfResults = ({ artists }) => {
  return (
    <div className="w-full grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 place-content-between pt-10">
      {artists.map((artist) => {
        return <ArtistCard key={artist.mbid} artist={artist} />;
      })}
    </div>
  );
};
export default ListOfResults;
