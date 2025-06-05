import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "./../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../providers/PrivateRoute";
import NewsDetails from "./../pages/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/newsData.json"),
        hydrateFallbackElement: (
          <div className="grid place-content-center w-full min-h-116">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/newsData.json"),
    hydrateFallbackElement: (
      <div className="grid place-content-center w-full min-h-116">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    ),
  },
  {
    path: "/*",
    element: (
      <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto min-h-screen grid place-content-center">
        <h1 className="text-primary font-bold text-2xl lg:text-3xl">
          Page Not Found!!
        </h1>
      </div>
    ),
  },
]);
