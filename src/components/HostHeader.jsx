import { NavLink } from 'react-router';
export default function HostHeader() {
  const links = ['Dashboard', 'income', 'vans', 'reviews'];
  function LinksComponent() {
    return links.map((link, i) => (
      <NavLink
        key={link}
        to={i === 0 ? '.' : link}
        end={i === 0}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </NavLink>
    ));
  }
  return (
    <nav className="host-nav">
      <LinksComponent />
    </nav>
  );
}
