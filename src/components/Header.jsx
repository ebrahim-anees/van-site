import { Link, NavLink } from 'react-router';
import loginIcon from './../assets/images/avatar-icon.png';
export default function Header() {
  const links = ['host', 'about', 'vans', 'login'];
  function LinksComponent() {
    return links.map((link, i) =>
      i !== 3 ? (
        <NavLink
          key={link}
          to={link}
          end={i === 2}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </NavLink>
      ) : (
        <NavLink
          key={link}
          to={link}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          <img src={loginIcon} alt="login-icon" className="login-icon" />
        </NavLink>
      )
    );
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
