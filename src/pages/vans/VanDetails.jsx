import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
export default function VanDetails() {
  let { id } = useParams();
  const [van, setVan] = useState([]);
  useEffect(() => {
    async function fetchingData() {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();
      setVan(data.vans);
    }
    fetchingData();
  }, [id]);
  function VanDetails() {
    return (
      <div className="van-detail-container">
        {van ? (
          <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
  return <VanDetails />;
}
