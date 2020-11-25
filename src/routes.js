import Home from './pages/home';
import Login from './pages/login';
/** /informasi layanan */
import ServiceInformation from './pages/service-information';
/** /status-permohonan */
import ApplicationStatus from './pages/application-status';
import ApplicationStatusPassport from './pages/application-status/passport';
/** /laporan */
import Report from './pages/report';
/** /kelola-informasi-layanan */
import ManageServiceInformation from './pages/manage-service-information';

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
    path: '/kelola-informasi-layanan',
    page: ManageServiceInformation,
  },
  {
    path: '/status-permohonan',
    page: ApplicationStatus,
  },
  {
    path: '/status-permohonan/paspor',
    page: ApplicationStatusPassport,
  },
  {
    path: '/laporan',
    page: Report,
  },
];

export default routes;
