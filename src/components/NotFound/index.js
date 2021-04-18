import { Link } from "react-router-dom";
import Heading from "../Common/Heading";
import AstronautMusician from "./musicAstronaut.png";
import { HOME_PATH } from "../../routes/paths";
const NotFound = () => {
  return (
    <main className="flex flex-col space-y-4 md:space-y-8 h-full w-screen items-center justify-center bg-gray-900 p-4">
      <Heading level={1} text="Oops !" />
      <img
        src={AstronautMusician}
        alt="An astronaut listening to music"
        className="w-full max-w-sm object-contain"
      />
      <p className="text-xl text-white text-center">
        This is clearly not the page you’re looking for. <br />
        Click this{" "}
        <Link to={HOME_PATH} className="underline">
          link
        </Link>{" "}
        to visit the home page.
      </p>
    </main>
  );
};

export default NotFound;
