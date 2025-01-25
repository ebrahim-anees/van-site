import { Outlet } from 'react-router';
import HostHeader from './../components/HostHeader.jsx';
import { checkAuth } from './../utilities/checkAuth.js';
export async function loader({ request }) {
  await checkAuth(request.url);
  return null;
}
export default function HostNavbar() {
  return (
    <>
      <HostHeader />
      <Outlet />
    </>
  );
}
