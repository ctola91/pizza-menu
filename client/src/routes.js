import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Pizza from "./views/Pizza";
import Error404 from "./views/Error/404";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Pizza} exact />
      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
