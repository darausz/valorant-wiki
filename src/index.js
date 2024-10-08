import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {BrowserRouter as Router} from "react-router-dom";
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

