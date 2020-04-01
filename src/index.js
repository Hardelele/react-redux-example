import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Application';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
