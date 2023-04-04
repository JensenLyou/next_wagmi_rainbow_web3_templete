import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const OthersPages = lazy(() => import("../pages/OthersPages"));
const Layout = lazy(() => import("../components/Layout"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Children = lazy(() => import("../pages/Home/Children"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "children/:id",
        element: <Children />,
      },
      {
        path: "other",
        element: <OthersPages />,
      },
      // { path: "error", element: <ErrorPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export default routes;
