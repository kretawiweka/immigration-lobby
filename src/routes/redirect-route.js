import { Redirect, Route } from 'react-router-dom';
import { checkAuth } from '../utils/auth';

const NotAuthRedirect = ({ ...props }) => {
  return checkAuth() ? <Route {...props} /> : <Redirect to="/login" />;
};

const AuthRedirect = ({ ...props }) => {
  return !checkAuth() ? <Route {...props} /> : <Redirect to="/" />;
};

export { NotAuthRedirect, AuthRedirect };
