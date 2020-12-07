import Login from '../pages/login';
import Home from '../pages/home';
/** /informasi layanan */
import ServiceInformation from '../pages/service-information';
import ProductList from '../pages/service-information/product-list';
import ProductDetail from '../pages/service-information/product-detail';
/** /status-permohonan */
import ApplicationStatus from '../pages/application-status';
import ApplicationStatusPassport from '../pages/application-status/passport';
import ApplicationStatusIzinTinggal from '../pages/application-status/izintinggal';
/** /akun-pengguna */
import UserAccount from '../pages/user-account';
import UserAccountAdd from '../pages/user-account/add';
/** /laporan */
import Report from '../pages/report';
import FrequesntlyAsk from '../pages/report/frequently-ask';
import InformationCounter from '../pages/report/information-counter';
import OfficerPerformance from '../pages/report/officer-performance';
/** /kelola-informasi-layanan */
import ManageServiceInformation from '../pages/manage-service-information';
/** /online-chat */
import ChatRoomList from '../pages/online-chat/chatroomlist';
import ChatRoom from '../pages/online-chat/chatroom';
import StartChatRoom from '../pages/online-chat/startchatroom';
import StartChatRoomAlt from '../pages/online-chat/startchatroomalt';
import ChatRoomOver from '../pages/online-chat/chatroomover';
/** /pencarian */
import Search from '../pages/search';

const privateRoutes = [
  {
    path: '/',
    page: Home,
  },
  {
    path: '/informasi-layanan',
    page: ServiceInformation,
  },
  {
    path: '/informasi-layanan/:id_service',
    page: ProductList,
  },
  {
    path: '/informasi-layanan/:id_service/:id_product',
    page: ProductDetail,
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
    path: '/status-permohonan/izin-tinggal',
    page: ApplicationStatusIzinTinggal,
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
    path: '/laporan/rekam-counter',
    page: InformationCounter,
  },
  {
    path: '/laporan/peforma-petugas',
    page: OfficerPerformance,
  },

  {
    path: '/akun-pengguna',
    page: UserAccount,
  },
  {
    path: '/akun-pengguna/tambah',
    page: UserAccountAdd,
  },
  {
    path: '/online-chat/room-list',
    page: ChatRoomList,
  },
  {
    path: '/online-chat/room',
    page: ChatRoom,
  },
  {
    path: '/online-chat/start-room',
    page: StartChatRoom,
  },
  {
    path: '/online-chat/start-room/alt',
    page: StartChatRoomAlt,
  },
  {
    path: '/online-chat/room/over',
    page: ChatRoomOver,
  },
  {
    path: '/pencarian',
    page: Search,
  },
];

const publicRoutes = [
  {
    path: '/login',
    page: Login,
  },
];

export { privateRoutes, publicRoutes };
