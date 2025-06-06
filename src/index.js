import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import "animate.css/animate.min.css";
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <Toaster /> */}
        <Toaster
          reverseOrder={false}
          toastOptions={{
            duration: 4000, // Auto-close duration for all toasts
          }}
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
