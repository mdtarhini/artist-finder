import React from "react";
import ReactDOM from "react-dom";

import {
  AiOutlineClose,
  AiOutlineCheck,
  AiOutlineInfo,
  AiOutlineWarning,
} from "react-icons/ai";
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
        className={`fixed bottom-10 left-2 z-10 w-60 rounded-sm shadow-md text-gray-50 p-2 flex items-center space-x-1 overflow-hidden ${optionPerType[type].bg}`}
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
