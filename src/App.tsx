import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Router, publicRoutes} from 'route';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Router routes={publicRoutes}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
