import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer/landingpage';

serviceWorker.unregister();

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
