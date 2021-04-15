import { HOME_PATH, ARTIST_PATH } from "../../../routes/paths";

import { BiAlbum, BiHome, BiUser } from "react-icons/bi";
import { Link, withRouter } from "react-router-dom";

const Navigation = ({ match }) => {
  let navItems = [];
  if (match.path.includes("/artist/:id")) {
    navItems.push({
      label: "Home",
      icon: <BiHome />,
      to: HOME_PATH,
      title: "Back home",
    });
    navItems.push({
      label: "Artist",
      icon: <BiUser />,
      to: `${ARTIST_PATH}/3`,
    });
  }
  if (match.path.includes("/artist/:id/:albumId")) {
    navItems.push({
      label: "Album",
      icon: <BiAlbum />,
      to: `${ARTIST_PATH}/3/4`,
    });
  }
  if (navItems.length === 0) {
    return null;
  }
  return (
    <nav>
      <ul className="flex space-x-1 items-center">
        {navItems.map((item, index) => {
          return (
            <li
              key={item.label}
              className={`
                 flex space-x-1 items-center`}
            >
              <Link
                title="test"
                to={item.to}
                className={`text-2xl font-semibold hover:text-green-swap
                  ${index === navItems.length - 1 ? "text-green-swap" : ""}`}
              >
                {item.icon}
              </Link>
              {index !== navItems.length - 1 && <span>/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default withRouter(Navigation);
