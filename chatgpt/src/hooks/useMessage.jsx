import { useState, useEffect, useContext } from 'react';
import { fetchData } from '../services/api_services'
import { ChatContext } from '../contexts/chatContext';
import { AppContext } from '../contexts/appContext';

const useFetchData = (index) => {
    const { chat, autoScroll } = useContext(ChatContext);
    const { sessionId, config } = useContext(AppContext);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const message = chat[index]

    const mode = message.mode
    const msg = message.msg

    const author = mode === 'USER' ? 'Você' : config.name

    useEffect(() => {
        (async () => {
            const data = {
                user_input: String(msg),
                user_id: String(sessionId)
            }

            if (mode === 'ASSISTENT') {
                setData(await fetchData(data))
            } else {
                setData(msg)
            }

            setLoading(false)
            autoScroll()
        })()

    }, [mode, msg, sessionId]);

    return { data, loading, author, mode };
};

export default useFetchData;