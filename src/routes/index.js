import { Switch, Route, BrowserRouter } from "react-router-dom";

//components
import Home from "../components/Home";
import Artist from "../components/Artist";
import Album from "../components/Album";
import NotFound from "../components/NotFound";
import Sidebar from "../components/Sidebar";

//path names (only the origin without the params)
import { HOME_PATH, ARTIST_PATH } from "./paths";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="" component={Sidebar} />
      <Switch>
        <Route path={HOME_PATH} exact component={Home} />
        <Route path={`${ARTIST_PATH}/:artistMBID`} exact component={Artist} />
        <Route
          path={`${ARTIST_PATH}/:artistMBID/:albumMBID`}
          exact
          component={Album}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
