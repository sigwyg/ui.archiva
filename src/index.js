import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stepbar from './components/Stepbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <div>
        <App />
        <Stepbar />
    </div>), document.getElementById('root'));
registerServiceWorker();
