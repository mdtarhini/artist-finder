import { FaCompactDisc } from "react-icons/fa";
const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="w-full py-40 flex items-center justify-center">
      <div className="text-xl md:text-2xl lg:text-3xl flex space-x-2 items-center">
        <FaCompactDisc className="animate-spin text-green-swap" />
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Loader;
