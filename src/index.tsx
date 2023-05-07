import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { DefaultLayout } from './layouts';
import { ErrorPage, Login, ForgotPassword, Home, Devices, Service, CapSo, Report } from './views';
import Dashboard from './views/Dashboard/Dashboard';
import store from './store/store';
import { Provider } from 'react-redux/es/exports';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/quenmatkhau",
    element: <ForgotPassword />
  },
  {
    path: "/trangchu",
    element: <DefaultLayout> <Home/> </DefaultLayout>
  },
  {
    path: "/thongke",
    element: <DefaultLayout> <Dashboard/> </DefaultLayout>
  },
  {
    path: "/thietbi",
    element: <DefaultLayout> <Devices/> </DefaultLayout>
  },
  {
    path: "/dichvu",
    element: <DefaultLayout><Service/></DefaultLayout>
  },
  {
    path: "/capso",
    element: <DefaultLayout><CapSo/></DefaultLayout>
  },
  {
    path: "/baocao",
    element: <DefaultLayout><Report/></DefaultLayout>
  }
])




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

