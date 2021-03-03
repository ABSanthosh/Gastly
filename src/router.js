import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as views from './views';

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={views.Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;
  