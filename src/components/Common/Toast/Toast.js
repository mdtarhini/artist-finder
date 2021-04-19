//react
import React from "react";
import ReactDOM from "react-dom";

//icons
import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineInfo,
  AiOutlineWarning,
} from "react-icons/ai";

//option configurations
const optionPerType = {
  success: { icon: <AiOutlineCheck />, bg: "bg-green-swap " },
  warning: { icon: <AiOutlineWarning />, bg: "bg-yellow-500 " },
  info: { icon: <AiOutlineInfo />, bg: "bg-blue-500 " },
  error: { icon: <AiOutlineClose />, bg: "bg-red-500 " },
};

const Toast = ({ message = "", type = "success" }) => {
  const renderToast = () => {
    if (!optionPerType[type]) {
      return null;
    }
    return (
      <div
        className={`fixed bottom-10 left-2 z-10 flex items-center space-x-1 w-60 p-2 rounded-sm overflow-hidden shadow-md text-gray-50 ${optionPerType[type].bg}`}
      >
        <span className="flex-shrink-0 text-lg font-bold">
          {optionPerType[type].icon}
        </span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    );
  };

  const domEl = document.getElementById("toast-root");
  if (!domEl) return null;
  return ReactDOM.createPortal(<div>{renderToast()}</div>, domEl);
};

export default Toast;

/*
Note: This is a very basic toast with missing features such animation; dismiss button and it only shows one toast at a time.
*/
