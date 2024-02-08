import 'react-toastify/dist/ReactToastify.css';
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login.tsx';

const Index = lazy(() => import("./pages/Index/Index.tsx"));
const Guard = lazy(() => import("./Guard/Guard.tsx"));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/index',
    element: <Guard Children={Index} />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
