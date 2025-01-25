import { Await, useLoaderData } from 'react-router';
import HostVanHeader from './../components/HostVanHeader.jsx';
import { loader as HostVanHeaderLoader } from './../components/HostVanHeader.jsx';
import { Suspense } from 'react';
export default function HostVanNavbar() {
  const vanPromise = useLoaderData().loadedVan;
  return (
    <Suspense fallback={<h2 className='loading px-26 pt-45'>Loading van...</h2>}>
      <Await resolve={vanPromise}>{(van) => <HostVanHeader van={van} />}</Await>
    </Suspense>
  );
}
export { HostVanHeaderLoader };
