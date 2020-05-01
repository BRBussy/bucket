import React, {useContext, useEffect, useState} from 'react';
import config from 'react-global-configuration';
import io from 'socket.io-client';

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
    const [ws, setWS] = useState<SocketIOClient.Socket | undefined>(undefined);
    const [wsStatus, setWSStatus] = useState<WSStatus>(WSStatus.disconnected);

    const handleWSConnect = () => {
        console.log('ws connected!')
    };

    const handleWSEvent = (data: any) => {
        console.log('ws event!')
    };

    const handleWSDisconnect = () => {
        console.log('ws disconnect!')
    };

    useEffect(() => {
        const newWS = io(config.get('eventURL'));
        newWS.on('connect', handleWSConnect);
        newWS.on('event', handleWSEvent);
        newWS.on('disconnect', handleWSDisconnect);
        setWSStatus(WSStatus.connecting);
        setWS(newWS);
    }, [])

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