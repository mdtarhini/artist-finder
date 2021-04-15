import Heading from "../Common/Heading";

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Heading text="Welcome." level={1} />
      <Heading
        text="Thousands of artists and artist groups to discover. Explore now!"
        level={2}
      />
    </div>
  );
};
export default WelcomeMessage;
