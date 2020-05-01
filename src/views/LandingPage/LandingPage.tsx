import React from 'react'
import {Button} from '@material-ui/core'
import {useEventContext} from 'context/event';

export default function LandingPage() {
    const eventContext = useEventContext();

    console.log(eventContext);

    return (
        <div>
            Landing page
            <Button
                children={'Login'}
            />
        </div>
    )
}