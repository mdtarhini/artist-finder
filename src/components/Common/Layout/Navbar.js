import Button from "../Button";
import Logo from "./logo_swapart.svg";
import Navigation from "./Navigation";
import { HOME_PATH } from "../../../routes/paths";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
const Navbar = ({ sidebarVisible, toggleSidebar }) => {
  return (
    <div className="flex md:space-x-28 lg:space-x-44 h-full w-full p-2 items-center justify-between md:justify-start">
      <Link to={HOME_PATH} className="h-2/3 focus-outside">
        <img src={Logo} className="h-full" alt="Swapart Logo" />
      </Link>
      <Navigation />
      <Button
        className="md:hidden text-3xl"
        color="white"
        onClick={toggleSidebar}
        type="text"
      >
        {sidebarVisible ? <AiOutlineCloseCircle /> : <AiOutlineMenuUnfold />}
      </Button>
    </div>
  );
};
export default Navbar;
