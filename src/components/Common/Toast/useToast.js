//react
import React, { useState, useEffect } from "react";

//components
import Toast from "./Toast";

//others
import { TOAST_TIMEOUT } from "../../../constants-and-settings";

export const useToast = () => {
  const [isVisible, showToast] = useState(false);

  //Goal: hide the toast after 1.2 seconds
  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(() => {
        showToast(false);
      }, TOAST_TIMEOUT);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const RenderToast = ({ message = "", type = "success" }) => (
    <React.Fragment>
      {isVisible && <Toast message={message} type={type} />}
    </React.Fragment>
  );

  return [RenderToast, showToast];
};
