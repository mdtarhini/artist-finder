//apollo stuff
import { sidebarExpandedVar } from "../../Apollo/cache";
import { useReactiveVar } from "@apollo/client";

//sub-components
import Favorites from "./Favorites";

const Sidebar = () => {
  const sidebarExpanded = useReactiveVar(sidebarExpandedVar);
  return (
    <aside
      className={`fixed z-10 left-0 top-0 h-full pt-16 md:w-60 lg:w-80 overflow-auto bg-gray-900 text-white md:border-r border-gray-800 
${sidebarExpanded ? "w-full" : "hidden md:block"}`}
    >
      <Favorites />
    </aside>
  );
};
export default Sidebar;

/*
Notes:
-pt-16 is added so the sidebar is not hidden by the navbar
-sidebarExpanded is state variable (apollo-client) and will be toggled in the navbar component
*/
