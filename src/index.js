import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./modules/Portfolio";
import Projects from "./modules/Projects";
import Sign_In from "./modules/Sign_In";
import Register from "./modules/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Sign_In",
    element: <Sign_In />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
