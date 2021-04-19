//react-router-dom
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

//components
import Album from "../components/Album";
import Artist from "../components/Artist";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Sidebar from "../components/Sidebar";

//path names (only the origin without the params)
import { HOME_PATH, ARTIST_PATH, NOT_FOUND_PATH } from "./paths";

const ValidRoutes = () => {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route path={HOME_PATH} exact component={Home} />
        <Route path={`${ARTIST_PATH}/:artistMBID`} exact component={Artist} />
        <Route
          path={`${ARTIST_PATH}/:artistMBID/:albumMBID`}
          exact
          component={Album}
        />
        <Redirect to={NOT_FOUND_PATH} />
      </Switch>
    </div>
  );
};
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={NOT_FOUND_PATH} exact component={NotFound} />
        <Route path={HOME_PATH} component={ValidRoutes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

/*
Notes:
The two switches are added so that the 404 page rendered without the sidebar. for a given url, if no match was to be found in the ValidRoutes switch, the redirect to /404 will be called
*/
