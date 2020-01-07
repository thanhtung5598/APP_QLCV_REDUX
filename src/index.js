import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppQLCV from './AppQLCV';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppQLCV />, document.getElementById('root'));
serviceWorker.unregister();
