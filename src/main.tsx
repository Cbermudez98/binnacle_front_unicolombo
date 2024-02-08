import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login.tsx';
import App from './App.tsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/index",
    element: <App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
