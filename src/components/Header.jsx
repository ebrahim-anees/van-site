import { Link, NavLink } from 'react-router';

export default function Header() {
  const links = ['host', 'about', 'vans'];
  function LinksComponent() {
    return links.map((link, i) => (
      <NavLink
        key={link}
        to={link}
        end={i === 2}
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </NavLink>
    ));
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <LinksComponent />
      </nav>
    </header>
  );
}
