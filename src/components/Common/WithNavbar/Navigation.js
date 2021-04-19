//react-router
import { Link, withRouter } from "react-router-dom";
import { HOME_PATH, ARTIST_PATH } from "../../../routes/paths";

//apollo stuff
import { sidebarExpandedVar } from "../../../Apollo/cache";
//icons
import { BiAlbum, BiHome, BiUser } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navigation = ({ match }) => {
  /*
  Strategy: ALways show the three icons but change their intercativity as a function of the current path. A link is only accessible if it comes before the current path
  */
  let navItems = [
    {
      label: "Home",
      icon: <BiHome />,
      to: HOME_PATH,
      title: "Back home",
      activeOn: "/",
    },
    {
      label: "Artist",
      icon: <BiUser />,
      to: `${ARTIST_PATH}/${match.params.artistMBID}`,
      activeOn: "/artist/:artistMBID",
      title: "Back to artist page",
    },
    {
      label: "Album",
      icon: <BiAlbum />,
      to: `${ARTIST_PATH}/${match.params.artistMBID}/${match.params.albumMBID}`,
      activeOn: "/artist/:artistMBID/:albumMBID",
    },
  ];
  const currentActive = navItems.findIndex(
    (item) => match.path === item.activeOn
  );
  return (
    <nav>
      <ul className="flex items-center md:space-x-1">
        {navItems.map((item, index) => {
          const isActive = currentActive === index;
          const isDisable = currentActive <= index;
          return (
            <li
              key={item.label}
              className={`flex items-center md:space-x-1  
              ${isDisable ? "text-gray-700" : "text-gray-300"}`}
            >
              <div className="relative text-2xl font-semibold">
                {currentActive > index ? (
                  <Link
                    title={item.title}
                    to={item.to}
                    className="hover:text-green-swap"
                    onClick={() => sidebarExpandedVar(false)}
                  >
                    {item.icon}
                  </Link>
                ) : (
                  <span>{item.icon}</span>
                )}

                {isActive && (
                  <div className="absolute -bottom-2 w-full h-0.5 bg-gray-700"></div>
                )}
              </div>

              {index !== navItems.length - 1 && (
                <span className="text-xl">
                  <MdKeyboardArrowRight />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default withRouter(Navigation);
