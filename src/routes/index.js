import { Switch, Route, Router } from "react-router-dom";
import history from "../history";

//components
import Home from "../components/Home";
import Artist from "../components/Artist";
import Album from "../components/Album";
import NotFound from "../components/NotFound";
//path names (only the origin without the params)
import { HOME_PATH, ARTIST_PATH } from "./paths";

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path={HOME_PATH} exact component={Home} />
          <Route path={`${ARTIST_PATH}/:id`} exact component={Artist} />
          <Route path={`${ARTIST_PATH}/:id/:albumId`} exact component={Album} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
