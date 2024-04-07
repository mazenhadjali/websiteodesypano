import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CONTACT, APPROCHEDEDEV,CHAMPSINTERVENTION,HISTORIQUE,ORGANISATION,DIRECTIONGENARALE,ZONEINTERVENTION,GROUPECIBLE, DOMAINEACTIVITE,PARTENARIAT,OUTILDEGESTION,TEMOINAGE,ACCESINFO, PROJET, CREATION, FAQ, HOME, PRESNTATION } from './routes';
import './i18n';
import Home from './pages/home';
import HomeLayout from './layout/homeLayout';
import PresentationLayout from './layout/presentationLayout';
import ProjetLayout from './layout/projetLayout';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Creation from './pages/creation';
import Projet from './pages/projet';
import DomainActivite from './pages/domaineActivite';
import ApprocheDev from './pages/approcheDev';
import Partenariat from './pages/partenariat';
import OutilsGestion from './pages/outilsGestion';
import Temoinage from './pages/temoinage';
import AccesInfo from './pages/accessInfo';
import ChampsIntervention from './pages/champsIntervention';
import Historique from './pages/historique';
import Organisation from './pages/organisation';
import DirecionGenerale from './pages/direcionGenerale';
import ZoneIntervention from './pages/zoneIntervention';
import GroupeCible from './pages/groupeCible';

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
        element: <Contact />
      },
      {
        path: FAQ,
        element: <Faq/>
      },
      {
        path: DOMAINEACTIVITE,
        element: <DomainActivite />
      },
      {
        path: APPROCHEDEDEV,
        element: <ApprocheDev/>
      },
      {
        path: PARTENARIAT,
        element: <Partenariat/>
      },
      {
        path: OUTILDEGESTION,
        element: <OutilsGestion/>
      },
      {
        path: TEMOINAGE,
        element: <Temoinage/>
      },
      {
        path: ACCESINFO,
        element: <AccesInfo/>
      },
    ]
  },

  {
    path: PRESNTATION,
    element: <PresentationLayout />,
    children: [
      {
        path: CREATION,
        element: <Creation />
      },
      {
        path: CHAMPSINTERVENTION,
        element: <ChampsIntervention />
      },
      {
        path: HISTORIQUE,
        element: <Historique />
      },
      {
        path: ORGANISATION,
        element: <Organisation />
      },
      {
        path: DIRECTIONGENARALE,
        element: <DirecionGenerale />
      },
      {
        path: ZONEINTERVENTION,
        element: <ZoneIntervention />
      },
      {
        path: GROUPECIBLE,
        element: <GroupeCible />
      },
    ]

  },

  {
    path: PROJET,
    element: <ProjetLayout />,
    children: [
      {
        path: PROJET,
        element: <Projet />
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);