import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';
import { PrivateRoute, PublicRoute } from './routes/redirect-route';

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
      {publicRoutes.map((item, index) => (
        <PublicRoute key={index} path={item.path} component={item.page} exact />
      ))}
    </Switch>
  </Router>
);

export default App;
