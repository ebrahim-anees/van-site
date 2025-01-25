import { Await, Link, useLoaderData } from 'react-router';
import { getHostVans } from './../../../utilities/api.js';
import { Suspense } from 'react';

export function loader() {
  return { loadedVans: getHostVans() };
}
export default function HostVan() {
  const vansPromise = useLoaderData().loadedVans;

  function renderVansElements(vans) {
    const hostVan = vans.map((v) => (
      <Link to={v.id} key={v.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={v.id}>
          <img src={v.imageUrl} alt="van-img" />
          <div className="host-van-info">
            <h3>{v.name}</h3>
            <p>${v.price}/day</p>
          </div>
        </div>
      </Link>
    ));
    return <section>{hostVan}</section>;
  }

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <Suspense fallback={<h2 className='loading'>Loading vans...</h2>}>
          <Await resolve={vansPromise}>{renderVansElements}</Await>
        </Suspense>
      </div>
    </section>
  );
}
