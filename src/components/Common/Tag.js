import { AiOutlineTags } from "react-icons/ai";
const Tag = ({ text }) => {
  return (
    <div className="mr-1 mb-1 flex items-center space-x-1 px-1 py-0.5 font-medium rounded-md shadow-md bg-gray-700 text-white text-sm">
      <AiOutlineTags />
      <span>{text}</span>
    </div>
  );
};

export default Tag;
