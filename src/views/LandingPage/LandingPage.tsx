import React from 'react'
import {Button, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant={'contained'}
                color={'primary'}
                children={'Login'}
            />
        </div>
    )
}