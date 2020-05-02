import React, {useContext} from 'react';
import config from 'react-global-configuration';
import useWS from 'utilities/WS';

// tslint:disable-next-line:no-empty-interface
interface EventContext {
}

const Context = React.createContext({} as EventContext);

export default function EventContext({children}: { children?: React.ReactNode }) {
    const {
        state
    } = useWS({url: config.get('eventURL')})

    console.log('ws state:', state);

    return (
        <Context.Provider
            value={{
            }}
        >
            {children}
        </Context.Provider>
    );
};

export function useEventContext() {
    return useContext(Context);
}