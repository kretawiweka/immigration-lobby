import Home from './pages/home';
import Login from './pages/login';
/** /informasi layanan */
import ServiceInformation from './pages/service-information';
/** /status-permohonan */
import ApplicationStatus from './pages/application-status';
import ApplicationStatusPassport from './pages/application-status/passport';
import ApplicationStatusIzinTinggal from './pages/application-status/izintinggal';
/** /laporan */
import Report from './pages/report';
/** /kelola-informasi-layanan */
import ManageServiceInformation from './pages/manage-service-information';
/** /online-chat */
import ChatRoomList from './pages/online-chat/chatroomlist';
import ChatRoom from './pages/online-chat/chatroom';
import StartChatRoom from './pages/online-chat/startchatroom';
import StartChatRoomAlt from './pages/online-chat/startchatroomalt';
import ChatRoomOver from './pages/online-chat/chatroomover';

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
    path: '/status-permohonan/izin-tinggal',
    page: ApplicationStatusIzinTinggal,
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
];

export default routes;
