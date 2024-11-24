import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/slides/css/style.css";
import "./assets/slides/css/responsive.css";
import "./assets/slides/css/shortcodes.css";
import "./assets/slides/css/swiper-bundle.min.css";

import App from "./App";
import { Provider } from "react-redux";
import { stores } from "./stores";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={stores}>
    <App />
  </Provider>
);
