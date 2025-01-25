import { Link, NavLink, Outlet } from 'react-router';
import { getVan } from './../utilities/api.js';
export function loader(id) {
  return { loadedVan: getVan(id) };
}
export default function HostVanHeader({ van }) {
  function VanInfo() {
    return (
      <>
        <div className="host-van-detail">
          <img src={van.imageUrl} alt="photo of the van" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type=${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
      </>
    );
  }
  const links = ['details', 'pricing', 'photos'];
  function LinksComponent() {
    return (
      <div className="nav-links">
        {links.map((link, i) => (
          <NavLink
            key={link}
            to={i === 0 ? '.' : link}
            end={i === 0}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <>
      <Link to=".." relative="path" className="back-button">
        &larr;
        <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <section className="host-van-nav">
          <VanInfo />
          <LinksComponent />
          <Outlet context={van} />
        </section>
      </div>
    </>
  );
}
