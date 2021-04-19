//react-router
import { HOME_PATH } from "../../../routes/paths";
import { Link } from "react-router-dom";

//apollo stuff
import { sidebarExpandedVar } from "../../../Apollo/cache";

//sub-components
import Navigation from "./Navigation";
import SidebarExpander from "./SidebarExpander";

//The svg logo
import Logo from "./logo_swapart.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:space-x-28 lg:space-x-44 h-full w-full p-2 ">
      <Link
        to={HOME_PATH}
        className="focus:outline-none transform-opacity"
        onClick={() => sidebarExpandedVar(false)}
      >
        <img src={Logo} className="w-24 md:w-28 lg:w-32" alt="Swapart Logo" />
      </Link>
      <Navigation />

      <SidebarExpander />
    </div>
  );
};
export default Navbar;
