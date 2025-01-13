import {
  BrowserRouter as ParentRouter,
  Routes as ChildRouter,
  Route as URL,
} from 'react-router';
import Navbar from './layouts/Layout.jsx';
import HostNavbar from './layouts/HostNavbar.jsx';
import HostVanNavbar from './layouts/HostVanNavbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/vans/Vans.jsx';
import VanDetails from './pages/vans/VanDetails.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import HostVan from './pages/host/vans/HostVan.jsx';
import Details from './pages/host/vans/vansDetails/Details.jsx';
import Photos from './pages/host/vans/vansDetails/Photos.jsx';
import Pricing from './pages/host/vans/vansDetails/Pricing.jsx';
export default function App() {
  return (
    <ParentRouter>
      <ChildRouter>
        <URL path="/" element={<Navbar />}>
          <URL index element={<Home />} />
          <URL path="host" element={<HostNavbar />}>
            <URL index element={<Dashboard />} />
            <URL path="vans" element={<HostVan />} />
            <URL path="vans/:id" element={<HostVanNavbar />}>
              <URL index element={<Details />} />
              <URL path="pricing" element={<Pricing />} />
              <URL path="photos" element={<Photos />} />
            </URL>
            <URL path="income" element={<Income />} />
            <URL path="reviews" element={<Reviews />} />
          </URL>
          <URL path="about" element={<About />} />
          <URL path="vans" element={<Vans />} />
          <URL path="vans/:id" element={<VanDetails />} />
        </URL>
      </ChildRouter>
    </ParentRouter>
  );
}
