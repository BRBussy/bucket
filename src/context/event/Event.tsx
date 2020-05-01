import React, {useContext, useEffect, useState} from 'react';
import config from 'react-global-configuration';

export enum WSStatus {
    disconnected,
    connecting,
    connected,
    error
}

interface EventContext {
    eventContextWSStatus: WSStatus;
}

const Context = React.createContext({} as EventContext);

export default function EventContext({children}: { children?: React.ReactNode }) {
    const [ws, setWS] = useState<WebSocket | undefined>(undefined);
    const [wsStatus, setWSStatus] = useState<WSStatus>(WSStatus.disconnected);

    const handleWSConnect = (event: Event) => {
        console.log('ws connected!', event)
    };

    const handleWSMessage = (event: Event) => {
        console.log('ws message!', event)
        if (ws) {
            ws.send('i got a message from you #cute')
        }
    };

    const handleWSDisconnect = (event: Event) => {
        console.log('ws disconnect!', event)
    };

    const handleWSError = (event: Event) => {
        console.log('ws error!', event)
    };

    useEffect(() => {
        const newWS = new WebSocket(config.get('eventURL'))
        setWSStatus(WSStatus.connecting);
        setWS(newWS);
    }, [])

    useEffect(() => {
        if (ws) {
            ws.onopen = handleWSConnect
            ws.onmessage = handleWSMessage
            ws.onclose = handleWSDisconnect
            ws.onerror = handleWSError
        }
    }, [ws])

    return (
        <Context.Provider
            value={{
                eventContextWSStatus: wsStatus
            }}
        >
            {children}
        </Context.Provider>
    );
};

export function useEventContext() {
    return useContext(Context);
}