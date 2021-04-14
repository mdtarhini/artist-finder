import { useState, useEffect, useRef } from "react";

/*
useIsMonted
@Description: Return true if the component is mounted
@Usecase: Useful when a state update is required inside a useEffect
@parameters: none
*/
export const useIsMounted = () => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
};

/*
useMenuToggler
@Description: Return a boolean state and a ref for the outer div of a menu pop-up. It takes care of setting event listeners for bodyclicks to close the menu
@Usecase: For dropdowns, selects, and small screen menus
@parameters: none
*/
export const useMenuToggler = () => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const bodyClickEvent = (e) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("click", bodyClickEvent);
    }

    return () => {
      window.removeEventListener("click", bodyClickEvent);
    };
  }, [open, menuRef]);

  return [open, toggle, menuRef];
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
