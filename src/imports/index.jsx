import Navbar from '../layouts/Layout.jsx';
import HostNavbar, { loader as hostNavbarLoader} from '../layouts/HostNavbar.jsx';
import HostVanNavbar, {
  HostVanHeaderLoader,
} from '../layouts/HostVanNavbar.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Vans, { loader as vansLoader } from '../pages/vans/Vans.jsx';
import VanDetails, {
  loader as vanDetailsLoader,
} from '../pages/vans/VanDetails.jsx';
import Dashboard, { loader as dashboardLoader} from '../pages/host/Dashboard.jsx';
import Income from '../pages/host/Income.jsx';
import Reviews from '../pages/host/Reviews.jsx';
import HostVan, {
  loader as hostVanLoader,
} from '../pages/host/vans/HostVan.jsx';
import Details from '../pages/host/vans/vansDetails/Details.jsx';
import Photos from '../pages/host/vans/vansDetails/Photos.jsx';
import Pricing from '../pages/host/vans/vansDetails/Pricing.jsx';
import NotFound from '../pages/NotFound.jsx';
import ErrorHandler from '../components/ErrorHandler.jsx';
import Login, {
  loader as loginLoader,
  action as loginAction,
} from '../pages/Login.jsx';
import { checkAuth } from '../utilities/checkAuth.js';

export {
  Navbar,
  HostNavbar,
  hostNavbarLoader,
  HostVanNavbar,
  HostVanHeaderLoader,
  Home,
  About,
  Vans,
  vansLoader,
  VanDetails,
  vanDetailsLoader,
  Dashboard,
  dashboardLoader,
  Income,
  Reviews,
  HostVan,
  hostVanLoader,
  Details,
  Photos,
  Pricing,
  NotFound,
  ErrorHandler,
  Login,
  loginLoader,
  loginAction,
  checkAuth,
};
