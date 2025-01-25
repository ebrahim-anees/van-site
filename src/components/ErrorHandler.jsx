import { useRouteError } from 'react-router';

export default function ErrorHandler() {
  const error = useRouteError();
  return (
    <div className='error-container'>
      <h1>{error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
  );
}
