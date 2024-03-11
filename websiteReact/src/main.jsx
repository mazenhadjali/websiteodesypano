import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { A, B, MAZEN, SAMER, YOSR } from './routes';

const router = createBrowserRouter([
  {
    path: A,
    element: <Layout />,
    children: [
      {
        path: SAMER,
        element: <div>Sameer</div>
      },
    ]

  },
  {
    path: B,
    element: <Layout />,
    children: [
      {
        path: MAZEN,
        element: <div>mazen</div>
      },
      {
        path: YOSR,
        element: <div>yosr</div>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);