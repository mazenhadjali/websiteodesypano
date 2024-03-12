import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CREATION, HOME, PRESNTATION } from './routes';
import Home from './pages/home';
import HomeLayout from './layout/homeLayout';
import PresentationLayout from './layout/presentationLayout';

const router = createBrowserRouter([
  {
    path: HOME,
    element: <HomeLayout />,
    children: [
      {
        path: HOME,
        element: <Home />
      },
    ]

  },
  {
    path: PRESNTATION,
    element: <PresentationLayout />,
    children: [
      {
        path: CREATION,
        element: <div>a</div>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);