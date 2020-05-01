import React, {useContext} from 'react';

interface EventContext {
    eventContextConnected: boolean;
}

const Context = React.createContext({} as EventContext);

export default function EventContext({children}: { children?: React.ReactNode }) {
    return (
        <Context.Provider
            value={{
                eventContextConnected: false
            }}
        >
            {children}
        </Context.Provider>
    );
};

export function useEventContext() {
    return useContext(Context);
}