import {useEffect, useState} from 'react';

export enum WSState {
    disconnected= 'disconnected',
    connecting = 'connecting',
    connected = 'connected',
    error = 'error'
}

interface WSProps {
    url: string,
    onOpen?: () => void;
    onClose?: () => void;
    onError?: () => void;
    onMessage?: (msg: string) => void;
}

export default function useWS({
                                  url,
                                  onOpen,
                                  onClose,
                                  onError,
                                  onMessage
                              }: WSProps) {
    const [state, setState] = useState<WSState>(WSState.disconnected);
    const [ws, setWS] = useState<WebSocket | undefined>(undefined);

    useEffect(() => {
        setState(WSState.connecting);
        try {
            setWS(new WebSocket(url))
        } catch (e) {
            console.error(`error starting web socket: ${e}`)
            setState(WSState.error);
        }
    }, [url])

    useEffect(() => {
        if (ws) {
            ws.onopen = (e: Event) => {
                console.debug('web socket opened', e)
                setState(WSState.connected);
                if (onOpen) {
                    onOpen();
                }
            };
            ws.onmessage = (e: MessageEvent) => {
                console.debug('web socket message', e)
                if (onMessage) {
                    onMessage(e.data);
                }
            };
            ws.onclose = (e: Event) => {
                console.debug('web socket closed', e)
                setState(WSState.disconnected);
                if (onClose) {
                    onClose();
                }
            };
            ws.onerror = (e: Event) => {
                console.error('web socket error', e);
                setState(WSState.error);
                if (onError) {
                    onError();
                }
            };
        } else {
            setState(WSState.disconnected);
        }
    }, [ws, onOpen, onClose, onError])

    return {
        state
    }
}