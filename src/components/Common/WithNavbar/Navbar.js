import Logo from "./logo_swapart.svg";
import Navigation from "./Navigation";
import { HOME_PATH } from "../../../routes/paths";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex md:space-x-28 lg:space-x-44 h-full w-full p-2 items-center justify-between md:justify-start">
      <Link
        to={HOME_PATH}
        className="h-2/3 focus:outline-none hover:opacity-80"
      >
        <img src={Logo} className="h-full" alt="Swapart Logo" />
      </Link>
      <Navigation />
    </div>
  );
};
export default Navbar;
