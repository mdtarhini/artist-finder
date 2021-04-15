import Layout from "../Common/Layout";
import Heading from "../Common/Heading";
const Album = ({
  imgSRC = "https://assets.fanart.tv/fanart/music/5441c29d-3602-4898-b1a1-b77fa23b8e50/artistthumb/bowie-david-5393d07368e5c.jpg",
}) => {
  const RenderHeader = () => {
    return (
      <div className="flex flex-col items-center space-y-4 w-full">
        <div className="flex flex-col items-center space-y-1">
          <Heading level={1} text="Yes why not" />
          <p className="font-semibold">2012-02-03</p>
        </div>
        <img
          className=" h-full xl:h-96 object-contain rounded-2xl"
          src={imgSRC}
        />
      </div>
    );
  };

  return (
    <Layout>
      <div className="w-full flex flex-col space-y-10">{RenderHeader()}</div>
    </Layout>
  );
};
export default Album;
