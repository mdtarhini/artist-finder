import Astronaut from "./musicAstronaut.png";

const Empty = () => {
  return (
    <div className="flex-grow w-full">
      <div className="w-96 max-w-full">
        <img src={Astronaut} className="object-fit w-full" />
      </div>
    </div>
  );
};

export default Empty;
