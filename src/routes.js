import Home from './pages/home';
import Login from './pages/login';
import StatusPermohonan from './pages/statuspermohonan';
import StatusPermohonanPaspor from './pages/statuspermohonan/statuspermohonanpaspor';

const routes = [
  {
    path: '/',
    page: Home,
  },
  {
    path: '/login',
    page: Login,
  },
  {
    path: '/statusPermohonan',
    page: StatusPermohonan,
  },
  {
    path: '/statusPermohonan/paspor',
    page: StatusPermohonanPaspor,
  },
];

export default routes;
