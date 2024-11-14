import { AppContext } from '../contexts/appContext';
import useApp from '../hooks/useApp';
import App from '../app'

export default function AppProvider() {
    const {
        sessionId,
        config,
        setConfig } = useApp();

    return (
        <AppContext.Provider
            value={{
                sessionId,
                config,
                setConfig
            }}>
            <App />
        </AppContext.Provider>
    );
};