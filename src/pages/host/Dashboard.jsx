import { Suspense } from 'react';
import { Link, Await, useLoaderData } from 'react-router';
import { BsStarFill } from 'react-icons/bs';
import { getHostVans } from './../../utilities/api.js';
export async function loader() {
  return { loadedVans: getHostVans() };
}

export default function Dashboard() {
  const vansPromise = useLoaderData().loadedVans;

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`} className='view-link'>View</Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income" className='details'>Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews" className='details'>Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans" className='view-all'>View all</Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={vansPromise}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </>
  );
}
