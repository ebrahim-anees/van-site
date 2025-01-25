import { Link, useLocation, useLoaderData, Await } from 'react-router';
import { getVan } from './../../utilities/api.js';
import { Suspense } from 'react';

export function loader({ params }) {
  const { id } = params;
  return { loadedVan: getVan(id) };
}
export default function VanDetails() {
  const vanPromise = useLoaderData().loadedVan;
  const location = useLocation();
  const vansType = location.state?.type || 'all'; //. this syntax is called (optional chaining)
  function renderVanElement(van) {
    return (
      <div className="van-detail-container">
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
      </div>
    );
  }
  return (
    <>
      <Link
        to={`..${location.state.search}`}
        relative="path"
        className="back-button"
      >
        &larr;
        <span>Back to {vansType} vans</span>
      </Link>
      <Suspense fallback={<h2 className="loading center">Loading van...</h2>}>
        <Await resolve={vanPromise}>{renderVanElement}</Await>
      </Suspense>
    </>
  );
}
