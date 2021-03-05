import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as views from "./views";

function Router() {
  const randomPokemon = Math.floor(Math.random() * 898 + 1);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:id" component={views.Home} />
        <Redirect from="/" to={"/" + String(randomPokemon)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
