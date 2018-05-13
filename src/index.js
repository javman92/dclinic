import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './calendar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Calendar />,
    document.getElementById('root')
);
registerServiceWorker();
