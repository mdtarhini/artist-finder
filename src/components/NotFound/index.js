//react-router
import { Link } from "react-router-dom";
import { HOME_PATH } from "../../routes/paths";

//sub-components
import Heading from "../Common/Heading";

//The image
import AstronautMusician from "./musicAstronaut.png";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-900 p-4 ">
      <main className="flex-grow flex flex-col space-y-4 md:space-y-8  items-center justify-center">
        <Heading level={1} text="Oops !" />
        <img
          src={AstronautMusician}
          alt="An astronaut listening to music"
          className="w-full max-w-xs object-contain"
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

      {/* add attribution for the image  */}
      <footer className="mt-auto">
        <a
          href="https://www.freepik.com/vectors/logo"
          className="text-white text-xs"
        >
          Logo vector created by catalyststuff - www.freepik.com
        </a>
      </footer>
    </div>
  );
};

export default NotFound;
