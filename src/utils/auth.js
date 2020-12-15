import { setLocalStorage, getLocalStorage } from './localStorage';

const checkAuth = () => {
  if (getLocalStorage('auth') == null) return false;
  return true;
};

const setAuth = (value) => {
  setLocalStorage('auth', value);
};

const removeAuth = () => {
  localStorage.removeItem('auth');
};

const isAuthRole = (authRole) => {
  if (checkAuth()) {
    return getLocalStorage('auth').role === authRole;
  }
  return false;
};

export { checkAuth, setAuth, removeAuth, isAuthRole };
