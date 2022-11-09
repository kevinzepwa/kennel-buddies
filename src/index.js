import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instead
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';

// import ReactDOM from 'react-dom/client';
// import React from 'react';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
