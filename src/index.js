import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import UserContextProvider from "./userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
      <ToastContainer />
    </UserContextProvider>
  </React.StrictMode>
);
