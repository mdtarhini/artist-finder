import { BsSearch, BsMusicNote } from "react-icons/bs";
const Intro = () => {
  return (
    <div className="flex items-center justify-center py-20 md:py-48 w-full text-9xl text-gray-200 ">
      <div className="relative">
        <BsSearch className="" />
        <span className="absolute top-5 left-5 text-6xl text-green-swap animate-pulse">
          <BsMusicNote />
        </span>
      </div>
    </div>
  );
};
export default Intro;
