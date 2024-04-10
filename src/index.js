import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store";

const el = document.getElementById("root");

const root = createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
