import Home from './pages/home';
import Login from './pages/login';
/** /informasi layanan */
import ServiceInformation from './pages/service-information';
/** /status-permohonan */
import ApplicationStatus from './pages/application-status';
import ApplicationStatusPassport from './pages/application-status/passport';
import ApplicationStatusIzinTinggal from './pages/application-status/izintinggal';
/** /akun-pengguna */
import UserAccount from './pages/user-account';
import UserAccountAdd from './pages/user-account/add';
/** /laporan */
import Report from './pages/report';
import FrequesntlyAsk from './pages/report/frequently-ask';
import InformationCounter from './pages/report/information-counter';
import OfficerPerformance from './pages/report/officer-performance';
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
  {
    path: '/laporan/informasi-sering-ditanyakan',
    page: FrequesntlyAsk,
  },
  {
    path: '/laporan/pusat-informasi',
    page: InformationCounter,
  },
  {
    path: '/laporan/peforma-petugas',
    page: OfficerPerformance,
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
  },
];

export default routes;
