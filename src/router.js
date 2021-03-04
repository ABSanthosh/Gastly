import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import * as views from "./views";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:id" component={views.Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
