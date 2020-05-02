import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core'
import {Router, publicRoutes} from 'route';
import background from 'assets/background.png'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Router routes={publicRoutes}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
