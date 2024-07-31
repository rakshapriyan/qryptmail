import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
import PhoneOtpForm from '../views/auth/PhoneNumber';
import AddAccount from '../layouts/header/AddAccount';
import MyProfile from '../layouts/header/MyProfile';
import Treeview from '../views/apps/treeview/TreeView';
/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

const About = Loadable(lazy(() => import('../views/About')));

/***** Apps ****/
const Chat = Loadable(lazy(() => import('../views/apps/chat/Chat')));
// const Contact = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/CalendarApp')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const ShopDetail = Loadable(lazy(() => import('../views/auth/ShopDetail')));

/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));
const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
const Maintanance = Loadable(lazy(() => import('../views/auth/Maintanance')));
const LockScreen = Loadable(lazy(() => import('../views/auth/LockScreen')));
const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));

/*****Routes******/
// ... (other imports)

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <ShopDetail /> },
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/*', element: <Navigate to="/auth/404" /> },
      { path: '/auth/registerformik', element: <RegisterFormik /> },
      { path: '/auth/loginformik', element: <LoginFormik /> },
      { path: '/auth/maintanance', element: <Maintanance /> },
      { path: '/auth/lockscreen', element: <LockScreen /> },
      { path: '/auth/recoverpwd', element: <RecoverPassword /> },
      { path: '/auth/phone', element: <PhoneOtpForm /> },
      { path: '/addaccount', element: <AddAccount /> }, 
      { path: '/myprofile', element: <MyProfile /> }, 
    ],
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/about', name: 'about', exact: true, element: <About /> },
      { path: '/apps/chat', name: 'chat', exact: true, element: <Chat /> },
      // { path: '/apps/contacts', name: 'contacts', exact: true, element: <Contact /> },
      { path: '/apps/calendar', name: 'calendar', exact: true, element: <Calendar /> },
      { path: '/apps/email', name: 'email', exact: true, element: <Email /> },
      { path: '/apps/treeview', name: 'email', exact: true, element: <Treeview /> },
    ],
  },
];

export default ThemeRoutes;
