import Home from './pages/home';
import Login from './pages/login';
import ServiceInformation from './pages/service-information';
import ApplicationStatus from './pages/application-status';
import ApplicationStatusPassport from './pages/application-status/passport';

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
    path: '/informasi-layanan',
    page: ServiceInformation,
  },
  {
    path: '/status-permohonan',
    page: ApplicationStatus,
  },
  {
    path: '/status-permohonan/paspor',
    page: ApplicationStatusPassport,
  },
];

export default routes;
