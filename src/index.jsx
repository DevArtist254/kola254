import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import LandingPage from './lp';
import Cart from "./cart";
import Login from "./login";
import FrontalWigs from "./frontal-wigs";
import ClosureWigs from "./closure-wigs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: ([
      {
        path: "/home",
        element: <LandingPage />
      },
      {
        path: "/frontal-wigs",
        element: <FrontalWigs />
      },
      {
        path: "/closure-wigs",
        element: <ClosureWigs />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ])
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
