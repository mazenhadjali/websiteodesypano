import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CONTACT, CREATION, FAQ, HOME, PRESNTATION } from './routes';
import Home from './pages/home';
import HomeLayout from './layout/homeLayout';
import PresentationLayout from './layout/presentationLayout';
import './i18n';

const router = createBrowserRouter([
  {
    path: HOME,
    element: <HomeLayout />,
    children: [
      {
        path: HOME,
        element: <Home />
      },
      {
        path: CONTACT,
        element: <div>contact</div>
      },
      {
        path: FAQ,
        element: <div>FAQ</div>
      },
    ]
  },
  {
    path: PRESNTATION,
    element: <PresentationLayout />,
    children: [
      {
        path: CREATION,
        element: <div>creation</div>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);