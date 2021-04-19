import { useState, useEffect, useRef } from "react";

/*
useMenuToggler
@Description: Return a boolean state and a ref for the outer div of a menu pop-up. It takes care of setting event listeners for bodyclicks to close the menu
@Usecase: For dropdowns, selects, and small screen menus
@parameters: none
*/
export const useMenuToggler = () => {
  const menuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((prevState) => !prevState);
  };
  const hide = () => {
    setIsVisible(false);
  };
  const show = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const bodyClickEvent = (e) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      window.addEventListener("click", bodyClickEvent);
    }

    return () => {
      window.removeEventListener("click", bodyClickEvent);
    };
  }, [isVisible, menuRef]);

  return [isVisible, toggle, show, hide, menuRef];
};

/*
useKeyPress
@Description: Return a boolean state reflecting whether a key is clicked or not
@Usecase: For keyboard control
@parameters: The target key (example 'Enter' for listening to the enter key)
*/
export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(e) {
    if (e.key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};
