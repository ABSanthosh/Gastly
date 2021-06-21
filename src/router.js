import * as views from "./views";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function Router() {
  const randomPokemon = Math.floor(Math.random() * 898 + 1);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:id(\d+)"  component={views.Home} />
        <Redirect from="/" to={"/" + String(randomPokemon)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
