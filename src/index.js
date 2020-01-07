import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppQLCV from './AppQLCV';
import * as serviceWorker from './serviceWorker';
import myReducers from "./reducers/index";
import {createStore} from 'redux';
import { Provider } from "react-redux";

const store = createStore(myReducers)

ReactDOM.render(
    <Provider store={store}>
        <AppQLCV />
    </Provider>
    ,document.getElementById('root'));
serviceWorker.unregister();
