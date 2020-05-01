import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EventContext from 'context/event';
import config from 'react-global-configuration';

let subdomain = 'localhost';
try {
    subdomain = window.location.hostname.split('.')[0];
} catch (e) {
    console.error('error determining subdomain', e);
}

if (subdomain === 'localhost') {
    config.set({
        eventURL: 'ws://localhost:8080/ws',
        authURL: 'http://localhost:8180/api',
        roleURL: 'http://localhost:8181/api',
        userURL: 'http://localhost:8182/api'
    });
} else {
    config.set({
        authURL: 'https://auth-ylnmede6pq-uc.a.run.app/api',
        userURL: 'https://user-ylnmede6pq-uc.a.run.app/api',
        roleURL: 'https://role-ylnmede6pq-uc.a.run.app/api'
    });
}

ReactDOM.render(
    <React.StrictMode>
        <EventContext>
            <App/>
        </EventContext>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
