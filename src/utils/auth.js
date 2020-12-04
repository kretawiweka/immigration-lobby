import { setLocalStorage, getLocalStorage } from './localStorage';

const checkAuth = () => {
  if (getLocalStorage('auth') == null) return false;
  return true;
};

const setAuth = (value) => {
  setLocalStorage('auth', value, {
    time: 14,
    type: 'day',
  });
};

const removeAuth = () => {
  localStorage.removeItem('auth');
};

export { checkAuth, setAuth, removeAuth };
