import AlbumCard from "./AlbumCard";
const ListOfReleases = () => {
  return (
    <ul className="w-full grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 place-content-between">
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </ul>
  );
};
export default ListOfReleases;
