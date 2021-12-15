import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './index.scss';

import App from "./App";
import { store } from "./redux/store-redux";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";


ReactDOM.render((
  <BrowserRouter>
    <Provider store={ store }>
      <App/>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));


window.store = store;



reportWebVitals();
