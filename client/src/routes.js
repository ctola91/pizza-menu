import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Pizza from "./views/Pizza";
import Error404 from "./views/Error/404";
import Toppings from "./views/Toppings";
import PizzaDetail from './views/PizzaDetail';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Pizza} exact />
      <Route path="/toppings" component={Toppings} exact />
      <Route path="/pizzas/:id" component={PizzaDetail} exact />
      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
