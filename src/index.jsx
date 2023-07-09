import React from 'react';
import ReactDOM from 'react-dom/client';

//State
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './redux/store';

//Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
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
   <Provider store={store}>
    <PersistGate persistor={persistor}>
     <RouterProvider router={router} />
    </PersistGate>
   </Provider>
  </React.StrictMode>
);
