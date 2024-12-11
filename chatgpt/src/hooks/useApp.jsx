import { useState, useEffect } from "react";
import { getConfig } from '../services/api_services';
import { v4 as uuidv4 } from 'uuid';

export default function useApp() {
    const [sessionId, setSessionId] = useState('')
    const [config, setConfig] = useState({})

    const apiUrl = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        setSessionId(uuidv4());
        (async function () {
            let response = await getConfig(apiUrl)
            if (response) {
                setConfig(response)
            }
        })()

    }, [setSessionId, apiUrl]);

    return { sessionId, config, setConfig }
}