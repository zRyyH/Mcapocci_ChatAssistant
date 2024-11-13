import { createContext } from 'react';
export const AppContext = createContext({
    sessionId: null,
    config: null,
    setConfig: null
});