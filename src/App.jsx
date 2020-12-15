import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { privateRoutes, loginRoutes, publicRoutes } from './routes';
import { PrivateRoute, LoginRoute } from './routes/redirect-route';

const App = () => (
  <Router>
    <Switch>
      {privateRoutes.map((item, index) => (
        <PrivateRoute
          key={index}
          path={item.path}
          component={item.page}
          exact
        />
      ))}
      {loginRoutes.map((item, index) => (
        <LoginRoute key={index} path={item.path} component={item.page} exact />
      ))}
      {publicRoutes.map((item, index) => (
        <Route key={index} exact path={item.path} component={item.page} />
      ))}
    </Switch>
  </Router>
);

export default App;
