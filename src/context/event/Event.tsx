import React, {useContext} from 'react';
import config from 'react-global-configuration';
import useWS from 'utilities/WS';

// tslint:disable-next-line:no-empty-interface
interface EventContext {
    close: () => void;
}

const Context = React.createContext({} as EventContext);

export default function EventContext({children}: { children?: React.ReactNode }) {
    const {
        state,
        closeWS
    } = useWS({url: config.get('eventURL')})

    return (
        <Context.Provider
            value={{
                close: closeWS
            }}
        >
            {children}
        </Context.Provider>
    );
};

export function useEventContext() {
    return useContext(Context);
}