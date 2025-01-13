import { Outlet } from 'react-router';
import HostHeader from './../components/HostHeader.jsx';
export default function HostNavbar() {
  return (
    <>
      <HostHeader />
      <Outlet />
    </>
  );
}
