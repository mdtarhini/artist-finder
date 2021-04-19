//icons
import {
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

const Alert = ({ type, message }) => {
  const options = {
    info: {
      className: "bg-blue-500 border-blue-400 ",
      icon: <AiOutlineInfoCircle className="text-blue-100" />,
    },
    success: {
      className: "bg-green-500 border-green-400 ",
      icon: <AiOutlineCheckCircle className="text-green-100" />,
    },
    warning: {
      className: "bg-yellow-500 border-yellow-400 ",
      icon: <AiOutlineWarning className="text-yellow-100" />,
    },
    error: {
      className: "bg-red-500 border-red-400 ",
      icon: <AiOutlineCloseCircle className="text-red-100" />,
    },
  };

  if (!options.hasOwnProperty(type)) {
    return null;
  }
  return (
    <div
      className={`w-full border p-3 md:p-5 flex items-center space-x-2 md:space-x-6 
      ${type ? options[type].className : ""}`}
    >
      <div className="flex-shrink-0 text-2xl md:text-4xl">
        {options[type].icon}
      </div>
      <p className="md:text-lg">{message}</p>
    </div>
  );
};
export default Alert;
