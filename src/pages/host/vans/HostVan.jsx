import { useEffect, useState } from 'react';
import { Link } from 'react-router';
export default function HostVan() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    async function fetchingData() {
      const response = await fetch('/api/host/vans');
      const data = await response.json();
      setVans(data.vans);
    }
    fetchingData();
  }, []);
  const hostVan = vans.map((v) => (
    <Link
      to={`/host/vans/${v.id}`}
      key={v.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={v.id}>
        <img src={v.imageUrl} alt="van-img" />
        <div className="host-van-info">
          <h3>{v.name}</h3>
          <p>${v.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? <section>{hostVan}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
}
