import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Countrydetails from "./components/Countrydetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"/Country",
        element: <Countrydetails />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
