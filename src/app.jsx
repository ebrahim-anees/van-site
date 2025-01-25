import {
  // BrowserRouter as ParentRouter,
  // Routes as ChildRouter,
  Route as URL,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router';
import {
  Navbar,
  HostNavbar,
  hostNavbarLoader,
  HostVanNavbar,
  HostVanHeaderLoader,
  Home,
  About,
  Vans,
  vansLoader,
  VanDetails,
  vanDetailsLoader,
  Dashboard,
  dashboardLoader,
  Income,
  Reviews,
  HostVan,
  hostVanLoader,
  Details,
  Photos,
  Pricing,
  NotFound,
  ErrorHandler,
  Login,
  loginLoader,
  loginAction,
  checkAuth,
} from './imports';
// export default function App() {
//   return (
//     <ParentRouter>
//       <ChildRouter>
//         <URL path="/" element={<Navbar />}>
//           <URL index element={<Home />} />
//           <URL path="host" element={<HostNavbar />}>
//             <URL index element={<Dashboard />} />
//             <URL path="vans" element={<HostVan />} />
//             <URL path="vans/:id" element={<HostVanNavbar />}>
//               <URL index element={<Details />} />
//               <URL path="pricing" element={<Pricing />} />
//               <URL path="photos" element={<Photos />} />
//             </URL>
//             <URL path="income" element={<Income />} />
//             <URL path="reviews" element={<Reviews />} />
//           </URL>
//           <URL path="about" element={<About />} />
//           <URL path="vans" element={<Vans />} />
//           <URL path="vans/:id" element={<VanDetails />} />
//           <URL path="*" element={<NotFound />} />
//         </URL>
//       </ChildRouter>
//     </ParentRouter>
//   );
// }
const router = createBrowserRouter(
  createRoutesFromElements(
    <URL path="/" element={<Navbar />}>
      <URL index element={<Home />} />
      <URL path="host" element={<HostNavbar />} loader={hostNavbarLoader}>
        <URL
          index
          element={<Dashboard />}
          loader={async ({ request }) => {
            await checkAuth(request.url);
            return dashboardLoader();
          }}
        />
        <URL
          path="vans"
          element={<HostVan />}
          errorElement={<ErrorHandler />}
          loader={async ({ request }) => {
            await checkAuth(request.url);
            return hostVanLoader();
          }}
        />
        <URL
          path="vans/:id"
          element={<HostVanNavbar />}
          errorElement={<ErrorHandler />}
          loader={async ({ params, request }) => {
            await checkAuth(request.url);
            const { id } = params;
            return HostVanHeaderLoader(id);
          }}
        >
          <URL
            index
            element={<Details />}
            loader={async ({ request }) => checkAuth(request.url)}
          />
          <URL
            path="pricing"
            element={<Pricing />}
            loader={async ({ request }) => checkAuth(request.url)}
          />
          <URL
            path="photos"
            element={<Photos />}
            loader={async ({ request }) => checkAuth(request.url)}
          />
        </URL>
        <URL
          path="income"
          element={<Income />}
          loader={async ({ request }) => checkAuth(request.url)}
        />
        <URL
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => checkAuth(request.url)}
        />
      </URL>
      <URL path="about" element={<About />} />
      <URL
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <URL
        path="vans"
        element={<Vans />}
        errorElement={<ErrorHandler />}
        loader={vansLoader}
      />
      <URL
        path="vans/:id"
        element={<VanDetails />}
        errorElement={<ErrorHandler />}
        loader={vanDetailsLoader}
      />
      <URL path="*" element={<NotFound />} />
    </URL>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
