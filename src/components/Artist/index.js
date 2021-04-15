import Layout from "../Common/Layout";
import Heading from "../Common/Heading";
import RatingDisk from "../Common/RatingDisk";
import AddToFavorites from "./AddToFavorites";
import ArtistCountryFlag from "./ArtistCountryFlag";
import ListOfReleases from "./ListOfReleases";
const Artist = ({
  imgSRC = "https://assets.fanart.tv/fanart/music/5441c29d-3602-4898-b1a1-b77fa23b8e50/artistthumb/bowie-david-5393d07368e5c.jpg",
}) => {
  const RenderHeader = () => {
    return (
      <div className="flex flex-col items-center space-y-4 xl:flex-row xl:space-x-6 xl:space-y-0 w-full  xl:items-end">
        <img
          className=" h-full xl:h-96 object-contain rounded-2xl"
          src={imgSRC}
        />
        <div className="flex flex-col space-y-3">
          <div>
            <Heading level={1} text="Antonio welli" />

            <div className="flex space-x-2 items-center">
              <ArtistCountryFlag countryCode="FR" />
              <Heading level={5} text="2012-2002" />
            </div>
          </div>

          <p className="md:text-lg leading-loose line-clamp-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            animi. Debitis quis, alias accusamus fuga nulla cumque accusantium
            laudantium repudiandae ab nisi iste atque sed mollitia molestiae eum
            omnis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam beatae sit aperiam odio velit laudantium tempore minima
            ad sint dolores nemo, officiis amet sequi doloribus, recusandae
            ullam eum. Autem, dolore? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Labore eius neque, in deserunt atque, deleniti
            voluptatum doloribus numquam cum explicabo eaque tempora! Tempora
            illo ex eveniet a, minus aliquid dicta.
          </p>
          <div className="flex space-x-3 items-center">
            <RatingDisk rating={[3, 5]} />
            <AddToFavorites isFavorite={true} />
          </div>
        </div>
      </div>
    );
  };
  const RenderReleases = () => {
    return (
      <div className="flex flex-col space-y-3">
        <Heading level={2} text="Featured Releases" />
        <ListOfReleases />
      </div>
    );
  };
  return (
    <Layout>
      <div className="w-full flex flex-col space-y-10">
        {RenderHeader()}
        {RenderReleases()}
      </div>
    </Layout>
  );
};
export default Artist;
