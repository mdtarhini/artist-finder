//icons
import { FaCompactDisc } from "react-icons/fa";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="w-full flex items-center justify-center py-40">
      <div className="flex space-x-2 items-center text-xl md:text-2xl lg:text-3xl">
        <FaCompactDisc className="animate-spin text-green-swap" />
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Loader;
