import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import LandingPage from './pages/landing-page';
import Cart from "./pages/cart";
import Login from "./pages/login";
import FrontalWigs from "./pages/frontal-wigs";
import ClosureWigs from "./pages/closure-wigs";

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
