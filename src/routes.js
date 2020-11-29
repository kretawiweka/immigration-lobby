import Home from './pages/home';
import Login from './pages/login';
import ServiceInformation from './pages/service-information';
import ApplicationStatus from './pages/application-status';
import ApplicationStatusPassport from './pages/application-status/passport';
import ApplicationStatusIzinTinggal from './pages/application-status/izintinggal';
import UserAccount from './pages/user-account';
import UserAccountAdd from './pages/user-account/add';

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
  {
    path: '/status-permohonan/izin-tinggal',
    page: ApplicationStatusIzinTinggal,
  },
  {
    path: '/akun-pengguna',
    page: UserAccount,
  },
  {
    path: '/akun-pengguna/tambah',
    page: UserAccountAdd,
  }
];

export default routes;
