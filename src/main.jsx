import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Page
import Auth from './page/Auth.jsx';
import Home from './page/Home.jsx';

// Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'auth',
        element: <Auth />
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
