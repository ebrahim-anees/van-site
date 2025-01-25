import { redirect } from 'react-router';

export async function checkAuth(url) {
  const pathname = new URL(url).pathname;
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    const response = redirect(
      `/login?msg=You must log in first&redirect=${pathname}`
    );
    response.body = true;
    throw response;
  }
  return null;
}
