import { clsx } from 'clsx';
import {
  useLoaderData,
  useActionData,
  useNavigation,
  Form,
  redirect,
} from 'react-router';
import { loginUser } from './../utilities/api.js';
export function loader({ request }) {
  return new URL(request.url).searchParams.get('msg');
}
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const pathname = new URL(request.url).searchParams.get('redirect') || '/host';
  try {
    const data = await loginUser({ email, password });
    sessionStorage.setItem('isLoggedIn', true);
    const response = redirect(`${pathname}`);
    response.body = true;
    return response;
  } catch (err) {
    sessionStorage.removeItem('isLoggedIn');
    return err.msg;
  }
}
export default function Login() {
  /// it is used to get the return from loader function
  const loginFirstMsg = useLoaderData();
  /// it is used to get the return from action function
  const error = useActionData();
  /// it is used to track the state of the Form
  const navigation = useNavigation();
  const status = navigation.state;
  const loginBtnClassName = clsx('loginBtn', {
    disabled: status === 'submitting',
  });
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {error ? (
        <h3 className="error">{error.data.message}</h3>
      ) : loginFirstMsg ? (
        <h3 className="red">{loginFirstMsg}</h3>
      ) : null}
      <Form method="POST" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button
          disabled={status === 'submitting'}
          className={loginBtnClassName}
        >
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
}
