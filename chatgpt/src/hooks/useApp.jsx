import React, { useState, useEffect } from "react";
import { getConfig } from '../services/api_services';
import { v4 as uuidv4 } from 'uuid';

export default function useApp() {
    const [sessionId, setSessionId] = useState('')
    const [config, setConfig] = useState({})
    
    useEffect(() => {
        setSessionId(uuidv4());
        (async function () {
            let response = await getConfig()
            if (response) {
                setConfig(response)
            }
        })()

    }, [setSessionId]);

    return { sessionId, config, setConfig }
}