import { clsx } from 'clsx';
import { Suspense } from 'react';
import { Link, useSearchParams, useLoaderData, Await } from 'react-router';
import '../../../server.js';
import { getVans } from './../../utilities/api.js';

export function loader() {
  return { loadedVans: getVans() };
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams(),
    vansPromise = useLoaderData().loadedVans;

  const typeFilter = searchParams.get('typeFilter');

  function handleFiltration(key, value) {
    setSearchParams((prevParams) => {
      value === 'clear' ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  }

  function filtersClassName(filterName) {
    return clsx('van-type', filterName, {
      selected: typeFilter === filterName,
    });
  }
  function FilteredBtns() {
    const types = ['simple', 'luxury', 'rugged'];
    const filterBtns = types.map((btn) => (
      <button
        key={btn}
        className={filtersClassName(btn)}
        onClick={() => handleFiltration('typeFilter', btn)}
      >
        {btn[0].toUpperCase() + btn.slice(1)}
      </button>
    ));
    return (
      <>
        {filterBtns}
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => handleFiltration('typeFilter', 'clear')}
          >
            Clear filter
          </button>
        )}
      </>
    );
  }
  function renderVansElements(vans) {
    const filteredVans = typeFilter
      ? vans.filter((v) => v.type === typeFilter)
      : vans;
    const van = filteredVans.map((v) => (
      <div key={v.id} className="van-tile">
        <Link
          to={v.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
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
      <>
        <div className="van-list-filter-buttons">
          <FilteredBtns />
        </div>
        <div className="van-list">{van}</div>
      </>
    );
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      <Suspense fallback={<h2 className='loading'>Loading vans...</h2>}>
        <Await resolve={vansPromise}>{renderVansElements}</Await>
      </Suspense>
    </div>
  );
}
