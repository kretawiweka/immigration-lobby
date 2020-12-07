import { Redirect, Route } from 'react-router-dom';
import { checkAuth } from '../utils/auth';

const PrivateRoute = ({ ...props }) => {
  return checkAuth() ? <Route {...props} /> : <Redirect to="/login" />;
};

const PublicRoute = ({ ...props }) => {
  return !checkAuth() ? <Route {...props} /> : <Redirect to="/" />;
};

export { PrivateRoute, PublicRoute };
