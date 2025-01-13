import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
export default function Navbar() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
