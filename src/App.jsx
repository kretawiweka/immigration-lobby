import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';
import { NotAuthRedirect, AuthRedirect } from './routes/redirect-route';

const App = () => (
  <Router>
    {publicRoutes.map((item, index) => (
      <AuthRedirect key={index} path={item.path} component={item.page} />
    ))}
    {privateRoutes.map((item, index) => (
      <NotAuthRedirect
        key={index}
        exact
        path={item.path}
        component={item.page}
      />
    ))}
  </Router>
);

export default App;
