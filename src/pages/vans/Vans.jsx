import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../../../server.js';
export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    async function fetchingData() {
      const response = await fetch('/api/vans');
      const data = await response.json();
      setVans(data.vans);
    }
    fetchingData();
  }, []);

  const van = vans.map((v) => (
    <div key={v.id} className="van-tile">
      <Link to={`/vans/${v.id}`}>
        <img src={v.imageUrl} alt="van-img" />
        <div className="van-info">
          <h3>{v.name}</h3>
          <p>
            ${v.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${v.type} selected`}>{v.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{van}</div>
    </div>
  );
}
