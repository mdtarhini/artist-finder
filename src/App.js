//router
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Routes />
      {/* The toast component will be rendered in this div via a portal */}
      <div id="toast-root"></div>
    </div>
  );
};

export default App;
