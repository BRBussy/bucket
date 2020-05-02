import React from 'react'
import {
    Button,
    makeStyles,
    Card, CardContent, Grid,
    TextField,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    layout: {
        display: 'grid',
        gridTemplateRows: 'repeat(auto, 3)',
        justifyItems: 'center',
        gridRowGap: theme.spacing(1)
    }
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card>
                <CardContent classes={{root: classes.layout}}>
                    <TextField
                        variant={'outlined'}
                        label={'Username'}
                    />
                    <TextField
                        variant={'outlined'}
                        label={'Password'}
                    />
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        children={'login'}
                    />
                </CardContent>
            </Card>
        </div>
    )
}