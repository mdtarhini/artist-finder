import React, { useState, useEffect } from "react";

import Toast from "./Toast";

export const useToast = () => {
  const [isVisible, showToast] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(() => {
        showToast(false);
      }, 1200);
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
